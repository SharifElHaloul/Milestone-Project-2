// variable storage section

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


//Function list
window.onload = function () {
    shuffleCards();
    startGame();
}


// Function to shuffle the cards up
function shuffleCards() {
    cardSet = cardList.concat(cardList);
    console.log(cardSet);
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length);
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
}

//Function to start the game
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

            let back = document.createElement("img");
            back.classList.add("back");
            back.src = "assets/images/card-back.png";  

            let front = document.createElement("img");
            front.classList.add("front");
            front.src = cardImg + ".png";

              
            card.append(front);
            card.append(back);
            
            
            document.getElementById("board").append(card);

        }
        board.push(row);
    }

    setTimeout(() => {     // Shows then hides the cards for 3 seconds
        hideCards();
    }, 3000);
}

//Function for hiding the cards
function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.classList.add("spinny");
        }
    }
}



//Function to be able to select a card
function selectCard() {
    if (card1Selected && card2Selected) return;


    if (!this.classList.contains("flipped")) {
        this.classList.add("flipped");

        if (!card1Selected) {
            card1Selected = this;

        } else if (!card2Selected && this != card1Selected) {
            card2Selected = this;


            setTimeout(update, 1000);
        }
    }
}

//Function to update the error score based on a correct or incorrrect match
function update() {
    if (card1Selected.querySelector(".front").src != card2Selected.querySelector(".front").src) {
        setTimeout(() => {
            card1Selected.classList.remove("flipped");
            card2Selected.classList.remove("flipped");
            card1Selected = null;
            card2Selected = null;
            
        }, 1000);
        errors += 1;
        document.getElementById("errors").innerText = errors;

    } else {
        matches += 1;
        card1Selected = null;
        card2Selected = null;
        if (matches === cardList.length) {
            setTimeout(() => {
                alert("Congratulations! You've matched all the cards!")
            }, 500);
        }
       
    }
}