---
layout: project
title: Sentiment analysis tool
description: A three-class sentiment classifier that compares Naive Bayes, logistic regression and SVM on TF-IDF features, with a reusable prediction function.
summary: A three-class (positive, neutral, negative) sentiment classifier that compares Naive Bayes, logistic regression and SVM on TF-IDF features.
category: Academic project · Natural language processing
tech: Python, NLTK, scikit-learn, pandas
repo: https://github.com/mrw-soumik/Sentiment-Analysis-Tool
---

## Approach

- **Data:** 300 labelled text samples across positive, neutral and negative.
- **Preprocessing:** lowercasing, punctuation removal, tokenization and stopword removal with NLTK.
- **Models:** TF-IDF features with Naive Bayes, logistic regression and a linear SVM, each evaluated with accuracy and a per-class classification report.
- **Prediction:** a function that classifies new text with the best-performing model.

## Results

The script prints accuracy and per-class reports for each model, and the SVM performed best. With only 300 samples, scores vary noticeably with the train and test split, so this project demonstrates a clean classification workflow rather than a production-ready model.
