class TicTacToe {
  constructor(board, symbolPlayer1, symbolPlayer2, player1Turn) {
    this.board = board;
    this.symbolPlayer1 = symbolPlayer1;
    this.symbolPlayer2 = symbolPlayer2;
    this.player1Turn = true;
    this.GameOver = false;
    this.count = 0;
  }
  //change the value in Dom depending on where player clicked and what value they have "x" or "o"
  display() { }
  //Method to check if either player has won and seperate check for tie
  checkForWin() {
    console.log('Checking for win...')
  
    //Get all the tiles
    let tiles = document.querySelectorAll('.tile')
    
    let winner = ''
    //Check if board has been created and has 9 squares  
    if (Array.isArray(this.board) && this.board.flat().length == 9) {
        //Get the textContent from each tile
        //Change this if textContent is not where you store player symbolss
        let fBoard = this.board.flat().map((tile, index) => tiles[index].textContent)
        
        //Get the squares matching symbolPlayer1
        let p1Squares = fBoard.reduce((arr, el, ind) => {
        if (fBoard[ind] == this.symbolPlayer1) {
          arr.push(ind)
        }
        return arr
      }, [])
      //Get the squares matching symbolPlayer2
      let p2Squares = fBoard.reduce((arr, el, ind) => {
        if (fBoard[ind] == this.symbolPlayer2) {
          arr.push(ind)
        }
        return arr
      }, [])
      //Win conditions
      const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7], [2,5,8], [0,4,8], [6,4,2]]
    
      wins.forEach((line) => {
        if(p1Squares.includes(line[0]) && p1Squares.includes(line[1]) && p1Squares.includes(line[2])) {
          //Player 1 wins
        
          winner = 'Player 1'
        }
        if(p2Squares.includes(line[0]) && p2Squares.includes(line[1]) && p2Squares.includes(line[2])) {
          //Player 2 wins
         
          winner =  'Player 2'
        }
      })
      //Check if all squares are picked
      if(p1Squares.length + p2Squares.length == 9 && winner === '') {
        winner = 'Draw'
      } else if (winner === '') {
        //Keep playing
        winner =  'Keep playing!'
      }
      
      return winner
    }
  }
  //Method that resets the board to the beginning
  reset() { }
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
let game = new TicTacToe([], 'X', 'O', true)
game.board = [['X','X','X'],['O','X','O'], ['X', 'O','O']]
console.log(game.checkForWin())