const gameBoard = document.getElementById('gameBoard');
let board = ['', '', '', '', '', '', '', '', ''];
let playerTurn = 'X';
let moves = 9;
const label = document.querySelector('.label');

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
                if (squares[i].classList.contains('hover')) {
                    let newBoard = board.slice(0);
                    newBoard[i] = playerTurn;
                    GameBoard.updateBoard(newBoard);
                    removeHover(squares[i]);
                    playerTurn = Game.switchTurns();
                    GameBoard.displayBoard();
                    moves--;
                    checkWin();
                }

            }
        }
    }

    const checkWin = () => {
        if (board[0]==='X' && board[1] === 'X' && board[2] ==='X' ||
            board[3]==='X' && board[4] === 'X' && board[5] ==='X' ||
            board[6]==='X' && board[7] === 'X' && board[8] ==='X' ||
            board[0]==='X' && board[3] === 'X' && board[6] ==='X' ||
            board[1]==='X' && board[4] === 'X' && board[7] ==='X' ||
            board[2]==='X' && board[5] === 'X' && board[8] ==='X' ||
            board[0]==='X' && board[4] === 'X' && board[8] ==='X' ||
            board[2]==='X' && board[4] === 'X' && board[6] ==='X') {
                label.innerText = "Player X wins!";
                for (let i = 0; i < gameBoard.children.length; i++) {
                    GameBoard.removeHover(gameBoard.children[i]);
                }
            } else if (board[0]==='O' && board[1] === 'O' && board[2] ==='O' ||
            board[3]==='O' && board[4] === 'O' && board[5] ==='O' ||
            board[6]==='O' && board[7] === 'O' && board[8] ==='O' ||
            board[0]==='O' && board[3] === 'O' && board[6] ==='O' ||
            board[1]==='O' && board[4] === 'O' && board[7] ==='O' ||
            board[2]==='O' && board[5] === 'O' && board[8] ==='O' ||
            board[0]==='O' && board[4] === 'O' && board[8] ==='O' ||
            board[2]==='O' && board[4] === 'O' && board[6] ==='O') {
                label.innerText = "Player O wins!";
                for (let i = 0; i < gameBoard.children.length; i++) {
                    GameBoard.removeHover(gameBoard.children[i]);
                }
            } else if (moves === 0) {
                label.innerText = "It's a tie!"
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

    const startGame = (e) => {
        GameBoard.updateBoard(['', '', '', '', '', '', '', '', '']);
        for (let i = 0; i < gameBoard.children.length; i++) {
            GameBoard.addHover(gameBoard.children[i]);
        }
        GameBoard.displayBoard();
        playerTurn = 'X';
        moves = 9;
        e.target.innerText = "Restart Game";
    }

    return {playerTurn, switchTurns, startGame};
})()

document.getElementById('start').addEventListener('click', Game.startGame);
gameBoard.addEventListener('mouseover', GameBoard.placeMarker);
