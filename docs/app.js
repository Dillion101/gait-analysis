const PROJECT = {
  repositoryUrl: "https://github.com/Dillion101/gait-analysis",
};

const methods = {
  gei: { code: "GEI", type: "APPEARANCE-BASED", name: "Gait Energy Image", description: "Averages every silhouette in the gait cycle. Stable body regions remain bright; moving limbs become softer traces.", captures: "Shape + averaged motion", dense: "88.41%", res: "81.42%", image: "assets/representations/gei.png", alt: "Gait Energy Image representation" },
  geni: { code: "GEnI", type: "ENTROPY-BASED", name: "Gait Entropy Image", description: "Measures pixel-level uncertainty across a gait cycle, emphasising the areas where the silhouette changes most.", captures: "Dynamic variability", dense: "86.39%", res: "80.26%", image: "assets/representations/geni.png", alt: "Gait Entropy Image representation" },
  gfi: { code: "GFI", type: "FLOW-BASED", name: "Gait Flow Image", description: "Encodes relative motion through optical-flow-derived features, retaining directional movement in a compact image.", captures: "Motion direction", dense: "82.96%", res: "81.91%", image: "assets/representations/gfi.png", alt: "Gait Flow Image representation" },
  msi: { code: "MSI", type: "MOTION-BASED", name: "Motion Silhouette Image", description: "Highlights motion between consecutive silhouettes so that changing body regions carry the strongest signal.", captures: "Frame-to-frame change", dense: "83.87%", res: "80.32%", image: "assets/representations/msi.png", alt: "Motion Silhouette Image representation" },
  dewgi: { code: "DEWGI", type: "FUSION · PROPOSED", name: "Dynamic Entropy-Weighted Gait Image", description: "The project’s proposed representation weights the gait energy image with entropy, joining stable appearance and dynamic movement cues.", captures: "Static + dynamic fusion", dense: "92.34%", res: "88.17%", image: "assets/representations/dewgi.png", alt: "Dynamic Entropy-Weighted Gait Image representation" },
};

document.querySelectorAll(".repository-link").forEach((link) => { link.href = PROJECT.repositoryUrl; });

const themeToggle = document.querySelector("#themeToggle");
function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} theme`);
  themeToggle.querySelector("span").textContent = dark ? "☀" : "◐";
  document.querySelector('meta[name="theme-color"]').content = dark ? "#101310" : "#eeeadd";
}
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("gait-theme", next);
  updateThemeButton();
});
updateThemeButton();

const screeningStages = {
  search: { label:"STAGE 01 · DISCOVERY", number:"6,952", title:"A deliberately broad search", copy:"Search strings around gait, silhouettes, feature representation, and biometric recognition produced a wide pool across the databases recorded in the extraction sheet.", sources:[5348,837,767] },
  protocol: { label:"STAGE 02 · PROTOCOL FILTER", number:"707", title:"Date, access, language, duplicates", copy:"The protocol removed 6,245 records. Work published before 2014, unavailable in full text, not written in English, duplicated, or outside the core scope did not move forward.", sources:[404,161,142] },
  abstract: { label:"STAGE 03 · ABSTRACT REVIEW", number:"279", title:"Relevance from titles and abstracts", copy:"The team read titles and abstracts and removed another 428 records whose objectives did not directly address gait silhouette representation or the research questions.", sources:[151,44,84] },
  final: { label:"STAGE 04 · FULL-TEXT REVIEW", number:"72", title:"The core systematic-review set", copy:"Full-text assessment removed 207 more records, leaving 72 in the workbook's original screening funnel. Research continued afterward: the workbook has 85 entries and the archive now contains 95 PDFs.", sources:[31,36,5] },
};
document.querySelectorAll(".funnel-step").forEach((button) => button.addEventListener("click", () => {
  const stageData = screeningStages[button.dataset.stage];
  document.querySelectorAll(".funnel-step").forEach((item) => item.classList.remove("active")); button.classList.add("active");
  document.querySelector("#screeningLabel").textContent = stageData.label;
  document.querySelector("#screeningNumber").textContent = stageData.number;
  document.querySelector("#screeningTitle").textContent = stageData.title;
  document.querySelector("#screeningCopy").textContent = stageData.copy;
  const sourceIds = [["sourceScience","sourceScienceBar"],["sourceIeee","sourceIeeeBar"],["sourceSpringer","sourceSpringerBar"]];
  const total = stageData.sources.reduce((sum, value) => sum + value, 0);
  sourceIds.forEach(([numberId, barId], index) => {
    document.querySelector(`#${numberId}`).textContent = stageData.sources[index].toLocaleString();
    document.querySelector(`#${barId}`).style.setProperty("--portion", `${stageData.sources[index] / total * 100}%`);
  });
}));

