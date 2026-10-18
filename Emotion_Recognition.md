---
layout: project
title: Multimodal emotion recognition
description: Team project combining a Vision Transformer facial-expression model and a BiLSTM speech-emotion model with rule-based fusion for real-time emotion recognition.
summary: A real-time system that reads emotion from a webcam face and a microphone voice at the same time, then combines the two predictions with a transparent fusion rule.
category: Academic project · Computer vision and audio
team: Mostafa Rafiur Wasib, Chowdhury Nafis Saleh and Azmol Fuad
tech: Python, PyTorch (timm), Keras, OpenCV, PyAudio
repo: https://github.com/mrw-soumik/Multimodal-Emotion-Recognition-System
---

## Problem

Emotion recognition from a single signal is brittle: faces can be partly hidden or badly lit, and voices can be quiet or noisy. Combining a face model and a voice model gives a more robust signal for human-computer interaction.

## Approach

- **Face:** OpenCV DNN face detection on webcam frames, then a Vision Transformer (ViT-Base/16) fine-tuned on FER2013 to classify seven emotions.
- **Voice:** three-second microphone windows reduced to mel-spectrogram and MFCC features, classified by a Conv1D and bidirectional LSTM network trained on the RAVDESS and TESS speech datasets.
- **Fusion:** a simple decision rule. If the two models agree, use that emotion; if they disagree, use the more confident prediction; if only one produced a result, use it.

## Results

| Model | Test data | Accuracy | Macro F1 |
|---|---|---|---|
| Face (ViT) | FER2013 test set, 7,178 images | 70% | 0.69 |
| Voice (Conv1D + BiLSTM) | Held-out 20% of RAVDESS and TESS, 848 clips | 80.7% | 0.776 |

Happy and surprise are recognized most reliably. Fear and sad are the weakest facial classes, and "calm" is the weakest voice class because it is acoustically close to neutral. Full classification reports and confusion matrices are in the repository.

## Limitations

- FER2013 images are small and often posed, so live webcam performance can differ from the test-set numbers.
- Fusion is rule-based rather than learned, and a combined (fused) accuracy was not measured.
- Model weights are not included in the repository.
