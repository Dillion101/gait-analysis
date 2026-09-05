# Impact of Silhouette Feature Representation on Gait Analysis

> An unpublished undergraduate research project from the Department of Computer Science, University of Ghana (September 2024).

[Explore the interactive case study](./docs/) · [Browse extraction notebooks](./notebooks/extraction/) · [Browse classification notebooks](./notebooks/classification/) · [Reproducibility record](./REPRODUCIBILITY.md)

## Research question

How does the representation of a silhouette sequence affect a deep neural network's ability to recognise a person by their gait?

We compared five feature representations: Gait Energy Image (GEI), Gait Entropy Image (GEnI), Gait Flow Image (GFI), Motion Silhouette Image (MSI), and our Dynamic Entropy-Weighted Gait Image (DEWGI), using DenseNet and ResNet classifiers. We then built a project-specific adaptation of GaitSTAR with a fused feature pipeline and an enhanced attention-residual classifier.

## The research journey

The work began with a structured literature review rather than a predetermined model. The extraction workbook records this screening funnel:

| Review stage | Records remaining | Removed at stage |
|---|---:|---:|
| Initial database search | 6,952 | N/A |
| Review-protocol filters | 707 | 6,245 |
| Title and abstract review | 279 | 428 |
| Final full-text set | 72 | 207 |

The protocol prioritised English-language, full-text work published from 2014 onward and directly relevant to gait silhouette feature representation. The seven-sheet workbook contains 85 article entries representing 84 unique titles, technique frequencies, research objectives, and evidence tables for reported strengths and weaknesses. The local research archive later grew to 95 PDF files. These are related but distinct counts: 72 is the core funnel endpoint, 85 is the workbook inventory, and 95 is the current PDF-file count. This evidence exposed a recurring trade-off: appearance-based summaries were efficient but discarded motion, while dynamic approaches retained change at greater complexity. That observation shaped both project contributions.

## Two contributions

### 1. Dynamic Entropy-Weighted Gait Image

DEWGI combines stable appearance information with pixel-level gait variability. It led the matched representation comparison with both classifiers: **92.34% with DenseNet** and **88.17% with ResNet**.

### 2. Enhanced GaitSTAR experiment

The project retained GaitSTAR's core motivation, combining spatial appearance and temporal motion with attention, while implementing a new end-to-end experimental pipeline:

1. **Fused representation:** CLAHE contrast enhancement and bilateral filtering, a small CNN appearance stream, Farneback optical-flow magnitude and direction, and temporally weighted pooling.
2. **Deeper backbone:** a 7×7 convolutional stem followed by residual stages containing 3, 4, 6, and 3 blocks.
3. **Multi-stage attention:** channel reweighting after each of the four residual stages.
4. **Compact embedding:** global average pooling and a regularised 512-dimensional feature layer.
5. **Dual supervision:** a main classifier plus an auxiliary classifier weighted at 0.4 during training.
6. **Training changes:** random flips and erasing, 0.1 label smoothing, AdamW with 0.05 weight decay, cosine OneCycle scheduling, and gradient clipping at norm 1.0.

The saved notebook output records a best test accuracy of **98.712%** for 124-way classification under the project's normal-condition split. The final report places this beside published benchmark values, including 97.4% for the original GaitSTAR paper. This is contextual comparison, not a controlled ablation or independent reimplementation of every baseline.

## Results at a glance

| Representation | DenseNet accuracy | ResNet accuracy | DenseNet loss | ResNet loss |
|---|---:|---:|---:|---:|
| GEI | 88.41% | 81.42% | 0.43 | 0.91 |
| GEnI | 86.39% | 80.26% | 0.48 | 1.22 |
| GFI | 82.96% | 81.91% | 0.61 | 0.93 |
| MSI | 83.87% | 80.32% | 0.52 | 1.12 |
| **DEWGI (proposed)** | **92.34%** | **88.17%** | **0.27** | **0.51** |

The Enhanced GaitSTAR result is deliberately kept separate from the DenseNet/ResNet representation comparison because it used a different feature and classifier pipeline.

## Experimental scope

- Dataset: CASIA-B silhouettes
- Subjects represented: 124
- Camera viewpoints: 11 (0° to 180° in 18° increments)
- Walking condition: normal sequences only
- Primary metrics: final test accuracy and cross-entropy loss
- Tooling: Python, TensorFlow, PyTorch, OpenCV, NumPy, Pandas, and Kaggle GPU runtimes

These results belong to the project's own experimental protocol. They have not been peer-reviewed or independently reproduced and should not be interpreted as performance under coat, bag, clinical, or uncontrolled real-world conditions.

## Repository map

```text
.
├── README.md                 # Project overview and contribution statement
├── REPRODUCIBILITY.md        # Reconstructed environment, protocol, and caveats
├── requirements.txt          # Unpinned dependencies recovered from imports
├── docs/                     # Interactive static case study (GitHub Pages ready)
├── notebooks/
│   ├── extraction/           # GEI, GEnI, GFI, MSI, DEWGI, GaitSTAR preprocessing
│   └── classification/       # DenseNet, ResNet, Enhanced GaitSTAR experiments
└── research-materials/
    └── README.md             # What exists and how to request it
```

The project documentation, presentation, and extraction workbook are not distributed here, because the University of Ghana does not permit public distribution of final-year project files. See [`research-materials/`](./research-materials/) for what is available on request. The original dataset, processed datasets, third-party research PDFs, and trained model files are also intentionally excluded. They are either large, externally authored, unnecessary for browsing the work, or subject to provider distribution terms.

## View the showcase locally

```bash
cd docs
python3 -m http.server 8000
```

Open `http://localhost:8000`. The site uses plain HTML, CSS, and JavaScript and has no build dependencies.

## Publish with GitHub Pages

1. Transfer the `github` folder to your computer and upload **its contents** as a new GitHub repository.
2. In `docs/app.js`, replace the placeholder repository URL with your real URL.
3. Open the repository's **Settings → Pages**.
4. Choose **Deploy from a branch**, select your main branch, and choose `/docs` as the folder.

## Authors and supervision

Research by **Dillion Amartey** and **Jake Sompa Asamoah**, supervised by **Dr Aziz Abdullah Dwumfuor**.

### Contribution statement

- **Dillion Amartey:** authored most of the project code and all code published in this repository; implemented the feature-extraction and classification experiments; wrote Chapter 3 (Methodology) and Chapter 4 (Results and Discussion); co-wrote Chapter 5 (Conclusion) with Jake; and contributed to literature collection, screening, filtering, and the wider research process.
- **Jake Sompa Asamoah:** wrote Chapter 1 (Introduction) and Chapter 2 (Literature Review); contributed substantially to data collection, literature screening, filtering, and the wider research process; and co-wrote Chapter 5 (Conclusion) with Dillion.
- **Dr Aziz Abdullah Dwumfuor:** supervised the final-year project.

Contact: [damartey008@gmail.com](mailto:damartey008@gmail.com)

[LinkedIn](https://www.linkedin.com/in/dillion-amartey-85951527b) · [Portfolio](https://portfolio-tau-lyart-yqavyjszgv.vercel.app/)

## Status and reuse

This is an unpublished academic project shared as a portfolio and reproducibility artifact. All repository code was authored by Dillion Amartey. No open-source licence has been assigned, so reuse permission is not granted by default.

Some notebook analysis cells generate simulated confidence distributions for visualisation. Those plots are not treated as experimental evidence in the showcase; recorded classifier outputs and illustrative analysis are clearly separated.
