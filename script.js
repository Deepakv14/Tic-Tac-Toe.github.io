function startGame() {
    for (var i = 1; i <= 9; i++) {
        resetGame(i);
    }
    document.turn = "X";
    if (Math.random() < 0.5) {
        document.turn = "O";
    }
    document.winner = null;
    setMessage(document.turn + " gemts to stamrt.");
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
        setMessage(document.winner + " Already wom the game! Play Agaim !!");
    } else if (box.textContent == "") {
        box.textContent = document.turn;
        switchTurn();
    } else {

        setMessage("Already occupied.");
    }
}

function switchTurn() {
    if (checkForWin(document.turn)) {
        setMessage("Comgrats!! " + document.turn + " is Wimner.");
        document.winner = document.turn;
    } else if (checkforTie()) {
        setMessage("It's a Tie...!! Play Agaim !!");
    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage("It's " + document.turn + "'s turn!");
    } else {
        document.turn = "X";
        setMessage("It's " + document.turn + "'s turn!");
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