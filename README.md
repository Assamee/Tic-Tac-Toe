# React Tic-Tac-Toe: Tutorial & Beyond

**🎮 Live Demo: [Play the Game Here](https://assamee-tictactoe.vercel.app/)**

## Overview
This is my first major React project, built as part of my university coursework. To get comfortable with modern front-end development, I completed the official React Tic-Tac-Toe tutorial and then successfully implemented all of the extra, advanced challenges suggested at the end. 

*(Note: GitHub categorises this repository as primarily JavaScript, but the codebase is structured entirely using React functional components and JSX syntax).*

## Built With
* **React 19**
* **JSX**
* **HTML/CSS, JS**

## Features Implemented
* **Time Travel:** A move history list that allows players to jump back to any previous turn.
* **Coordinate Tracking:** The history log calculates and displays the exact `(col, row)` coordinates of every move played.
* **Chronological Sorting:** A toggle button that flips the history list between ascending and descending order.
* **Dynamic Grid:** Using loops to generate the 3x3 board programmatically instead of hardcoding each square.
* **Win/Draw Detection:** Custom logic to detect a winner, highlight the winning line in green, and declare a draw if the board fills up.

## What I Learnt
Building this application was a massive step up from standard scripting. It required me to understand several core React concepts:

* **Component Architecture:** Breaking the UI down into modular `Square`, `Board`, and `Game` components.
* **State Management:** Using the `useState` hook to remember the game history, the current move, and sorting preferences.
* **Lifting State:** Moving variables up to the main `Game` component so the `Board` and the history list could share the same data.
* **Immutability:** Learning why we must copy arrays (using `.slice()` or the spread operator `...`) instead of modifying them directly, ensuring React correctly re-renders the screen.
* **Passing Props:** Safely passing data and click-handler functions down from parent components to child components.

## Getting Started
To run this project locally:
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the local development server.
