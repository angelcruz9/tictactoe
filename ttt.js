//determine turn
var turn = document.getElementById("turn"),
squares = document.querySelectorAll("#all div"), X_or_O = 0;
//win condition
function selectWinnerSquares(b1, b2, b3) {
b1.classList.add("win");
b2.classList.add("win");
b3.classList.add("win");
turn.innerHTML = b1.innerHTML + " WINS THE GAME PLEASE PLAY AGAIN :)";
turn.style.fontSize = "30px";
}
//all possible winning combinations
function getWinner() {

var square1 = document.getElementById("square1"),
  square2 = document.getElementById("square2"),
  square3 = document.getElementById("square3"),
  square4 = document.getElementById("square4"),
  square5 = document.getElementById("square5"),
  square6 = document.getElementById("square6"),
  square7 = document.getElementById("square7"),
  square8 = document.getElementById("square8"),
  square9 = document.getElementById("square9");

if (square1.innerHTML !== "" && square1.innerHTML === 
square2.innerHTML && square1.innerHTML === square3.innerHTML)
  selectWinnerSquares(square1, square2, square3);

if (square4.innerHTML !== "" && square4.innerHTML === 
square5.innerHTML && square4.innerHTML === square6.innerHTML)
  selectWinnerSquares(square4, square5, square6);

if (square7.innerHTML !== "" && square7.innerHTML === 
square8.innerHTML && square7.innerHTML === square9.innerHTML)
  selectWinnerSquares(square7, square8, square9);

if (square1.innerHTML !== "" && square1.innerHTML === 
square4.innerHTML && square1.innerHTML === square7.innerHTML)
  selectWinnerSquares(square1, square4, square7);

if (square2.innerHTML !== "" && square2.innerHTML === 
square5.innerHTML && square2.innerHTML === square8.innerHTML)
  selectWinnerSquares(square2, square5, square8);

if (square3.innerHTML !== "" && square3.innerHTML === 
square6.innerHTML && square3.innerHTML === square9.innerHTML)
  selectWinnerSquares(square3, square6, square9);

if (square1.innerHTML !== "" && square1.innerHTML === 
square5.innerHTML && square1.innerHTML === square9.innerHTML)
  selectWinnerSquares(square1, square5, square9);

if (square3.innerHTML !== "" && square3.innerHTML === 
square5.innerHTML && square3.innerHTML === square7.innerHTML)
  selectWinnerSquares(square3, square5, square7);

}


// main game logic 
for (var i = 0; i < squares.length; i++) {
squares[i].onclick = function () {
  if (this.innerHTML !== "X" && this.innerHTML !== "O") {
    if (X_or_O % 2 === 0) {
      console.log(X_or_O);
      this.innerHTML = "X";
      turn.innerHTML = "O Turn Now";
      getWinner();
      X_or_O += 1;

    } else {
      console.log(X_or_O);
      this.innerHTML = "O";
      turn.innerHTML = "X Turn Now";
      getWinner();
      X_or_O += 1;
    }
  }

};
}
//replay button 
document.getElementById('replay').addEventListener('click', replay);

function replay() {

for (var i = 0; i < squares.length; i++) {
  squares[i].classList.remove("win");
  squares[i].innerHTML = "";
  turn.innerHTML = "Tic Tac Toe By Pablo Cabrera";
  turn.style.fontSize = "60px";

}

}

//stop game after winner 
//decide if tie condition was met 
//scoreboard
//^^^not enought time for these features ^^^^