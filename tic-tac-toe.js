document.addEventListener("DOMContentLoaded", function () {
    // Get the game board element
    const board = document.getElementById("board");

    // Create a 3x3 grid for the Tic Tac Toe board
    const cells = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.dataset.row = i;
            cell.dataset.col = j;
            board.appendChild(cell);
            cells.push(cell);
        }
    }

    // Initialize game state
    let currentPlayer = "X";
    let gameBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    // Add click event listeners to each cell
    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            if (!cell.textContent && !checkWinner()) {
                const row = parseInt(cell.dataset.row);
                const col = parseInt(cell.dataset.col);

                // Update the game state
                gameBoard[row][col] = currentPlayer;
                cell.textContent = currentPlayer;

                // Check for a winner
                if (checkWinner()) {
                    document.getElementById("status").textContent = `Player ${currentPlayer} wins!`;
                } else {
                    // Switch to the next player
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                    document.getElementById("status").textContent = `Player ${currentPlayer}'s turn`;
                }
            }
        });
    });

    // Function to check for a winner
    function checkWinner() {
        // Check rows, columns, and diagonals
        for (let i = 0; i < 3; i++) {
            if (
                (gameBoard[i][0] === currentPlayer && gameBoard[i][1] === currentPlayer && gameBoard[i][2] === currentPlayer) ||
                (gameBoard[0][i] === currentPlayer && gameBoard[1][i] === currentPlayer && gameBoard[2][i] === currentPlayer)
            ) {
                return true;
            }
        }

        if (
            (gameBoard[0][0] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][2] === currentPlayer) ||
            (gameBoard[0][2] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][0] === currentPlayer)
        ) {
            return true;
        }

        return false;
    }
});