let activePaperFilter = "all";
let papersExpanded = false;
let paperSortDescending = true;
const paperRows = document.querySelector("#paperRows");
function paperCategory(paper) {
  const text = `${paper.title} ${paper.method}`.toLowerCase();
  if (/energy|entropy|gei|geni/.test(text)) return "energy";
  if (/flow|motion|temporal|dynamic/.test(text)) return "flow";
  if (/gaitstar|gaitgraph|gaitpart|gaitset|gaitgl|neural|cnn|convolution|attention|deep|network/.test(text)) return "modern";
  return "other";
}
function renderPapers() {
  const query = document.querySelector("#paperSearch").value.toLowerCase().trim();
  const matching = papers
    .filter((paper) => (activePaperFilter === "all" || paperCategory(paper) === activePaperFilter) && `${paper.title} ${paper.method} ${paper.journal} ${paper.year}`.toLowerCase().includes(query))
    .slice()
    .sort((a, b) => {
      const yearA = Number.parseInt(a.year, 10);
      const yearB = Number.parseInt(b.year, 10);
      if (Number.isNaN(yearA) && Number.isNaN(yearB)) return a.title.localeCompare(b.title);
      if (Number.isNaN(yearA)) return 1;
      if (Number.isNaN(yearB)) return -1;
      return paperSortDescending ? yearB - yearA || a.title.localeCompare(b.title) : yearA - yearB || a.title.localeCompare(b.title);
    });
  const visible = papersExpanded ? matching : matching.slice(0, 12);
  paperRows.innerHTML = visible.map((paper) => `<div class="paper-row" role="row"><span>${paper.year}</span><span>${paper.title}</span><span>${paper.method}</span><span>${paper.journal}</span></div>`).join("");
  document.querySelector("#paperCount").textContent = `${visible.length} of ${matching.length} ${matching.length === 1 ? "entry" : "entries"}`;
  document.querySelector("#paperEmpty").hidden = matching.length > 0;
  const more = document.querySelector("#paperMore");
  more.hidden = matching.length <= 12;
  more.textContent = papersExpanded ? "Show fewer ↑" : `Show all ${matching.length} entries ↓`;
}
document.querySelector("#paperSearch").addEventListener("input", () => { papersExpanded = false; renderPapers(); });
document.querySelectorAll("#paperFilters button").forEach((button) => button.addEventListener("click", () => {
  activePaperFilter = button.dataset.filter;
  papersExpanded = false;
  document.querySelectorAll("#paperFilters button").forEach((item) => item.classList.remove("active")); button.classList.add("active"); renderPapers();
}));
document.querySelector("#paperMore").addEventListener("click", () => {
  const wasExpanded = papersExpanded;
  papersExpanded = !papersExpanded;
  renderPapers();
  if (wasExpanded) requestAnimationFrame(() => document.querySelector("#paperMore").scrollIntoView({ behavior:"smooth", block:"end" }));
});
document.querySelector("#paperYearSort").addEventListener("click", (event) => {
  paperSortDescending = !paperSortDescending;
  papersExpanded = false;
  event.currentTarget.textContent = paperSortDescending ? "YEAR ↓" : "YEAR ↑";
  event.currentTarget.setAttribute("aria-label", `Sort papers ${paperSortDescending ? "oldest" : "newest"} first`);
  renderPapers();
});
renderPapers();

const stage = document.querySelector(".feature-stage");
const featureImage = document.querySelector("#featureImage");
document.querySelectorAll(".method-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const method = methods[tab.dataset.method];
    document.querySelectorAll(".method-tab").forEach((item) => { item.classList.remove("active"); item.setAttribute("aria-selected", "false"); });
    tab.classList.add("active"); tab.setAttribute("aria-selected", "true"); stage.classList.add("switching");
    setTimeout(() => {
      featureImage.src = method.image; featureImage.alt = method.alt;
      document.querySelector("#methodCode").textContent = method.code;
      document.querySelector("#methodType").textContent = method.type;
      document.querySelector("#methodName").textContent = method.name;
      document.querySelector("#methodDescription").textContent = method.description;
      document.querySelector("#methodCaptures").textContent = method.captures;
      document.querySelector("#methodDense").textContent = method.dense;
      document.querySelector("#methodRes").textContent = method.res;
      stage.classList.remove("switching");
    }, 180);
  });
});

