# Reactive Memory ⚛︎

Reactive Memory is a simple, yet engaging memory card game built with React. The objective of the game is to match pairs of cards with the same image by flipping them over. This README will guide you through setting up and running the project, as well as providing an overview of the code structure.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components Overview](#components-overview)


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/steven-oehley/Reactive_Memory.git
   cd Reactive_Memory
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
Reactive_Memory/
├── public/
├── src/
│ ├── assets/
│ │ └── img/
│ ├── components/
│ │ ├── Card.js
│ │ ├── CardGrid.js
│ ├── data/
│ │ └── cardData.js
│ ├── utilities/
│ │ └── cardUtils.js
│ ├── App.css
│ ├── App.js
│ ├── index.css
│ ├── index.js
└── README.md
```

## Components Overview

#### `App.js`

The main component of the application. It manages the state of the game, including the list of cards, the number of turns taken, and the currently selected cards.

Key functions:

- `handleChoice(card)`: Handles the logic for selecting cards.
- `newGame()`: Starts a new game by shuffling the cards and resetting the state.
- `resetTurns()`: Resets the choices and increments the turn counter.

#### `CardGrid.js`

A component that renders a grid of `Card` components. It receives the list of cards and the necessary functions and states to manage the game logic.

#### `Card.js`

A component that renders an individual card. It manages the flipping of the card and triggers the selection logic when clicked.

#### `cardData.js`

Contains the initial data for the cards, including their images and matched status.

#### `cardUtils.js`

Contains utility functions for the game, including `shuffleCards`, which shuffles the cards and assigns unique IDs to them.

Enjoy playing Reactive Memory!
