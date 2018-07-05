let currentPlayer = "X";
let nextPlayer = "O";
const cells = document.querySelectorAll("td");
let playerXSelections = new Array();
let playerOSelections = new Array();
let playerSelections = [];

// winning combinations
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]


// //   when a cell is clicked
// const handleClick = function (event) {
//     var cell = event.target
//     console.log(cell.id);
// }


const handleClick = function (event) {
    let cell = event.target;

    cell.innerHTML = currentPlayer;

    if (currentPlayer === "X") {
        playerSelections = playerXSelections;
        nextPlayer = "O";
    } else {
        playerSelections = playerOSelections;
        nextPlayer = "X";
    }

    playerSelections.push(parseInt(cell.id));
    console.log(playerSelections)
    checkWinner()
    // Swap players
    currentPlayer = nextPlayer;
}


for (let cell of cells) {
    cell.addEventListener('click', handleClick)
}

// winner

const checkWinner = function (event) {
    let matches = [];
    // Check if player has all values of each combination
    for (let i in winningCombinations) {
        let combination = winningCombinations[i];

        matches.push([])
        for (let cell of combination) {

            if (playerSelections.includes(cell)) {
                matches[i].push(cell);
                if (matches[i].length === 3) {
                    alert('winner!')

                }

            }
        }
    }


}