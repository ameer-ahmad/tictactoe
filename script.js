const gameBoard = document.getElementById('gameBoard');
let board = ['', '', '', '', '', '', '', '', ''];
let playerTurn = 'X';

const GameBoard = (() => {


    const displayBoard = () => {
        for (let i = 0; i < gameBoard.children.length; i++) {
            gameBoard.children[i].innerText = board[i];
        }
    }

    const updateBoard = (newBoard) => {
        board = newBoard.slice(0);
    }

    const removeHover = (square) => {
        square.classList.remove('hover');
    }

    const addHover = (square) => {
        square.classList.add('hover');
    }

    const placeMarker = () => {
        const squares = document.querySelectorAll('.square');
        for (let i = 0; i < squares.length; i++) {
            squares[i].onclick = function(e) {
                let newBoard = board.slice(0);
                newBoard[i] = playerTurn;
                GameBoard.updateBoard(newBoard);
                removeHover(squares[i]);
                playerTurn = Game.switchTurns();
                GameBoard.displayBoard();
            }
        }
    }

    return {displayBoard, board, removeHover, addHover, updateBoard, placeMarker};
})();

const Player = (name) => {

}

const Game = (() => {

    const switchTurns = () => {
        return (playerTurn === 'X' ? 'O':'X');
    }

    const startGame = () => {
        GameBoard.updateBoard(['', '', '', '', '', '', '', '', '']);
        for (let i = 0; i < gameBoard.children.length; i++) {
            GameBoard.addHover(gameBoard.children[i]);
        }
        GameBoard.displayBoard();
        playerTurn = 'X';
    }

    return {playerTurn, switchTurns, startGame};
})()

document.getElementById('start').addEventListener('click', Game.startGame);
gameBoard.addEventListener('mouseover', GameBoard.placeMarker);
