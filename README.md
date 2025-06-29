# Gemini Code Reviewer

An AI-powered tool that uses the Google Gemini API to automatically review your code. It provides detailed, actionable feedback on potential bugs, performance bottlenecks, security vulnerabilities, and style issues to help you improve your code quality.

## Features

-   **AI-Powered Code Analysis:** Leverages the Gemini API for intelligent code review.
-   **Multi-Language Support:** Supports a wide range of popular programming languages like JavaScript, Python, Java, C++, and more.
-   **Categorized Feedback:** Suggestions are clearly classified into types: 'Bug', 'Performance', 'Security', 'Style', and 'Best Practice'.
-   **Line-Specific Suggestions:** Pinpoints the exact line of code where an issue is found, providing context.
-   **Clean, Responsive UI:** A modern and intuitive interface built with React and Tailwind CSS for a seamless user experience.

## Tech Stack

-   **Frontend:** React, TypeScript, Tailwind CSS
-   **AI Model:** Google Gemini (`@google/genai`)
-   **Module Loading:** ES Modules with `importmap` for dependency management without a build step.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

This project is designed to run in an environment that can serve static files and provide environment variables to the frontend.

-   A modern web browser.
-   A Google Gemini API Key.

### Installation & Running

1.  **Clone the repository (or download the files):**
    ```sh
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **API Key Configuration:**
    The application requires a Google Gemini API key to function. It expects the key to be available in the execution environment as `process.env.API_KEY`.

    **Important:** This project is set up to be run in a development environment that handles the injection of this environment variable. Directly exposing an API key in client-side code is not recommended for production.

3.  **Run with a local server:**
    Since the project uses ES modules, you need to serve the files from a local web server.
    You can use any simple web server. A common choice is `serve`.

    a. If you don't have `serve`, install it via `npm`:
    ```sh
    npm install -g serve
    ```

    b. Run the server from the project's root directory:
    ```sh
    serve .
    ```

    c. Open your browser and navigate to the local address provided by the server (e.g., `http://localhost:3000`).

## How to Use

1.  **Select Language:** Open the application in your browser. Use the dropdown menu to select the programming language of the code you want to analyze.
2.  **Paste Your Code:** Paste your code snippet into the "Code to Review" text area.
3.  **Start the Review:** Click the "Review Code" button. The button will be disabled until you enter some code.
4.  **View Feedback:** The AI's analysis will appear on the right side of the screen. You'll see an overall summary and a list of specific, categorized suggestions for improving your code.
