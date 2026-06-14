# GitHub Profile Organization Plan

Snapshot date: June 14, 2026.

This plan is based on the public `mrw-soumik` GitHub profile and the 42 public repositories visible to visitors through GitHub. If your logged-in GitHub dashboard shows 66 repositories, the remaining repositories are likely private, owned through another context, or otherwise not visible to recruiters. Optimize the public 42 first.

## Executive Recommendation

Do not try to polish every repository.

The professional strategy is:

1. Make 6 repositories excellent enough to pin.
2. Make 8-10 supporting repositories presentable.
3. Archive, unpin, or leave quiet older learning repos and forks.
4. Add a profile README so recruiters understand what to look at.
5. Add descriptions and topics to the important repos from GitHub settings.

This keeps your GitHub credible without spending weeks cleaning old coursework and tutorial experiments.

## Public Profile Positioning

Suggested GitHub bio:

`Machine Learning Engineer | LLM/RAG, Evidence Extraction, Tabular ML & MLOps | AI Engineer at Genesis AI Garage`

Suggested profile links:

- Portfolio: `https://mrw-soumik.github.io/`
- LinkedIn: `https://www.linkedin.com/in/mostafa-wasib/`
- Email: `mostafa.soumik73@gmail.com`

Suggested profile README headline:

`I build applied AI systems across LLM/RAG workflows, evidence extraction, tabular ML, computer vision, and production-ready data tools.`

## Create A Profile README

Create a new public repository named exactly:

`mrw-soumik`

Then add a `README.md`. GitHub will display it on the profile overview page.

Recommended README sections:

- Short headline for AI/ML engineering roles.
- Current role: AI Engineer at Genesis Group Inc. / Genesis AI Garage.
- Best work: portfolio, gas sensor ML, multimodal emotion recognition, AI governance demo, bio/ecology ML, NLP tools.
- Tech stack: Python, SQL, FastAPI, Docker, AWS, Azure, GCP, LangGraph, LangChain, OpenAI, Claude, Bedrock, PostgreSQL/pgvector, Grafana.
- Public project note: recent client work is summarized in the portfolio without private data or production code.
- Contact links: portfolio, LinkedIn, email.

## Recommended Pinned Repositories

GitHub allows 6 pinned repositories. Use the pins as your recruiter-facing shortlist.

Recommended default pins:

1. `mrw-soumik.github.io`
2. `governance_demo`
3. `Gas-Sensor-Data-Classification-and-Anomaly-Detection`
4. `Multimodal-Emotion-Recognition-System`
5. `Fungal-Habitat-Prediction-Using-Taxonomy-Data`
6. `Real-Time-Face-Age-Gender-and-Emotion-Detection-System`

Alternative pins by target role:

- AI accessibility / multimodal role: replace `Real-Time-Face-Age-Gender-and-Emotion-Detection-System` with `AI-Accessibility-Extension-For-Visually-Impaired-Users` after adding a clear contribution note.
- NLP/data science role: replace the real-time face repo with `Text-Summarization-Tool` or `Sentiment-Analysis-Tool`.
- Bioinformatics/data science role: keep `DNA-Sequence-Classification-with-Data-Encoding` close to the top and link it from the portfolio.

## What To Touch First

High-impact tasks:

1. Add GitHub descriptions and topics to the top 12 repositories.
2. Add `My contribution`, `Results`, `How to run`, and `Limitations` sections to the top 6 READMEs.
3. Add screenshots, architecture diagrams, or result plots where available.
4. Add license files to important source repos that do not have one.
5. Archive old tutorial forks and duplicate portfolio experiments only if they distract from the professional profile.

Do not spend time rewriting old code unless the repo is pinned or linked from the portfolio.

## Full Public Repository Inventory

Action meanings:

- `Pin`: should be one of the 6 pinned repos after polishing.
- `Polish`: useful for AI/ML roles; improve README, description, topics, results, and run instructions.
- `Keep quiet`: okay to keep public, but do not pin.
- `Archive/private`: consider archiving or making private if it is old, duplicate, empty, or tutorial-only.
- `Clarify fork`: keep only if you add a clear `My contribution` section.

