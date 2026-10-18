---
layout: project
title: Real-time face, age, gender and emotion detection
description: A Python webcam application that detects faces and overlays estimated age range, gender and facial emotion in real time, with documented limitations.
summary: A webcam application that detects faces in real time and overlays an estimated age range, gender and facial emotion for each person.
category: Independent project · Computer vision
role: Developer and integrator
tech: Python, OpenCV DNN, Caffe models, Keras
repo: https://github.com/mrw-soumik/Real-Time-Face-Age-Gender-and-Emotion-Detection-System
---

## Approach

- **Face detection:** OpenCV's DNN module finds faces in each webcam frame.
- **Age and gender:** pre-trained Caffe models estimate an age range and a gender label for each detected face.
- **Emotion:** a pre-trained Keras model classifies the facial expression.
- **Display:** helper functions draw boxes and labels on the live video while keeping the pipeline fast enough for real-time use on a laptop.

## Responsible use and limitations

- The gender model only outputs two labels, which does not represent the full range of gender identities.
- Face, age, gender and emotion classifiers vary in accuracy across skin tone, lighting, age group and camera quality. No evaluation metrics are included, and the output should not be used for decisions that affect individuals.
- Model weight files are not stored in the repository; the README explains where to download them.

## What I learned

How to integrate several pre-trained models into one real-time pipeline, and why demographic inference needs clear limits and documentation.
