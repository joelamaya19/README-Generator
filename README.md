# Automated README Generator

## Description

This project is an automated README file generator. It is a command-line application built with Node.js that prompts the user with a series of questions regarding their project and generates a README.md file based on the user's responses.

## How it Works

The application is structured with the following components:

- **index.js**: This is the main entry point of the application. It contains the logic to prompt the user with questions using the `inquirer` package and to generate the README file based on the user's responses.

- **utils/generateMarkdown.js**: This module contains the `generateMarkdown` function, which takes the user's responses and generates the content for the README file. It formats the content using Markdown syntax.

- **readme_samples/README.md**: This is a sample README file that will be overwritten each time the user runs the application. It serves as a template for generating the README file.

## Installation

To use this application, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the necessary dependencies by running `npm install`.

## Usage

To run the application, execute the following command in your terminal:

!['Video of how to work the application'](./assets/images&videos/readmegeneratorvid.gif)

Follow the prompts to answer the questions about your project. Once you have answered all the questions, the application will generate a README.md file in the `readme_samples` directory.


## Contribution

Contributions to this project are welcome! If you have any ideas for improvement or would like to report a bug, please open an issue or submit a pull request on GitHub.

## License

N/A



