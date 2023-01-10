let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let isAlive = true
let hasBlackjack = false

if (sum < 21){
    console.log("Do you want to draw a new card? 😊")
}
else if(sum == 21){
    console.log("Wohoo! You'ev got Blackjack! 🥳")
    hasBlackjack = true
}
else{
    console.log("You are out of the game! 😭")
    isAlive = false
}