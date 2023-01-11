let firstCard = 10
let secondCard = 10
let cards= [
    firstCard,
    secondCard
]
let sum = firstCard + secondCard
let isAlive = true
let hasBlackjack = false
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// Now lets be more specific about selection of classes and id's 
// This is achieved using querySelector
// In query selector we must be specific about what we are selecting so a dot for class and an # for id is mandatory here 
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector(".cards-el")

function startGame(){
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
    let card = 4;
    sum += card;
    cards.push(card)
    console.log(cards)
    renderGame();
    console.log("Drawing new cards!")
}
    