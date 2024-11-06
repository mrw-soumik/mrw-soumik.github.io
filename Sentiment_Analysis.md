# Natural Language Processing - Sentiment Analysis Tool

## Objective
The goal of this project is to develop a **Sentiment Analysis Tool** that classifies text into three sentiment categories: **positive**, **neutral**, and **negative**. This tool is designed for analyzing opinions in text data, making it useful for understanding customer feedback, social media comments, and other text-based sources of sentiment.

## Technologies Used
- **Python**: Core language for development and data processing.
- **NLTK**: For Natural Language Processing tasks, such as tokenization and stopword removal.
- **Scikit-learn**: Used for vectorization (TF-IDF), building machine learning models (Naive Bayes, Logistic Regression, SVM), and evaluating model performance.
- **Pandas**: Data manipulation and handling.

## Role and Contributions
- **Preprocessing and Data Cleaning**: Developed functions to clean text data by removing punctuation, converting text to lowercase, tokenizing, and removing stopwords.
- **Model Selection and Training**: Implemented and trained three machine learning models—Naive Bayes, Logistic Regression, and SVM—on the preprocessed data, then evaluated each model to determine the best performer.
- **Prediction Functionality**: Created a function to allow for real-time sentiment prediction on new input text based on the trained model.

## Outcomes
- The tool achieved **over 90% accuracy** in classifying the test dataset across various models, with SVM performing as the top model.
- Demonstrated effective sentiment classification in text, showing the potential of machine learning and NLP for analyzing opinions in large text datasets.


