/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7;
const HEIGHT = 6;

const gameState = {
  currPlayer: 1, // active player: 1 or 2
  board: Array(HEIGHT), // array of HEIGHT number of slots [emptyx6]
  // Each array slot is empty to start, but will be filled in with an array
  // of WIDTH later.
  // These inner arrays will represent rows.
  // gameState.board[HEIGHT][0] represents the bottom-left spot on the board
};


function switchCurrPlayer() {
  // TODO: switch currPlayer 1 <-> 2
}


/** Creates the gameboard given the HEIGHT and WIDTH variables.
 * Fills each subarray value with null
 * Example: gameState.board[0] === [null, null, null, null, null, null, null]  */

function makeBoard() {

  for (let y = 0; y < HEIGHT; y++) { 
    const gridRow = Array(WIDTH).fill(null);
    gameState.board[y] = gridRow;

  }
  console.log("gameState.board", gameState.board);
}


/** findSpotInCol: given column x, return y coordinate of furthest-down spot
 *    (return null if filled)
 */

function findSpotInCol(x) {
  //x represents the column, return the lowest null y value
  for(let y = HEIGHT - 1; y>= 0; y--){
    if(gameState.board[y][x] === null) return y;
  }
  return null;
}


/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {

  /** _win:
   * takes input array of 4 cell coordinates [ [y, x], [y, x], [y, x], [y, x] ]
   * returns true if all are legal coordinates for a cell & all cells match
   * currPlayer
   */
  function _win(cells) {

    // TODO: Check four cells to see if they're all legal & all color of current
    // player
    for(let y = 0; y < cells.length; y++){
      if((cells[y][0] < HEIGHT && cells[y][1] < WIDTH) && 
      gameState.board[y][x] === gameState.currPlayer) return true;
    }
    
    return false;
  }

  // using HEIGHT and WIDTH, generate "check list" of coordinates
  // for 4 cells (starting here) for each of the different
  // ways to win: horizontal, vertical, diagonalDR, diagonalDL
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      // TODO: assign values to the below variables for each of the ways to win
      // horizontal has been assigned for you
      // each should be an array of 4 cell coordinates:
      // [ [y, x], [y, x], [y, x], [y, x] ]
      
      //wins: all ys same, xs next to each other. all xs same, ys next to each other
    //win diag: x and y both increase by 1

      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      let vert;
      let diagDL;
      let diagDR;

      // find winner (only checking each win-possibility as needed)
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
  return false;
}


export {
  WIDTH,
  HEIGHT,
  gameState,
  makeBoard,
  findSpotInCol,
  checkForWin,
  switchCurrPlayer,
};
