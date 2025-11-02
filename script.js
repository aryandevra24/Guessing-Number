let num = Math.floor(Math.random() * 100 + 1)
const submit = document.querySelector('button')
let userInput = document.querySelector('#userInput')
const previousGuesses = document.querySelector('#previousGuesses')
const remaininigGuess = document.querySelector('#remaininigGuess')
const hint = document.querySelector('#hint')
const buttons = document.querySelector('.buttons')

let prevGuess = []
let numGuess = 1;
let playGame = true

const node = document.createElement('button')

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guessValue = parseInt(userInput.value)
        validateGuess(guessValue)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    }
    else if (guess <= 0 || guess >= 100) {
        alert("Please enter a number between 1 to 100")
    } else {
        prevGuess.push(guess)
        if (numGuess >= 10) {
            displayGuess(guess)
            displayMsg(`Game Over, Random number was ${num}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    if (guess === num) {
        displayMsg("You guessed it right")
        endGame()
    } else if (guess < num) {
        displayMsg("Number is too low")
    } else {
        displayMsg("Number is too high")
    }
}
function displayGuess(guess) {
    userInput.value = ''
    previousGuesses.innerHTML += `${guess} `
    numGuess++
    remaininigGuess.innerHTML = `${11 - numGuess}`
}
function displayMsg(msg) {
    hint.innerHTML = `${msg}`
}
function endGame() {
    userInput.setAttribute('disabled', '')
    submit.setAttribute('disabled', '')
    node.innerHTML = "Start Over"
    buttons.appendChild(node)
    playGame = false
    newGame()
}
function newGame() {
    node.addEventListener('click', () => {
        num = Math.floor(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        previousGuesses.innerHTML = ''
        remaininigGuess.innerHTML = '10'
        userInput.removeAttribute('disabled')
        submit.removeAttribute('disabled', '')
        node.remove()
        hint.innerHTML = ''
        playGame = true
    })
}