const angles = ["000", "018", "036", "054", "072", "090", "108", "126", "144", "162", "180"];
document.querySelector("#angleSlider").addEventListener("input", (event) => {
  const angle = angles[Number(event.target.value)];
  const image = document.querySelector("#viewImage");
  image.style.opacity = ".25";
  setTimeout(() => { image.src = `assets/views/057_nm-01_${angle}.png`; image.alt = `DEWGI sample at ${Number(angle)} degrees`; document.querySelector("#viewAngle").textContent = `${angle}°`; image.style.opacity = "1"; }, 120);
});

const scores = {
  dense: { name: "DenseNet", values: { GEI:88.41, GEnI:86.39, GFI:82.96, MSI:83.87, DEWGI:92.34 }, best:"92.34", loss:"0.27", copy:"The proposed representation led the five-method comparison, improving on GEI by 3.93 percentage points." },
  res: { name: "ResNet", values: { GEI:81.42, GEnI:80.26, GFI:81.91, MSI:80.32, DEWGI:88.17 }, best:"88.17", loss:"0.51", copy:"DEWGI also led with ResNet, improving on the next-best representation, GFI, by 6.26 percentage points." },
};
const chart = document.querySelector("#chart");
function renderChart(modelKey) {
  const model = scores[modelKey]; chart.innerHTML = "";
  Object.entries(model.values).forEach(([label,value]) => {
    const row = document.createElement("div"); row.className = `bar-row${label === "DEWGI" ? " best" : ""}`;
    row.innerHTML = `<span>${label}</span><div class="bar-track"><div class="bar-fill"></div></div><strong class="bar-value">${value.toFixed(2)}%</strong>`;
    chart.appendChild(row); requestAnimationFrame(() => { row.querySelector(".bar-fill").style.width = `${value}%`; });
  });
  document.querySelector("#bestScore").innerHTML = `${model.best}<span>%</span>`;
  document.querySelector("#bestTitle").textContent = `DEWGI + ${model.name}`;
  document.querySelector("#bestCopy").textContent = model.copy;
  document.querySelector("#bestLoss").textContent = model.loss;
}
document.querySelectorAll(".model-switch button").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll(".model-switch button").forEach((item) => item.classList.remove("active")); button.classList.add("active"); renderChart(button.dataset.model);
}));
renderChart("dense");

const enhancements = {
  representation: { label:"WHAT CHANGED · 01", title:"A fused sequence descriptor", copy:"CLAHE and bilateral filtering prepare each frame. A small CNN extracts appearance cues while Farneback optical flow captures magnitude and direction. Temporal weights pool both streams into one feature image.", specs:["CLAHE contrast","Edge-preserving filter","Dense optical flow","Temporal pooling"] },
  architecture: { label:"WHAT CHANGED · 02", title:"A deeper attention-residual backbone", copy:"The classifier uses a 7×7 convolutional stem followed by four residual stages containing 3, 4, 6, and 3 blocks. Channel-attention modules after every stage learn which feature maps deserve more weight.", specs:["Residual shortcuts","4 attention stages","1024 channels","512-D embedding"] },
  supervision: { label:"WHAT CHANGED · 03", title:"Two classifiers teach one embedding", copy:"During training, a main linear classifier and a deeper auxiliary head both supervise the shared 512-dimensional feature. The auxiliary loss contributes 0.4× to the combined objective and is removed at inference.", specs:["Main head","Auxiliary head","0.4× auxiliary loss","Shared embedding"] },
  training: { label:"WHAT CHANGED · 04", title:"A more strongly regularised recipe", copy:"Random horizontal flips and erasing augment the data. Label smoothing reduces overconfidence, AdamW adds decoupled weight decay, a cosine one-cycle schedule shapes learning, and gradient clipping stabilises updates.", specs:["Label smoothing 0.1","AdamW · decay 0.05","OneCycle cosine","Gradient norm 1.0"] },
};
document.querySelectorAll(".enhancement-tab").forEach((tab) => tab.addEventListener("click", () => {
  const item = enhancements[tab.dataset.enhancement];
  document.querySelectorAll(".enhancement-tab").forEach((button) => { button.classList.remove("active"); button.setAttribute("aria-selected","false"); });
  tab.classList.add("active"); tab.setAttribute("aria-selected","true");
  document.querySelector("#enhancementLabel").textContent = item.label;
  document.querySelector("#enhancementTitle").textContent = item.title;
  document.querySelector("#enhancementCopy").textContent = item.copy;
  document.querySelector("#enhancementSpecs").innerHTML = item.specs.map((spec) => `<b>${spec}</b>`).join("");
}));

