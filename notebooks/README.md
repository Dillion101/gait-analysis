# Experiment notebooks

## Extraction

The `extraction/` notebooks convert CASIA-B normal walking sequences into GEI, GEnI, GFI, MSI, DEWGI, and project-specific GaitSTAR representations.

## Classification

The `classification/` notebooks contain the DenseNet and ResNet comparisons and the Enhanced GaitSTAR experiment.

These notebooks were developed in Kaggle and retain their original input paths and saved outputs for provenance. To rerun them elsewhere, update dataset paths and install the libraries listed in the repository's `requirements.txt`. GPU acceleration is strongly recommended.

The Enhanced GaitSTAR notebook contains later analysis cells that simulate confidence distributions for plotting. Those illustrative plots should not be confused with predictions captured from the trained model. The recorded **98.712% best test accuracy** comes from the training/evaluation loop output.
