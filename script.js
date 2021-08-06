const GameBoard = (() => {
    let board = ['X', 'X', 'O', '', '', 'O', 'O', 'X', ''];

    const displayBoard = () => {
        const gameBoard = document.getElementById('gameBoard');
        for (let i = 0; i < gameBoard.children.length; i++) {
            gameBoard.children[i].innerText = board[i];
        }
    }

    return {displayBoard};
})();

GameBoard.displayBoard();