| Repository | Type | Action | Recommendation |
| --- | --- | --- | --- |
| `mrw-soumik.github.io` | Portfolio | Pin | Keep as the main hub. Add GitHub description and topics: `portfolio`, `machine-learning`, `artificial-intelligence`, `llm`, `rag`, `mlops`, `data-science`, `aws`. |
| `governance_demo` | FastAPI / governance | Pin | Strong recent engineering signal. Add repo description, topics, screenshots/API examples, CI badge, and a short "Why this matters for startups" section. |
| `Gas-Sensor-Data-Classification-and-Anomaly-Detection` | ML / anomaly detection | Pin | Add model comparison table, anomaly detection explanation, metrics, dataset note, notebook order, and result plots. |
| `Multimodal-Emotion-Recognition-System` | Computer vision / audio ML | Pin | Add architecture diagram, demo screenshots, contribution split, training/inference flow, and ethical limitations. |
| `Fungal-Habitat-Prediction-Using-Taxonomy-Data` | Tabular ML / ecology | Pin | Keep because it has real metrics. Add feature list, target labels, model comparison, confusion matrix, and reproducibility steps. |
| `Real-Time-Face-Age-Gender-and-Emotion-Detection-System` | Computer vision | Pin or polish | Add demo GIF/screenshot, model files note, setup instructions, privacy/ethics note, and sample output. |
| `AI-Accessibility-Extension-For-Visually-Impaired-Users` | Fork / accessibility AI | Clarify fork | Good story, but because it is a fork, add `My contribution`, your role, architecture, and demo evidence before pinning. |
| `DNA-Sequence-Classification-with-Data-Encoding` | Bioinformatics ML | Polish | Add encoding comparison table, dataset limitations, metric summary, and run command. Good supporting project. |
| `Text-Summarization-Tool` | NLP | Polish | Add input/output examples, summarization method, evaluation approach, and CLI/API usage. |
| `Sentiment-Analysis-Tool` | NLP classification | Polish | Add dataset source, model comparison, confusion matrix, sample predictions, and limitations. |
| `Neural-Network-for-Image-Classification-using-MNIST-Dataset` | Deep learning basics | Polish lightly | Keep as foundational deep learning. Add training curve and final accuracy, but do not pin unless needed. |
| `Image-Processing-Edge-Detection-and-Filtering-in-MATLAB` | Image processing | Polish lightly | Add before/after images and short algorithm notes. Useful as academic technical depth, not a main pin. |
| `Experiment-With-Learning-Policies-On-Simple-Reinforcement-Policies` | Reinforcement learning | Polish | Add notebook order, reward curves, policy comparison, and conclusions. |
| `Reinforcement-Learning-An-Applied-Evaluation-through-Grid-World-and-Random-Walk-Scenarios` | Reinforcement learning | Polish | Already has a clearer description. Add plots, algorithm comparison table, and setup steps. |
| `Automated-Facemask-Detection-in-public-spaces` | MATLAB / image processing | Keep quiet | Add method and limitations if linked from portfolio. Otherwise leave unpinned. |
| `medical-expert-system` | Prolog / expert system | Keep quiet | Interesting but niche. Add a short README note if you want to show symbolic AI background. |
| `mostafa_rafiur_wasib.github.io` | Old portfolio | Archive/private | Duplicate of the current portfolio. Archive or make private to avoid recruiter confusion. |
| `react-portfolio` | Fork / old portfolio | Archive/private | Old forked portfolio template. Archive or keep private unless it has unique work. |
| `VR-Flight-Simulator` | VR project | Keep quiet or archive | No visible README from the API. Add a README and screenshots if you want to keep it public. |
| `VR_FlightSimulator` | Fork / VR project | Clarify fork | Keep only if you contributed meaningful work. Otherwise archive or leave unpinned. |
| `Covid19--Face-Mask-Detection` | Older CV project | Keep quiet | Similar to other computer vision repos. Do not pin; polish only if you need historical CV depth. |
| `py-lists-with-maps-data-science-intro-000` | Fork / tutorial | Archive/private | Tutorial fork. Low recruiter value. |
| `learn-co-sandbox` | Sandbox | Archive/private | Sandbox repo. Low recruiter value. |
| `youtube-transcriber` | Fork / utility | Archive/private | Forked utility. Keep private/archive unless you made meaningful changes. |
| `pythoncode-tutorials` | Fork / tutorials | Archive/private | Tutorial fork. Low recruiter value. |
| `Credit-Card-Fraud-Detection-using-Autoencoders-in-Keras` | Fraud ML | Keep quiet or polish | Relevant to ML roles, but older. Add dataset, model architecture, metric summary, and limitations if you want fraud signal. |
| `Tiny-Faces-in-Tensorflow` | Computer vision | Keep quiet | Older project. Add README polish only if it contains original work. |
| `Twitter-Parsing` | Data parsing | Keep quiet | Old utility. Keep public if harmless, but do not highlight. |
| `Face-Recognition-` | Computer vision | Keep quiet | Old notebook. Keep unpinned; add privacy/ethics note if you leave public. |
| `Data-Science-Projects` | Fork / learning collection | Archive/private | Forked collection. Archive/private to reduce clutter. |
| `Image-to-Text-Capture` | OCR / CV | Keep quiet | Potentially relevant, but older. Add sample input/output if keeping public. |
| `Multi-Vehicle-Routing-Bing-Map-` | Optimization / routing | Keep quiet | Add screenshots and problem statement if you want operations research signal. Otherwise leave unpinned. |
| `Simple-Outlier-Detection-and-Visualization-` | Outlier detection | Archive/private | No README visible from the API. Archive/private or add a minimal README if preserving. |
| `Multi-Vehicle-Route-Optimization-` | Optimization | Keep quiet | Useful supporting repo. Add algorithm explanation, constraints, and example result. |
| `outlier-detection-2D-feature-space` | Fork / outlier detection | Archive/private | Forked article repo. Archive/private unless you made meaningful additions. |
| `Face-Recognition-Model-with-Gender-Age-and-Emotions-Estimations` | Fork / CV | Archive/private | Forked capstone repo. Archive/private or clarify contribution. |
| `Image-Recognition-using-MATLAB` | MATLAB / CV | Archive/private | No README visible from the API. Archive/private unless it supports academic history. |
| `Rabin-Karp-Analysis-Algorithm-` | Algorithms | Archive/private | Old algorithm assignment. Low relevance for AI/ML portfolio. |
| `Data-Structure---Friend-book-management-` | Data structures | Archive/private | Old programming assignment. Low relevance for current positioning. |
| `Personal-Finance-System` | Java basics | Archive/private | Old basic programming project. Keep private unless needed for history. |
| `SAM` | Unknown / old | Archive/private | Very old and unclear. Archive/private unless it has a specific story. |
| `Reinforcement-Learning-Experiment-With-Simple-Bandit-Learning-Algorithms` | Fork / RL | Clarify fork | Add contribution note if important; otherwise keep unpinned. |

