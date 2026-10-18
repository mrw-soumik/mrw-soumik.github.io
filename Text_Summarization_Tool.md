---
layout: project
title: Extractive text summarization
description: An extractive summarizer that scores sentences by frequency, position and keywords, and uses sentence embeddings to avoid redundant picks.
summary: A summarizer that picks the most important sentences from a document, using sentence embeddings to avoid choosing near-duplicates.
category: Independent project · Natural language processing
role: Designed and built the tool
tech: Python, NLTK, Sentence-Transformers
repo: https://github.com/mrw-soumik/Text-Summarization-Tool
---

## Approach

- **Sentence scoring:** each sentence is scored by word frequency, its position in the document and keyword relevance.
- **Redundancy control:** sentence embeddings from Sentence-Transformers measure semantic similarity, so the summary skips sentences that repeat what has already been selected.
- **Configurable output:** summary length and the similarity threshold can both be adjusted.

## Try it

Run `python summarizer.py` in the repository to summarize the example paragraph it contains, or replace that text with your own.
