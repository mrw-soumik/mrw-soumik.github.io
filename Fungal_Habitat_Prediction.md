---
layout: project
title: Fungal habitat prediction from Newfoundland and Labrador specimen data
description: Predicting fungal habitat type from taxonomy and collection data for 6,162 preserved specimens, mostly from Newfoundland and Labrador, compared honestly against a baseline.
summary: Can a fungus's taxonomy and collection record predict the habitat it was found in? A data-quality-first look at 6,162 preserved specimens, most collected in Newfoundland and Labrador.
category: Academic project · Machine learning
tech: Python, pandas, NumPy, scikit-learn, LightGBM
repo: https://github.com/mrw-soumik/Fungal-Habitat-Prediction-Using-Taxonomy-Data
---

## Data

A Darwin Core export of 6,162 preserved fungal specimen records with 97 fields (taxonomy, collector, locality and dates), each linked to its record on MyCoPortal. The large majority of records come from Newfoundland and Labrador.

## What the data showed first

About 90% of records were collected in September. That reflects when organized field surveys took place, not when fungi grow, so the collection month says more about survey practice than ecology. Findings like this decide which features can be trusted before any model is trained.

## Approach

Cleaning and encoding of taxonomic and collection fields, then Random Forest and LightGBM classifiers tuned with grid search over stratified 5-fold cross-validation.

## Results

| Model | Test accuracy |
|---|---|
| Always predict the most common habitat (baseline) | about 50% |
| Random Forest | 56.4% |
| LightGBM | 58.0% |

Both models beat the naive baseline, but only modestly, and the "mixed woods" habitat was never predicted correctly. Taxonomy alone carries limited information about habitat.

## What I would do next

Add location and climate features, optimize for macro F1 rather than accuracy so smaller habitat classes count, and address class imbalance directly.
