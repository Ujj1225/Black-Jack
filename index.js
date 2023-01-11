let sum = 0
let cards = []
let isAlive = false
let hasBlackjack = false
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// Now lets be more specific about selection of classes and id's 
// This is achieved using querySelector
// In query selector we must be specific about what we are selecting so a dot for class and an # for id is mandatory here 
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector(".cards-el")

// Creating an object called player containing methods like name and chips
let player = {
    pname: "Ujj",
    pchips: "145"
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.pname + ": $" + player.pchips
function getRandomCards()
{
    let num = Math.floor(Math.random() * 13) +1
    if (num ===1)
    {
        return 11
    }
    else if (num >10)
    {
        return 10
    }
    else{
        return num
    }
}
function startGame(){
    let firstCard = getRandomCards()
    let secondCard = getRandomCards()
    cards = [
        firstCard,
        secondCard
    ]
    isAlive = true
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    if (sum < 21){
        message = "Do you want to draw a new card?"
    }
    else if(sum == 21){
        message = "You'ev got Blackjack!"
        hasBlackjack = true
    }
    else{
        message = "You are out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
}


    function newcards(){
        if (isAlive && !hasBlackjack) {
          let card = getRandomCards();
          sum += card;
          cards.push(card);
          renderGame();
        }
    }

