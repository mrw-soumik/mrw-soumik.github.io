---
layout: project
title: Visual-to-audio captioning for accessibility
description: Team project. A browser extension that captions images on web pages with an EfficientNet and Transformer model and reads the captions aloud for visually impaired users.
summary: A browser extension prototype that generates a caption for an image on a web page and reads it aloud, so people who are blind or have low vision can follow image content.
category: Academic project · Accessibility
team: Md. Azmol Fuad, Mostafa Rafiur Wasib and Chowdhury Nafis Saleh
tech: TensorFlow, EfficientNetB0, Transformer, FastAPI, IBM Watson Text to Speech, JavaScript
repo: https://github.com/mrw-soumik/AI-Accessibility-Extension-For-Visually-Impaired-Users
repo_label: View team repository on GitHub
---

## Problem

Many images on the web have missing or unhelpful alternative text, which leaves screen-reader users without the information the image carries.

## Approach

- **Captioning model:** an EfficientNetB0 image encoder with a Transformer decoder, trained on the Flickr30k image-caption dataset.
- **Backend:** a FastAPI service that receives an image and returns its caption.
- **Speech:** captions are converted to audio with IBM Watson Text to Speech.
- **Browser extension:** an HTML and JavaScript extension sends page images to the backend and plays the spoken caption.

## Status and next steps

Built as a course prototype covering the full flow, from an image on a web page to a spoken caption. The main improvement identified by the team is training on larger and more diverse image data to make captions more accurate and specific.
