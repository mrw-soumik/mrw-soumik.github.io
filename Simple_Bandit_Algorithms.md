---
layout: project
title: Multi-armed bandit experiments
description: Team project comparing greedy, epsilon-greedy, optimistic initialization and gradient bandit algorithms on stationary multi-armed bandit problems.
summary: How should an agent balance trying new options against using the best one so far? A comparison of classic bandit algorithms on stationary problems.
category: Academic project · Reinforcement learning
team: Md. Azmol Fuad and Mostafa Rafiur Wasib
tech: Python, NumPy, Matplotlib, Jupyter
repo: https://github.com/mrw-soumik/Reinforcement-Learning-Experiment-With-Simple-Bandit-Learning-Algorithms
repo_label: View team repository on GitHub
---

## Approach

Implemented greedy, epsilon-greedy, optimistic initial values and gradient bandit algorithms, and compared their average reward and how often each chose the optimal action across many runs of stationary bandit problems.

## Results

Epsilon-greedy with a small exploration rate (epsilon = 0.05) gave the best balance of exploration and exploitation in these experiments.
