function startGame() {
    for (var i = 1; i <= 9; i++) {
        resetGame(i);
    }
    document.turn = "X";
    document.name = "Saanp Dost";
    if (Math.random() < 0.5) {
        document.turn = "O";
        document.name = "You";
    }
    document.winner = null;
    setMessage(document.name + " - START");
    document.getElementById("div1").style.color = "#3FC80E";
    document.getElementById("div2").style.color = "#3FC80E";
    document.getElementById("div3").style.color = "#3FC80E";
    document.getElementById("div4").style.color = "#3FC80E";
    document.getElementById("div5").style.color = "#3FC80E";
    document.getElementById("div6").style.color = "#3FC80E";
    document.getElementById("div7").style.color = "#3FC80E";
    document.getElementById("div8").style.color = "#3FC80E";
    document.getElementById("div9").style.color = "#3FC80E";
}

function setMessage(msg) {
    document.getElementById("message").textContent = msg;
}

function nextMove(box) {
    if (document.winner != null) {
        setMessage(document.winner + " Already won the game!PLAY AGAIN !!");
    } else if (box.textContent == "") {
        box.textContent = document.turn;
        switchTurn();
    } else {

        setMessage("Already occupied.");
    }
}

function switchTurn() {
    if (checkForWin(document.turn)) {
        setMessage("Congrats!! " + document.name + " - WINNER");
        document.winner = document.name;
    } else if (checkforTie()) {
        setMessage("It's a Tie...!! Play Again !!");
    } else if (document.turn == "X") {
        document.turn = "O";
        document.name = "You";
        setMessage("It's " + document.name + "r's TURN!");
    } else {
        document.turn = "X";
        document.name = "Saanp Dost";
        setMessage("It's " + document.name + "'s TURN!");
    }
}

function checkForWin(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) || checkRow(4, 5, 6, move) || checkRow(7, 8, 9, move) || checkRow(1, 4, 7, move) || checkRow(2, 5, 8, move) || checkRow(3, 6, 9, move) || checkRow(1, 5, 9, move) || checkRow(3, 5, 7, move)) {
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById("div" + number).textContent;
}

function resetGame(number) {
    document.getElementById("div" + number).textContent = "";
}

function checkforTie() {
    for (var i = 1; i < 10; i++) {
        if (getBox(i) == "")
            return false;
    }
    return true;
}