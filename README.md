# FocusTimer productivity app

![Status](https://img.shields.io/badge/status-finished-green)
![GitHub last commit](https://img.shields.io/github/last-commit/PabloBarcellos-0522/FocusTimer?color=blue)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/PabloBarcellos-0522/FocusTimer?color=blue)

<div align="center">
  <img src="public/FocusTimer%20Logo.png" alt="FocusTimer Logo" width="300">
</div>

<p align="center">
  A modern and intuitive productivity application based on the Pomodoro Technique, built with React and Tailwind CSS.
</p>

---

**Translations:**
* [Português (Brasil)](./README-PT.md)

---

### 🔗 **Live Application: [Access FocusTimer Here](https://PabloBarcellos-0522.github.io/FocusTimer/)**

---

<br/>

## 🎨 Design Process

The visual identity and user experience of FocusTimer were carefully planned before implementation. The goal was to create a clean, modern, and intuitive interface that helps the user stay focused.

-   **Initial Sketches**: The first ideas and layouts were drafted using **Excalidraw**, allowing for quick exploration of different structures and components.
    -   _(You can add a link to your Excalidraw sketches or images here)_
-   **Polished Design (UI/UX)**: A more detailed and high-fidelity design was created in **Figma**, serving as the definitive guide for colors, typography, and component styling.
    -   **Design: [Access the Figma design here](http://www.figma.com/design/ojIinc4QpL39jAhtpazVkt)**

<br/>

## ✨ Key Features

FocusTimer is not just a simple timer; it's a complete tool to manage your work and rest cycles.

-   **Three Timer Modes**:
    -   **Pomodoro**: For focused work sessions.
    -   **Short Break**: For quick rests.
    -   **Long Break**: For longer pauses after multiple Pomodoro cycles.
-   **Thematic Interface**: The app's color scheme changes dynamically to reflect the current mode (Work, Short Break, or Long Break), helping the user to visually identify the current context.
-   **Customizable Timers**: Users can adjust the duration (in minutes) for each of the three modes through the settings panel.
-   **Task Manager**:
    -   Add, edit, and delete tasks.
    -   Mark tasks as complete.
    -   Tasks are saved locally, so they persist even after closing the browser.
-   **Persistent Settings**: All user preferences, including timer durations, sound settings, and tasks, are automatically saved in the browser's `localStorage`.
-   **Audio Integration**:
    -   **Alarm Sounds**: Choose from different sounds to be notified when a cycle ends.
    -   **Ticking Sounds**: Optional ambient sounds (like a ticking clock or white noise) during focus sessions to improve concentration.
    -   Volume control for both alarms and ambient sounds.
-   **Embedded Media**: Includes an embedded YouTube player, perfect for "Lofi" streams or other ambient videos, with options to automatically play/pause the video when the timer starts or stops.
-   **Automation**:
    -   Option to automatically start breaks after a Pomodoro session.
    -   Option to automatically start the next Pomodoro after a break.
-   **Responsive Design**: The interface is designed to be pleasant and functional on different screen sizes.

<br/>

## 🚀 Technologies Used

This project was built using modern web development technologies to ensure performance, scalability, and a great developer experience.

-   **Frontend**:
    -   [**React 19**](https://react.dev/): A JavaScript library for building user interfaces.
    -   [**Tailwind CSS**](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
    -   [**Vite**](https://vitejs.dev/): A next-generation frontend build tool that provides an extremely fast development experience.
-   **State Management**:
    -   React Hooks (`useState`, `useEffect`, `useRef`) for local and component-level state management.
-   **Deployment**:
    -   [**gh-pages**](https://www.npmjs.com/package/gh-pages): A simple way to deploy the application to GitHub Pages.
-   **Code Quality**:
    -   [**ESLint**](https://eslint.org/): For identifying and fixing problems in the JavaScript code.

<br/>

## 📂 Project Structure

The project is organized into a clear and logical folder structure:

```
/
├── public/               # Static assets (logos, icons)
├── src/
│   ├── assets/           # Audio files (alarms, ticking sounds)
│   ├── components/       # Reusable React components
│   │   ├── SettingsInputs/ # Components specific to the settings panel
│   │   ├── Button.jsx
│   │   ├── Icons.jsx
│   │   ├── SettingsFrame.jsx
│   │   ├── Task.jsx
│   │   ├── TaskManager.jsx
│   │   └── Timer.jsx
│   ├── styles/           # Global CSS files
│   ├── App.jsx           # Main application component (state management)
│   └── main.jsx          # Entry point of the React application
├── .gitignore
├── index.html            # Main HTML file
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite configuration
```

<br/>

## ⚙️ Getting Started

To run this project locally, follow the steps below:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/pabloxt14/FocusTimer.git
    cd FocusTimer
    ```

2.  **Install the dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

<br/>

## 📦 Deployment

The project is configured for easy deployment to GitHub Pages.

To deploy your version, run the following command:

```bash
npm run deploy
```

This command will automatically execute the `predeploy` script (which runs `npm run build`) to generate the production files in the `dist` folder and then publish them to the `gh-pages` branch of your repository.
