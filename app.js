const board = document.querySelector('.game-board')
const squareNumberArray = []

for (let i = 0; i < 16; i++) {
    let square = document.createElement('div')
    square.className = `square`
    square.id = i
    board.append(square)
}

const allSquares = document.querySelectorAll('.square')
allSquares.forEach((square) => {
    let squareNumber = square.getAttribute('id')
    squareNumberArray.push(squareNumber)
})

let randomSquare = undefined

function assignSquareANumber() {
    const getRandomSquare = Math.floor(Math.random() * squareNumberArray.length)
    randomSquare = getRandomSquare
    let theChosenOne = document.getElementById(randomSquare)
    console.log(theChosenOne.innerHTML)
    if (theChosenOne.innerHTML === '') {
        theChosenOne.append(2)
    }
}

console.log(randomSquare)

document.onkeydown = function checkKey(e) {
    if (e.keyCode === 37) {
        console.log('left')
        console.log(randomSquare)
        allSquares.forEach((square) => {
            if (randomSquare !== 0) {
                console.log('hi')
            }
        })
    } else if (e.keyCode === 38) {
        console.log('up')
    } else if (e.keyCode === 39) {
        console.log('right')
    } else if (e.keyCode === 40) {
        console.log('down')
    }
    assignSquareANumber()
};

function slide() {
    
}

// probably need to create four arrays
// one for each row of squares
// then will be able to more easily maneuver numbers
