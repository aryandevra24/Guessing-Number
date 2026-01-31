# Number Guessing Game 🔢

This is an interactive web game where the user tries to guess a randomly generated number. It's an excellent project for practicing basic DOM manipulation, event handling, and game logic in JavaScript.

---

## ✨ Features

**Random Number Generation**: A new secret number is generated every time the game starts.

**Attempt Tracking**: Users are given 10 attempts to guess the correct number.

**Hints**: Provides feedback ("Too High," "Too Low," or "You Guessed It Right!").

**Guess History**: Keeps a running list of previous guesses.

**"Start Over" Button**: Appears at the end of the game to easily restart without a page refresh.

**Input Validation**: Ensures the user enters a valid number within the 1-100 range.

---

## ⚙️ Technologies Used  

**HTML5** (Game structure and UI elements)

**CSS3** (Basic styling and centered layout using Flexbox)

**JavaScript (ES6)** (Core game logic, event listeners, and DOM updates)

---

## 🚀 How to Play  

Clone the repository:

```bash
git clone https://github.com/aryandevra24/Guessing-Number.git
```

Navigate to the project directory:

```bash
cd Guessing-Number
```

Open index.html in your web browser.

Enter your guess in the input field and click "Submit Guess."

Follow the hints!

---

## 📝 Game Logic Highlights  

The game is controlled by several key JavaScript functions:

**validateGuess()**: Checks if the input is a valid number between 1 and 100.

**checkGuess()**: Compares the user's guess to the secret number and provides a hint.

**displayGuess()**: Updates the remaining attempts and the list of previous guesses.

**endGame()**: Disables the input/submit button and adds the "Start Over" button.

**newGame()**: Resets all variables and removes the "Start Over" button to prepare for a new round.

