# Automated Face-Mask Detection in Public Spaces

## Objective
The project aimed to develop an automated system to detect face masks in public spaces, enhancing public health safety during the COVID-19 pandemic. This system leverages traditional image processing techniques to detect masks without the computational demands of machine learning, making it feasible for resource-constrained environments.

## Technologies Used
- **MATLAB**: Utilized for implementing traditional image processing algorithms and developing the mask detection system.
- **Image Processing Techniques**: Techniques like grayscale conversion, Gaussian smoothing, histogram equalization, Canny edge detection, and HSV color segmentation were used.
- **Viola-Jones Algorithm**: Applied for face detection to focus mask detection on relevant regions.

## Role and Contributions
My role in this project included:
1. **Implementing Image Processing Steps**: Developing a structured pipeline for image preprocessing, including grayscale conversion, smoothing, and edge detection.
2. **Algorithm Development**: Applying and fine-tuning the Viola-Jones algorithm for face detection and creating binary masks to detect mask-like regions through HSV color segmentation.
3. **Testing and Evaluation**: Testing the detection system on a dataset of 200 images, evenly split between masked and unmasked faces, and analyzing the results for accuracy and robustness.
4. **Result Documentation**: Compiling the findings, including the accuracy rates and challenges faced due to lighting and angles, in the final report.

## Final Outcomes or Results
The system achieved an accuracy of **50.66%**, primarily limited by the traditional methods' sensitivity to variations in lighting and angles. The project highlighted the limitations of traditional image processing for this task, indicating a potential need for machine learning to improve accuracy and robustness. The project served as a foundational exploration of mask detection and pointed to the benefits of machine learning for future enhancements.

[GitHub Repository for Automated-Facemask-Detection-in-public-spaces](https://github.com/mrw-soumik/Automated-Facemask-Detection-in-public-spaces)
