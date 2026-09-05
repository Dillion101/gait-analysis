const papers = [
  {
    "year": "2021",
    "title": "A Novel Bi-Model Person Re-identification Method based on the Appearance and the Gait Features",
    "method": "mGait",
    "journal": "Procedia Computer Science"
  },
  {
    "year": "2018",
    "title": "Depth-based human activity recognition: A comparative perspective study on feature extraction",
    "method": "Depth Human Silhouettes & Binary Silhouettes",
    "journal": "Future Computing and Informatics Journal"
  },
  {
    "year": "2017",
    "title": "Silhouette-Based Gender Recognition in Smart Environments Using Fuzzy Local Binary Patterns and Support Vector Machines",
    "method": "Fuzzy Local Binary Pattern (FLBP)",
    "journal": "Procedia Computer Science"
  },
  {
    "year": "2018",
    "title": "Efficient ISAR image classification using MECSM representation",
    "method": "Minimum Enclosed Circle based Shape Matrix (MECSM)",
    "journal": "Journal of King Saud University"
  },
  {
    "year": "2020",
    "title": "Gait-based human recognition using partial wavelet coherence and phase features",
    "method": "Partial Wavelet Coherence (PWC)",
    "journal": "Journal of King Saud University"
  },
  {
    "year": "2022",
    "title": "Fall detection using body geometry and human pose estimation in video sequences",
    "method": "Hu-moments technique",
    "journal": "Journal of Visual Communication and Image Representation"
  },
  {
    "year": "2015",
    "title": "Improved Gait Recognition using Gradient Histogram Gaussian Image",
    "method": "Gradient Histogram Gaussian Image",
    "journal": "Procedia Computer Science"
  },
  {
    "year": "2015",
    "title": "Human Motion Analysis by Fusion of Silhouette Orientation and Shape Features",
    "method": "Average Energy Silhouette Images",
    "journal": "Procedia Computer Science"
  },
  {
    "year": "2020",
    "title": "Action recognition in freestyle wrestling using silhouette-skeleton features",
    "method": "Histogram of Graph Nodes (HGN)",
    "journal": "Engineering Science And Technology"
  },
  {
    "year": "2021",
    "title": "1D Convolution approach to human activity recognition using sensor data and comparison with machine learning algorithms",
    "method": "Human Activity Recognition (HAR)",
    "journal": "International Journal of Cognitive Computing in Engineering"
  },
  {
    "year": "2016",
    "title": "Comparative Study of Pose Representation and Dynamics Modeling for Online Motion Quality Assessment",
    "method": "RGB-D",
    "journal": "Computer Vision and Image Understanding"
  },
  {
    "year": "2016",
    "title": "A Depth Camera-based Human Activity Recognition via Deep Learning Recurrent Neural Network",
    "method": "Depth Human Silhouettes",
    "journal": "Procedia Computer Science"
  },
  {
    "year": "2022",
    "title": "An assessment of water pollutions area in Terengganu River",
    "method": "Self-Organizing Map (SOM)",
    "journal": "Procedia Computer Science"
  },
  {
    "year": "2016",
    "title": "A vision-based proposal for classification of normal and abnormal gait using model-based and shape-based approaches",
    "method": "Pose Energy Image (PEI)",
    "journal": "Journal of Biomedical Science and Engineering"
  },
  {
    "year": "2016",
    "title": "Comparison between passive vision-based system and a wearable inertial-based system for estimating temporal gait parameters related to the GAITRite electronic walkway",
    "method": "Depth Human Silhouettes",
    "journal": "Journal of Biomedical Informatics"
  },
  {
    "year": "2020",
    "title": "Gait recognition invariant to carried objects using alpha blending generative adversarial networks",
    "method": "Alpha Blending",
    "journal": "Pattern Recognition"
  },
  {
    "year": "2021",
    "title": "Human gait feature extraction method",
    "method": "Custom Shadow Detection from MOG2 and KNN",
    "journal": "Procedia Computer Science"
  },
  {
    "year": "2022",
    "title": "Machine vision gait-based biometric cryptosystem using a fuzzy commitment scheme",
    "method": "Local Ternary Pattern (LTP)",
    "journal": "Journal of King Saud University"
  },
  {
    "year": "2020",
    "title": "Recognizing human actions with multiple Fourier transforms",
    "method": "Two-Dimensional Fourier Descriptor, Generic Fourier Descriptor, UNL-Fourier Descriptor.",
    "journal": "Procedia Computer Science"
  },
  {
    "year": "2023",
    "title": "A Virtual Coaching System Based on Visual and Thermal Sensor Fusion for Multiple Exercise Recognition and Feedback Provision",
    "method": "Gait Energy Image (GEI) & pose estimation using OpenPose",
    "journal": "Procedia Computer Science"
  },
  {
    "year": "2018",
    "title": "Vision based Identification of Joint Coordinates for Marker-less Gait Analysis",
    "method": "Vision-based Identification of Joint Coordinates",
    "journal": "Procedia Computer Science"
  },
  {
    "year": "2021",
    "title": "Visualising and quantifying relevant parkinsonian gait patterns using 3D convolutional network",
    "method": "Markerless video sequences",
    "journal": "Journal of Biomedical Informatics"
  },
  {
    "year": "2018",
    "title": "Walking Direction Estimation for Gait Based Applications",
    "method": "Gait Energy Image (GEI)",
    "journal": "Procedia Computer Science"
  },
  {
    "year": "2022",
    "title": "Anonymization of Human Gait in Video Based on Silhouette Deformation and Texture Transfer",
    "method": "Gait Silhouette Deformation",
    "journal": "IEEE Transactions on Information Forensics and Security"
  },
  {
    "year": "2023",
    "title": "Batch Hard Contrastive Loss and Its Application to Cross-View Gait Recognition",
    "method": "Gait Energy Image (GEI)",
    "journal": "IEEE Access"
  },
  {
    "year": "2023",
    "title": "Cross-View Gait Recognition Model Combining Multi-Scale Feature Residual Structure and Self-Attention Mechanism",
    "method": "Gait Energy Image (GEI)",
    "journal": "IEEE Access"
  },
  {
    "year": "2023",
    "title": "Effective Fusion Method on Silhouette and Pose for Gait Recognition",
    "method": "GaitGraph",
    "journal": "IEEE Access"
  },
  {
    "year": "2023",
    "title": "Encoding Kinematic and Temporal Gait Data in an Appearance-Based Feature for the Automatic Classification of Autism Spectrum Disorder.",
    "method": "Joint Energy Image (JEI)",
    "journal": "IEEE Access"
  },
  {
    "year": "2020",
    "title": "Flexible Gait Recognition Based on Flow Regulation of Local Features Between Key Frames",
    "method": "Local Features Flow Regulation",
    "journal": "IEEE Access"
  },
  {
    "year": "2018",
    "title": "Gait Recognition under Different Clothing Conditions via Deterministic Learning.",
    "method": "Gait Energy Image (GEI)",
    "journal": "IEEE Transactions on Information Forensics and Security"
  },
  {
    "year": "2020",
    "title": "Joint Metric Learning and Hierarchical Network for Gait Recognition",
    "method": "3D-CNN",
    "journal": "IEEE Access"
  },
  {
    "year": "2018",
    "title": "Multi-View Gait Recognition Based on a Spatial-Temporal Deep Neural Network",
    "method": "Spatial-Temporal Gradient (STG) features",
    "journal": "IEEE Access"
  },
  {
    "year": "2024",
    "title": "Subjective Baggage-Weight Estimation Based on Human Walking Behavior.",
    "method": "G2SW (Gait to Subjective baggage-weight)",
    "journal": "IEEE Access"
  },
  {
    "year": "2020",
    "title": "Video-Based Human Motion Capture Data Retrieval via MotionSet Network",
    "method": "GaitSet",
    "journal": "IEEE Access"
  },
  {
    "year": "2023",
    "title": "Video-Based Quantification of Gait Impairments in Parkinson's Disease Using Skeleton-Silhouette Fusion Convolution Network.",
    "method": "Long-Term Gait Environmental Imaging (Long-Term Gait Energy Image (GEI)).",
    "journal": "IEEE Transactions on Neural Systems and Rehabilitation Engineering"
  },
  {
    "year": "2020",
    "title": "View and Clothing Invariant Gait Recognition via 3D Human Semantic Folding",
    "method": "3D body pose",
    "journal": "IEEE Access"
  },
  {
    "year": "2022",
    "title": "Gait Pyramid Attention Network: Toward Silhouette Semantic Relation Learning for Gait Recognition",
    "method": "Multilayer Silhouette-Level Feature Extractor",
    "journal": "IEEE Transactions on Biometrics, Behavior, and Identity Science"
  },
  {
    "year": "2023",
    "title": "Gait Quality Aware Network: Toward the Interpretability of Silhouette-Based Gait Recognition",
    "method": "Silhouette-based gait recognition",
    "journal": "IEEE Transactions on Neural Networks and Learning Systems"
  },
  {
    "year": "2019",
    "title": "Human Gait Identification System Based on Average Silhouette",
    "method": "Average Silhouette Method",
    "journal": "International Conference on Engineering Technology"
  },
  {
    "year": "2018",
    "title": "Human Gait Recognition System",
    "method": "PCA (Principal Component Analysis) training",
    "journal": "IEEE Signal Processing"
  },
  {
    "year": "2018",
    "title": "Human Gait Silhouettes Extraction Using Haar Cascade Classifier on OpenCV",
    "method": "Geometric Gait Moments (GGM)",
    "journal": "International Conference on Computer Modelling & Simulation"
  },
  {
    "year": "2023",
    "title": "Multi-Modal Human Authentication Using Silhouettes- Gait and RGB",
    "method": "Gait Energy Image (GEI)",
    "journal": "IEEE Access"
  },
  {
    "year": "2015",
    "title": "Identification of Gait Parameters from Silhouette Images",
    "method": "Gait Signature",
    "journal": "International Conference on Contemporary Computing"
  },
  {
    "year": "2023",
    "title": "Set Residual Network for Silhouette-Based Gait Recognition",
    "method": "Set Residual Learning",
    "journal": "IEEE Transactions on Biometrics, Behavior, and Identity Science"
  },
  {
    "year": "2021",
    "title": "Silhouette-Based View-Embeddings for Gait Recognition Under Multiple Views",
    "method": "Gaitset & GaitGL",
    "journal": "International Conference on Image Processing"
  },
  {
    "year": "2023",
    "title": "A Comprehensive Study on the Evaluation of Silhouette-Based Gait Recognition",
    "method": "GaitSet, SRN, GaitPart, and GLN",
    "journal": "IEEE Transactions on Biometrics, Behavior, and Identity Science"
  },
  {
    "year": "2017",
    "title": "A Frequency Domain Approach to Silhouette based Gait Recognition",
    "method": "Fourier Transform.",
    "journal": "International Conference on Computing, Communication and Automation (ICCCA-2017"
  },
  {
    "year": "2016",
    "title": "A method of carried object detection based on key posture of silhouette",
    "method": "Not recorded",
    "journal": "Chinese Journal of Electronics."
  },
  {
    "year": "2019",
    "title": "An RGB Gait Anonymization Model for Low-Quality Silhouettes.",
    "method": "Gait Energy Image (GEI)",
    "journal": "IEEE Transactions on Information Forensics and Security."
  },
  {
    "year": "2019",
    "title": "Anonymization of Gait Silhouette Video by Perturbing Its Phase and Shape Components.",
    "method": "Gait Energy Image (GEI) and GEnI.",
    "journal": "IEEE Access"
  },
  {
    "year": "2021",
    "title": "Anonymization of Human Gait in Video Based on Silhouette Deformation and Texture Transfer.",
    "method": "Gait Energy Image (GEI)",
    "journal": "IEEE Transactions on Information Forensics and Security."
  },
  {
    "year": "2017",
    "title": "Deep Convolutional Feature-based Gait Recognition Using Silhouettes and RGB Images",
    "method": "3DCNN model",
    "journal": "IEEE Transactions on Image Processing"
  },
  {
    "year": "2023",
    "title": "Effective Fusion Method on Silhouette and Pose for Gait Recognition",
    "method": "CNN",
    "journal": "IEEE Access."
  },
  {
    "year": "2018",
    "title": "Feature Map Pooling for Cross-View Gait Recognition Based on Silhouette Sequence Images.",
    "method": "CNN",
    "journal": "IEEE Transactions on Information Forensics and Security."
  },
  {
    "year": "N/A",
    "title": "Gender classification from gait silhouette using observation angle-based GEIs.",
    "method": "Gait Energy Image (GEI)",
    "journal": "IEEE Conference on Cybernetics and Intelligent Systems (CIS) and Robotics, Automation and Mechatronics (RAM)."
  },
  {
    "year": "2018",
    "title": "Gender Recognition via Fused Silhouette Features Based on Visual Sensors",
    "method": "Fused Silhouette Features (Two-stream CNN, Gait Energy Image (GEI))",
    "journal": "IEEE Access"
  },
  {
    "year": "2014",
    "title": "Human identification using skeletal gait and silhouette data extracted by Microsoft Kinec",
    "method": "Mass Vector approach",
    "journal": "SCIS&ISIS 2014"
  },
  {
    "year": "N/A",
    "title": "On Reducing the Effect of Silhouette Quality on Individual Gait Recognition: A Feature Fusion Approach",
    "method": "Gait Silhouette Energy(GSE)",
    "journal": "IEEE Transactions on Systems, Man, and Cybernetics, Part B: Cybernetics"
  },
  {
    "year": "2019",
    "title": "Gait Recognition via Pareto Optimal Feature Selection and Fusion",
    "method": "Single-support GEI",
    "journal": "Multimedia Tools and Applications"
  },
  {
    "year": "2020",
    "title": "MM-gait: A Multi-modal Biometric Dataset for Gait Recognition with Smartphone and RGB-Depth Cameras",
    "method": "Gait Energy Image (GEI) ,CNN",
    "journal": "Multimedia Tools and Applications"
  },
  {
    "year": "2021",
    "title": "Multi-Modal Gait Recognition via Intrinsic Connectivities Between Different Modalities",
    "method": "Holistic Silhoutte",
    "journal": "Sensors"
  },
  {
    "year": "2019",
    "title": "Multistage Convolutional Neural Networks for Automatic Age Estimation from Gait Sequences",
    "method": "CNN",
    "journal": "IPSJ Transactions on Computer Vision and Applications."
  },
  {
    "year": "2022",
    "title": "Silhouette-based Gait Recognition using CNN-RNN",
    "method": "CNN, Gait Energy Image (GEI)",
    "journal": "2022 International Conference on Recent Progresses in Science, Engineering and Technology (ICRPSET"
  },
  {
    "year": "N/A",
    "title": "Simplest representation yet for gait recognition averaged silhouette",
    "method": "PCA",
    "journal": "Not recorded"
  },
  {
    "year": "2022",
    "title": "An Analytical Study on the influence of using Trimmed Gait Energy Images for Human Gait Biometrics using Deep Learning",
    "method": "Gait Energy Image (GEI)",
    "journal": "2022 2nd international Conference on Advance Computing in innovative technologies in Enginneering (ICACITE)"
  },
  {
    "year": "2023",
    "title": "Gait Energy Image-Based Human Attribute Recognition Using Two-Branch Deep Convolutional Neural Network",
    "method": "Gait Energy Image (GEI)",
    "journal": "IEEE Transactions on Biometrics, Behavior, and Identity Science, Vol. 5, No. 1, January 2023"
  },
  {
    "year": "2022",
    "title": "Gait Identification using Deep Convolutional Network and Attention Technique",
    "method": "Gait Energy Image (GEI)",
    "journal": "2022 IEEE 6th International Conference on Condition Assessment Techniques in Electrical Systems(CATCON)"
  },
  {
    "year": "2015",
    "title": "Gait Recognition Based on Fourier Descriptors and Canonical Time Warping",
    "method": "Fourier Descriptors",
    "journal": "2015 8th International Symposium on computational Intelligence and Design (ISCID)"
  },
  {
    "year": "2020",
    "title": "Gait recognition in real environment using gait energy image generated by Mask R-CNN",
    "method": "Gait Energy Image (GEI)",
    "journal": "Proceedings of 2020 IEEE International Conference on Mechatronics and Automation"
  },
  {
    "year": "2019",
    "title": "Gait Recognition Using Flow Histogram Energy Image",
    "method": "Gait Energy Image, Histogram of Oriented Gradients",
    "journal": "2019 International Conference on Fuzzy Theory and Its Applications (iFUZZY)"
  },
  {
    "year": "2020",
    "title": "Human Pose Estimation-Based Real-Time Gait Analysis Using Convolutional Neural Network",
    "method": "Gait Energy Image (GEI)",
    "journal": "IEEE Access"
  },
  {
    "year": "2024",
    "title": "A Model Free Gait Recognition using Random Forest Method",
    "method": "Gait Entropy Image (GEnI)",
    "journal": "Procedia Computer Science"
  },
  {
    "year": "2017",
    "title": "Human Gait Identity Recognition System based on Gait Pal and Pal Entropy (GPPE) and Distances Features Fusion",
    "method": "Gait Entropy Image (GEnI)",
    "journal": "Sudan Conference on Computer Science and Information Technology (SCCSIT)"
  },
  {
    "year": "2017",
    "title": "View-normalized gait recognition based on gait frame difference entropy image",
    "method": "Gait Entropy Image (GEnI)",
    "journal": "International Conference on Computational Intelligence and Security"
  },
  {
    "year": "2014",
    "title": "Pose Depth Volume extraction from RGB-D streams for frontal gait recognition",
    "method": "Depth Human Silhouette",
    "journal": "Crossmark"
  },
  {
    "year": "2018",
    "title": "Gait recognition via hierarchical deep spatio-temporal features",
    "method": "Gait Flow Image",
    "journal": "Pattern Recognition"
  },
  {
    "year": "2023",
    "title": "Attention-based gait recognition network with novel partial representation PGOFI based on prior motion information",
    "method": "Gait Flow Image",
    "journal": "Digital Signal Processing"
  },
  {
    "year": "2014",
    "title": "Gait Optical Flow Image Decomposition for Human Recognition",
    "method": "Gait Flow Image",
    "journal": "Journal of Information Science and Engineering"
  },
  {
    "year": "2015",
    "title": "Human Gait Recognition Using Gait Flow Image and Extension Neural Network",
    "method": "Gait Flow Image",
    "journal": "Book with the DOI: 10.1007/978-81-322-2523-2_1."
  },
  {
    "year": "2016",
    "title": "Analysis of Gait Flow Image and Gait Gaussian Image Using Extension Neural Network for Gait Recognition",
    "method": "Gait Flow Image",
    "journal": "International Journal of Rough Sets and Data Analysis"
  },
  {
    "year": "2024",
    "title": "Age-Invariant Cross-Age Face Verification using Transfer Learning",
    "method": "Histogram of Oriented Gradient",
    "journal": "Inteligencia Artificial"
  },
  {
    "year": "2024",
    "title": "Residual Attention based Long-Short Term Memory with Self Gated Rectified Linear Unit for Anomalous Behavior Detection",
    "method": "Histogram of Oriented Gradient",
    "journal": "Journal of Intelligent Engineering and Systems"
  },
  {
    "year": "2024",
    "title": "Identification of Adulterants to Chili Powder Using an Electronic Nose Based on PCA-Fisher and Kernel Discriminant Analysis",
    "method": "Histogram of Oriented Gradient",
    "journal": "Applied Sciences"
  },
  {
    "year": "2024",
    "title": "Utilizing Machine Learning Techniques for Digital Image Forensics: A Comprehensive Study",
    "method": "Histogram of Oriented Gradient",
    "journal": "International Journal of Advanced Computer Science and Applications (IJACSA)"
  },
  {
    "year": "2024",
    "title": "Vision-Based On-Road Nighttime Vehicle Detection and Tracking Using Improved HOG Features",
    "method": "Histogram of Oriented Gradient",
    "journal": "Sensors"
  }
];

