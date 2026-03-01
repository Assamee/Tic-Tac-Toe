# React Tic-Tac-Toe: Time Travel Edition

## Overview
This project is a fully functional, interactive Tic-Tac-Toe application built using **React** and **JSX**. Developed to explore modern front-end frameworks, it extends the official React documentation tutorial by implementing several advanced logic and UI challenges. 

*(Note: While GitHub's language statistics categorise this repository as primarily JavaScript, the codebase is entirely structured using React functional components and JSX syntax).*

## Key Features
* **Time Travel Mechanics:** Users can jump back to any previous move in the game's history, securely navigating through alternate timelines.
* **Dynamic Grid Generation:** The game board is rendered programmatically using nested loops and mathematical index mapping, rather than hardcoded HTML elements.
* **Coordinate Tracking:** The history log calculates and records the exact `(col, row)` location of every move played.
* **Chronological Sorting:** A state-driven toggle feature allows users to dynamically sort the game history in ascending or descending order.
* **Intelligent Game States:** The logic calculates winning combinations, highlights the specific winning squares via dynamic CSS, and successfully detects board draws.

## Technical Architecture & Core Concepts
Building this application required the practical application of several strict architectural rules:

* **Component-Based Architecture:** Breaking down the UI into modular, reusable `Square`, `Board`, and `Game` components.
* **Unidirectional Data Flow:** Passing state and callback functions downwards through the component tree via props, ensuring a single source of truth.
* **Advanced State Management:** Utilising the `useState` hook to manage complex, nested data structures (Arrays of Objects).
* **Strict Immutability:** Enforcing React's immutability rules by creating shallow copies of history arrays using the spread operator (`...`) and `.slice()` to prevent direct state mutation and ensure reliable re-renders.
* **Derived State:** Calculating values (such as the current player's turn) dynamically from existing state variables to prevent desynchronisation.

## Getting Started
To run this project locally:
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the local development server.
