var errors = 0;
var cardList = [
    "assets/images/alarm",
    "assets/images/atom",
    "assets/images/brain",
    "assets/images/eye",
    "assets/images/flask",
    "assets/images/moon",
    "assets/images/sun",
    "assets/images/key"
]

var cardSet;
var board = [];
var rows = 4;
var columns = 4;
var matches = 0;
var card1Selected;
var card2Selected;

var card2Amount = [];


window.onload = function () {
    shuffleCards();
    startGame();
}

function shuffleCards() {
    cardSet = cardList.concat(cardList);
    console.log(cardSet);
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length);
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);
}

function startGame() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg);

            let card = document.createElement("div");
            card.classList.add("card");
            card.id = r.toString() + "-" + c.toString();
            card.addEventListener("click", selectCard);

            let front = document.createElement("img");
            front.classList.add("front");
            front.src = cardImg + ".png";

            let back = document.createElement("img");
            back.classList.add("back");
            back.src = "assets/images/card-back.png";

            card.append(front);
            card.append(back);

            document.getElementById("board").append(card);

        }
        board.push(row);
    }
    console.log(board);

    setTimeout(hideCards, 3000);

}

function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "assets/images/card-back.png";
        }
    }
}


function selectCard() {
    if (card1Selected && card2Selected) return;

    if (this.src.includes("card-back")) {
        if (!card1Selected) {
            card1Selected = this;

            let coords = card1Selected.id.split("-");
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);


            card1Selected.src = board[r][c] + ".png";
        } else if (!card2Selected && this != card1Selected) {
            card2Selected = this;

            let coords = card2Selected.id.split("-");
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card2Selected.src = board[r][c] + ".png";
            setTimeout(update, 1000);


        }


    }
}


function update() {
    if (card1Selected.src != card2Selected.src) {
        card1Selected.src = "assets/images/card-back.png";
        card2Selected.src = "assets/images/card-back.png";
        errors += 1;
        document.getElementById("errors").innerText = errors;
    } else {
        matches += 1;
        if (matches === cardList.length) {
            setTimeout(() => {
                alert("Congratulations! You have matched all the cards!");
            }, 500);
        }
    }

    card1Selected = null;
    card2Selected = null;
}