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

  for (let i = 0; i < HEIGHT; i++) { //FIXME: change i to y/x to match the ui.js
    const gridRow = Array(WIDTH); //FIXME: use the .fill here with null to avoid having to do the map
    gameState.board[i] = gridRow;

  }
  //loop through board, for ea element, fill the subarrays with null
  gameState.board.map(val => val.fill(null)); //FIXME: remove this after fixing gridRow
  console.log("gameState.board", gameState.board);
}


/** findSpotInCol: given column x, return y coordinate of furthest-down spot
 *    (return null if filled)
 */

function findSpotInCol(x) {
  // TODO: write the real version of this, rather than always returning 5
  return 5;
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
