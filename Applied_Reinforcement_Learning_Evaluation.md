## Project Overview
This project applies reinforcement learning algorithms to two classic problems: navigating a grid world and performing a random walk on a 7x7 grid. It provides an analysis of algorithm performance, focusing on learning efficiency, policy convergence, and value function estimation.

## Technologies Used
- **Python**: Primary language for algorithm implementation
- **Jupyter Notebook**: Interactive code execution and analysis
- **Libraries**:
  - `numpy` for calculations
  - `matplotlib` for visualizations

## Contributions
- **Algorithm Implementation**:
  - **Grid World**: SARSA (on-policy) and Q-Learning (off-policy) algorithms for navigating the grid.
  - **Random Walk**: Gradient Monte Carlo and Semi-Gradient TD(0) methods for value function estimation.
- **Results and Analysis**:
  - Compared learning paths and reward trends for SARSA and Q-Learning in Grid World.
  - Evaluated value function estimations in Random Walk, highlighting the efficiency and biases of each method.
- **Documentation**: Clear explanations of methods and insights on algorithm performance.

## Key Results
### Grid World
- **SARSA**: Learned safe paths over time, avoiding penalty squares. Rewards stabilized with training.
- **Q-Learning**: Reached terminal states quickly and showed faster convergence to optimal paths.

### Random Walk
- **Gradient Monte Carlo**: Smooth and accurate value estimates between terminal states.
- **TD(0)**: Faster but introduced slight bias, especially near negative terminal states.

