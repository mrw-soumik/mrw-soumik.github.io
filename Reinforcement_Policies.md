---
layout: project
title: Learning policies in a grid world
description: Policy evaluation and control on a 5 by 5 grid world, from solving the Bellman equations directly to Monte Carlo control and off-policy learning with importance sampling.
summary: A step-by-step comparison of ways to evaluate and improve a policy, from exact dynamic programming to sampling-based Monte Carlo methods.
category: Academic project · Reinforcement learning
tech: Python, NumPy, Matplotlib, Jupyter
repo: https://github.com/mrw-soumik/Experiment-With-Learning-Policies-On-Simple-Reinforcement-Policies
---

## Part 1: dynamic programming

On a 5 by 5 grid world with special reward and teleport squares (discount 0.95), the value function of a random policy was estimated three ways: by solving the Bellman equations directly, by iterative policy evaluation, and by value iteration. The optimal policy was then found with the Bellman optimality equation, policy iteration and value iteration.

## Part 2: learning from experience

With terminal squares added, the optimal policy was learned with Monte Carlo control, with and without exploring starts (epsilon-soft), and with an equiprobable behaviour policy using importance sampling. A final experiment randomly swapped two special squares at each step to test how policy iteration copes with a changing environment.

## Takeaway

Dynamic programming gives exact answers when the environment is fully known; Monte Carlo methods reach good policies from experience alone, and importance sampling lets an agent learn a better policy than the one it follows. The full report is in the repository.
