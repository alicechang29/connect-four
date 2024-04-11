import {
  WIDTH,
  HEIGHT,
  gameState,
  makeBoard,
  findSpotInCol,
  checkForWin,
  switchCurrPlayer,
} from "./connect4.js";


/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  const $htmlBoard = document.querySelector("#board");

  // creating a table row element and giving it the id "column-top"
  const $top = document.createElement("tr");
  $top.setAttribute("id", "column-top");

  //Creating the area that users can click to place a piece
  // by dynamically creating a cell element and setting the id to top-(x value)
  // adding an event listener to each cell element and appending it to the table row  */
  for (let x = 0; x < WIDTH; x++) {
    const $headCell = document.createElement("td");
    $headCell.setAttribute("id", `top-${x}`);
    $headCell.addEventListener("click", handleClick);
    $top.append($headCell);
  }
  $htmlBoard.append($top);

  // dynamically creates the main part of html board
  // uses HEIGHT to create table rows
  // uses WIDTH to create table cells for each row
  for (let y = 0; y < HEIGHT; y++) {
    const $row = document.createElement("tr");

    for (let x = 0; x < WIDTH; x++) {
      const $cell = document.createElement("td");
      $cell.setAttribute("id", `c-${y}-${x}`);
      $row.append($cell);
    }
    
    $htmlBoard.append($row);
  }
}


/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // TODO: make a div and insert into correct table cell\
  const $piece = document.createElement('div');
  $piece.classList.add('piece');
  $piece.classList.add(`p${gameState.currPlayer}`);
  document.querySelector(`#c-${y}-${x}`).append($piece);
  console.log($piece);
}


/** endGame: announce game end */

function endGame(msg) {
  alert(msg);
}


/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  const x = Number(evt.target.id.slice("top-".length));

  // get next spot in column (if none, ignore click)
  const y = findSpotInCol(x);
  if (y === null) {
    return;
  }

  // place piece in board
  // TODO: add line to update `board` state with new piece

  // add to HTML table
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${gameState.currPlayer} won!`);
  }

  // check for tie: if top row is filled, board is filled
  // TODO: check if all cells in board are filled; if so, call endGame

  // TODO: switch players
}


/** Start game. */

function start() {
  makeBoard();
  makeHtmlBoard();
}


export { start };