window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  document.querySelector("#readingProgress").style.width = `${max > 0 ? scrollY / max * 100 : 0}%`;
}, { passive:true });

const tour = [
  { title:"The question came first.", copy:"Could the way a walking sequence is compressed determine how well a neural network recognises the walker? That question connected our literature review, feature experiments, and final model." },
  { title:"We mapped the field.", copy:"The workbook records 6,952 initial search results, a 72-paper core screening set, 85 extraction entries, and a later archive of 95 PDF files. Reading revealed a trade-off between stable appearance and dynamic motion." },
  { title:"We held the classifiers constant.", copy:"GEI, GEnI, GFI, MSI, and DEWGI were each tested with DenseNet and ResNet. Using two CNN families helped reveal whether a representation remained useful across architectures." },
  { title:"Fusion produced the strongest representation.", copy:"DEWGI combines gait energy with entropy-weighted change. It ranked first in both matched comparisons: 92.34% with DenseNet and 88.17% with ResNet." },
  { title:"Then we pushed GaitSTAR further.", copy:"A fused appearance-and-flow image fed a deeper residual network with four channel-attention stages, dual classifier heads, and a regularised training recipe. The notebook records a best holdout accuracy of 98.712%." },
  { title:"The result has boundaries.", copy:"This was an unpublished normal-condition CASIA-B experiment. The holdout set was used for model selection and final reporting, training was not fully deterministic, and no peer review or independent reproduction has occurred." },
];
const tourDialog = document.querySelector("#tourDialog");
let tourIndex = 0;
function renderTour() {
  const item = tour[tourIndex];
  document.querySelector("#tourStep").textContent = `GUIDED WALKTHROUGH · ${tourIndex + 1} / ${tour.length}`;
  document.querySelector("#tourTitle").textContent = item.title;
  document.querySelector("#tourCopy").textContent = item.copy;
  document.querySelector("#tourProgress").style.width = `${(tourIndex + 1) / tour.length * 100}%`;
  document.querySelector("#tourBack").disabled = tourIndex === 0;
  document.querySelector("#tourNext").textContent = tourIndex === tour.length - 1 ? "Finish" : "Next chapter →";
}
document.querySelector("#tourOpen").addEventListener("click", () => {
  tourIndex = 0; renderTour();
  if (typeof tourDialog.showModal === "function") tourDialog.showModal(); else tourDialog.setAttribute("open", "");
});
document.querySelector("#tourClose").addEventListener("click", () => tourDialog.close());
document.querySelector("#tourBack").addEventListener("click", () => { if (tourIndex > 0) { tourIndex -= 1; renderTour(); } });
document.querySelector("#tourNext").addEventListener("click", () => {
  if (tourIndex === tour.length - 1) { tourDialog.close(); return; }
  tourIndex += 1; renderTour();
});

const gaitDialog = document.querySelector("#gaitDialog");
document.querySelector("#gaitOpen").addEventListener("click", () => {
  if (typeof gaitDialog.showModal === "function") gaitDialog.showModal(); else gaitDialog.setAttribute("open", "");
});
document.querySelector("#gaitClose").addEventListener("click", () => gaitDialog.close());
document.querySelector("#gaitContinue").addEventListener("click", () => {
  gaitDialog.close();
  document.querySelector("#research").scrollIntoView({ behavior:"smooth" });
});
[tourDialog, gaitDialog].forEach((dialog) => dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
}));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("in-view"); }), { threshold:.15 });
document.querySelectorAll("section").forEach((section) => observer.observe(section));
