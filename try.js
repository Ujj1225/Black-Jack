// Array of featuredPosts  
let featuredPosts = [
    "Netflix clone",
    "Project page",
    "Relaunching portfolio"
]
console.log(featuredPosts.length)
// Array of my education 
let educationStatus = [
    "SEE from Nightingale",
    "+2 from Trinity",
    "Bachleors from Pulchowk"
]
console.log(educationStatus[1])

// Arrays of multiple data types
let aboutMe = [
    "Ujjwal Jha",
    21,
    true
]
// Something after dot is a method of object
console.log(aboutMe)
aboutMe.push("versatile")
console.log(aboutMe)

let message =
[
    "Hello, how are you?",
    "I am fine, thank you",
    "khana khakar jana"
]
console.log(message)
message.push("welcome to ujj")
console.log(message)
message.pop()
message.pop() 
console.log(message)

// for loops in JS
// Step size indicated after each loop its going to be altered or changed according to size
// Creating a loop to count from 10 to 100 in steps of 10
for (let count = 10; count<= 100; count += 10)
{
    console.log(count)
}

// Combining for loops with arrays  
for (let i =0; i<message.length; i++){
    console.log(message[i])
}

let player1time = 102
let player2time = 107 
function totalPlayerTime()
{
    return player1time + player2time
}
let total = totalPlayerTime()
console.log(total)

let num = Math.floor(Math.random() * 6)+1
// Gives me a number from 0 to 5
function getRandom()
{
    return num 
}
console.log(getRandom())

let hasSolvedChallenge = false
let hasHintsLeft = false
if(hasSolvedChallenge === false && hasHintsLeft === false)
{
    showsolution()
}
function showsolution()
{
    console.log("Showing solution...")
}
let likesDocumenataries = true
let likesStartups = false
if (likesDocumenataries || likesStartups)
{
    recommendMovie()
}
function recommendMovie()
{
    console.log("Hey, check out this new film which we think you will like!")
}

castle = {
    isAvailable: true,
    place: "Nepal",
    number: 3,
    tags: ["hot bath", "nature's view"]
}
    console.log(castle.place) //Nepal
    console.log(castle.isAvailable) //true
    console.log(castle.number)  //3
    console.log(castle.tags)  //hot bath, nature's view


// A function works as if there is an object followed by a method 
// object.method()
