---
layout: project
title: DNA sequence classification with data encoding
description: Comparing di-nucleotide, tri-nucleotide and Fourier-transform encodings of raw DNA sequences for binary classification with a Random Forest and 10-fold cross-validation.
summary: Machine learning models need numbers, not DNA letters. This project compares three ways of encoding raw DNA sequences and measures which one best supports binary classification.
category: Academic project · Bioinformatics
tech: Python, scikit-learn, SciPy, pandas, Matplotlib
repo: https://github.com/mrw-soumik/DNA-Sequence-Classification-with-Data-Encoding
---

## Data

872 labelled DNA sequences, 20 to 591 nucleotides long, with a notable class imbalance: about 75% of sequences belong to class 0 and 25% to class 1.

## Approach

- **Encodings:** di-nucleotide frequency (2-mers), tri-nucleotide frequency (3-mers), and a discrete Fourier transform of a numerically mapped sequence.
- **Model:** a Random Forest with default settings, trained separately on each encoding.
- **Evaluation:** 10-fold stratified cross-validation, reporting macro F1 and average precision for the minority class.

## Results

| Encoding | Mean F1 | Mean average precision |
|---|---|---|
| Di-nucleotide | 0.615 | 0.548 |
| Tri-nucleotide | 0.532 | 0.537 |
| Fourier transform | 0.428 | 0.283 |

Di-nucleotide frequency gave the best F1 and average precision. Tri-nucleotide was close on average precision but less stable across folds, and the Fourier encoding trailed both k-mer approaches. Per-fold precision-recall curves are in the repository.

## Limitations and next steps

No hyperparameter tuning or class-imbalance correction was applied, so these numbers compare encodings fairly but are not tuned results. Class weighting, resampling and gradient-boosted models are natural next steps.