## Suggested Repository Descriptions

Use these in GitHub repository settings for the important repos.

`mrw-soumik.github.io`

`Portfolio for AI/ML engineering, LLM systems, RAG, evidence extraction, tabular ML, and MLOps work.`

`governance_demo`

`FastAPI demo showing startup engineering governance, ownership controls, pull request checks, and lightweight service structure.`

`Gas-Sensor-Data-Classification-and-Anomaly-Detection`

`Machine learning workflows for gas sensor activity classification, anomaly detection, model evaluation, and operational monitoring.`

`Multimodal-Emotion-Recognition-System`

`Real-time multimodal emotion recognition using facial and audio signals with model fusion and inference workflows.`

`Fungal-Habitat-Prediction-Using-Taxonomy-Data`

`Tabular machine learning project for predicting fungal habitats from taxonomy and observation data.`

`Real-Time-Face-Age-Gender-and-Emotion-Detection-System`

`Real-time computer vision system for face, age, gender, and emotion detection with OpenCV and deep learning models.`

`AI-Accessibility-Extension-For-Visually-Impaired-Users`

`Accessibility AI prototype for visual-to-audio support using image captioning and assistive browser workflows.`

`DNA-Sequence-Classification-with-Data-Encoding`

`Bioinformatics ML project comparing DNA sequence encoding methods for classification.`

`Text-Summarization-Tool`

`NLP project for extractive text summarization using preprocessing, sentence scoring, embeddings, and redundancy control.`

`Sentiment-Analysis-Tool`

`NLP classification project for sentiment analysis with text preprocessing, TF-IDF features, and machine learning models.`

## Suggested Topics

Use consistent topics so the profile looks intentional.

Core topics:

- `machine-learning`
- `artificial-intelligence`
- `data-science`
- `python`
- `mlops`
- `llm`
- `rag`
- `fastapi`
- `aws`
- `computer-vision`
- `nlp`
- `deep-learning`
- `tabular-data`
- `anomaly-detection`
- `bioinformatics`

## README Template For Important Repositories

Use this structure for pinned and polished repositories:

```md
# Project Name

One-sentence summary of what the project does and why it matters.

## Problem

What problem is being solved and what type of data/workflow is involved.

## My Contribution

- Data preparation / feature engineering
- Model or algorithm work
- Evaluation and reporting
- Deployment, dashboard, or handover work if applicable

## Tech Stack

Python, SQL, scikit-learn, PyTorch, TensorFlow, FastAPI, Docker, AWS, etc.

## Method

Short explanation of the pipeline or architecture.

## Results

Metrics, screenshots, tables, plots, or qualitative findings. Do not overclaim.

## How To Run

Installation steps, notebook order, expected inputs, and known limitations.

## Limitations And Next Steps

What the project does not yet solve and what could be improved.
```

## Weekly Cleanup Plan

Week 1:

- Create the `mrw-soumik` profile README repository.
- Update GitHub bio, location, company, portfolio link, and LinkedIn link.
- Set the 6 pinned repositories.

Week 2:

- Polish `mrw-soumik.github.io`, `governance_demo`, and `Gas-Sensor-Data-Classification-and-Anomaly-Detection`.
- Add descriptions and topics to the top 12 repos.

Week 3:

- Polish `Multimodal-Emotion-Recognition-System`, `Fungal-Habitat-Prediction-Using-Taxonomy-Data`, and `Real-Time-Face-Age-Gender-and-Emotion-Detection-System`.
- Add screenshots/result plots where possible.

Week 4:

- Clarify forks with `My contribution` sections or archive them.
- Archive/private duplicate portfolio repos, tutorial forks, sandboxes, and old unclear assignments.

## Final Rule

Your GitHub should make one message obvious within 20 seconds:

`Mostafa is an AI/ML engineer who can build practical models, explain results, and organize production-facing technical work.`
