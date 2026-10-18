---
layout: project
title: Reinforcement learning in grid world and random walk
description: SARSA versus Q-learning for grid-world navigation, and Gradient Monte Carlo versus semi-gradient TD(0) for value estimation on a 7 by 7 random walk.
summary: Two classic reinforcement learning problems used to compare on-policy and off-policy control, and Monte Carlo and temporal-difference value estimation.
category: Academic project · Reinforcement learning
tech: Python, NumPy, Matplotlib, Jupyter
repo: https://github.com/mrw-soumik/Reinforcement-Learning-An-Applied-Evaluation-through-Grid-World-and-Random-Walk-Scenarios
---

## Grid world: SARSA and Q-learning

Both algorithms learned to navigate a grid world with penalty squares. Q-learning (off-policy) converged faster to the optimal path, while SARSA (on-policy) learned safer routes that avoided penalty squares, at the cost of slower convergence.

## Random walk: Monte Carlo and TD(0)

On a 7 by 7 random walk with terminal rewards of -1 and +1, Gradient Monte Carlo produced smooth value estimates between the terminal states. Semi-gradient TD(0) with an affine approximation updated faster but showed more variance and some bias near the negative terminal state.

## Takeaway

The trade-offs match the theory: off-policy learning finds the optimal policy faster but takes riskier paths while learning, and bootstrapped TD estimates learn faster than Monte Carlo at the cost of bias. Plots for each experiment are in the repository.
