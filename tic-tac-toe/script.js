class TicTacToe {
  constructor(board, symbolPlayer1, symbolPLayer2, player1Turn) {
    this.board = board;
    this.symbolPlayer1 = symbolPlayer1;
    this.symbolPLayer2 = symbolPLayer2;
    this.player1Turn = true;
    this.GameOver = false;
    this.count = 0;
  }
  //change the value in Dom depending on where player clicked and what value they have "x" or "o"
  display() {}
  //Method to check if either player has won and seperate check for tie
  checkForWin() {}
  //Method that resets the board to the beginning
  reset() {}
  createBoard() {
    //creates a 2 dimensional array to better visualize the check for win implementation
    let board2d = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    //Returns a node list, needs to be converted to array to use array methods
    let board = document.querySelectorAll(".tile");
    //Converts the node list to an array
    let boardArray = Array.from(board);
    //Fills the 2 dimensional array with all the tiles ([0][0]=tile1, [0][1]=tile2...)
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board2d[i][j] = boardArray.shift();
        //Adds the event listener to each tile
        board2d[i][j].addEventListener("click", function () {
          console.log("clicked");
        });
      }
    }
    return board2d;
  }
}

//create the game object from TicTacToe
