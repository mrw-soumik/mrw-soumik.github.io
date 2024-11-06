# Text Summarization Tool

## Objective
The goal of this project was to create a tool that effectively condenses lengthy text documents into concise summaries, improving accessibility and information retrieval for users. The tool uses extractive summarization, which selects key sentences based on relevance, to provide an efficient overview of the original content.

## Technologies Used
- **Python**: For developing the core logic and preprocessing text data.
- **NLTK**: For text preprocessing, including tokenization and stopword removal.
- **Sentence-Transformers**: For generating sentence embeddings to assess semantic similarity and reduce redundancy in the summary.

## Role and Contributions
I designed and implemented the entire text summarization tool, focusing on several key contributions:
- Developed a sentence scoring system based on word frequency, sentence position, and keyword relevance to prioritize important content.
- Integrated sentence embeddings to ensure that selected sentences in the summary are semantically diverse, minimizing redundancy.
- Enabled flexibility in summary length and similarity threshold, allowing users to customize the summarization output based on their needs.

## Final Outcomes
The summarization tool effectively generates diverse and relevant summaries for various document types, including articles and reports. It has been tested on news articles and lengthy reports, demonstrating its ability to provide concise, informative summaries. This tool highlights the potential of NLP in making large volumes of information easier to access and understand.
