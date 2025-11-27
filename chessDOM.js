let board = document.getElementById("board");
for (let i = 0; i < 8; i++) {
    let row = board.insertRow();
    for (let j = 0; j < 8; j++) {
        let cell = row.insertCell();
        if ((i + j) % 2 === 0) {

        }
        else {
            cell.className = "cell";
        }
    }
}