const board = document.querySelector(".game-board");
const squareNumberArray = []

// for (let i = 0; i < 16; i++) {
//     let square = document.createElement('div')
//     square.className = `square`
//     square.id = i
//     board.append(square)
// }

// const allSquares = document.querySelectorAll('.square')
// allSquares.forEach((square) => {
//     let squareNumber = square.getAttribute('id')
//     squareNumberArray.push(squareNumber)
// })

// let randomSquare = undefined

// function assignSquareANumber() {
//     const getRandomSquare = Math.floor(Math.random() * squareNumberArray.length)
//     randomSquare = getRandomSquare
//     let theChosenOne = document.getElementById(randomSquare)
//     console.log(theChosenOne.innerHTML)
//     if (theChosenOne.innerHTML === '') {
//         theChosenOne.append(2)
//     }
// }


// document.onkeydown = function checkKey(e) {
//     if (e.keyCode === 37) {
//         console.log('left')
//     } else if (e.keyCode === 38) {
//         console.log('up')
//     } else if (e.keyCode === 39) {
//         console.log('right')
//     } else if (e.keyCode === 40) {
//         console.log('down')
//     }
//     assignSquareANumber()
// };

// probably need to create four arrays
// one for each row of squares
// then will be able to more easily maneuver numbers

let arr = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

arr[0][0] = 1;
arr[1][3] = 1;
arr[2][2] = 2;
arr[2][3] = 3;
arr[1][0] = 4;
arr[3][1] = 5;

let allSquareIndexes = [];

arr.forEach((square, index) => {
  let firstPosition = index;
  square.forEach((s, index) => {
    const div = document.createElement("div");
    div.className += "square";
    div.setAttribute("id", `${firstPosition}${index}`);
    board.append(div);
    if (s !== 0) {
        div.innerHTML = s
    }
    allSquareIndexes.push(`${firstPosition}${index}`);
  });
});

function assignSquareANumber() {
  const randomNum = Math.floor(Math.random() * allSquareIndexes.length);
  let chosenSquare = allSquareIndexes[randomNum];
  document.getElementById(chosenSquare).innerHTML = 2;
}

document.onkeydown = function checkKey(e) {
  if (e.keyCode === 37) {
    slideLeft();
    slideLeft();
  } else if (e.keyCode === 38) {
    console.log("up");
  } else if (e.keyCode === 39) {
    slideRight()
  } else if (e.keyCode === 40) {
    console.log("down");
  }
  assignSquareANumber();
};

//this is ugly af but it removes and pushes zeros when on every click
// so what i've done is just called this function twice on keypress. it's not nice.
// it's terrible.

function slideLeft() {
  arr.forEach((square) => {
    square.filter((num, j) => {
      if (num === 0) {
        square.splice(j, 1);
        square.push(0);
      }
    });
  });
  console.table(arr);
}

function slideRight() {
    arr.forEach((square) => {
      square.filter((num, j) => {
        if (num === 0) {
          square.splice(j, 1);
          square.unshift(0);
        }
      });
    });
    console.table(arr);
  }

console.table(arr)