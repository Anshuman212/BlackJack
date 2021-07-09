//1. create two variables firstCard and secondCard
//set their values to a random number between 2-11
 //2. create a variable sum and set the sum of the two cards 
//3. Have a variable that tells whether or not a player has got blackjack
//boolean challenge-------------------
// console.log(4 === 3) // false
// console.log(5 > 2) // true
// console.log(12 > 12) // false
// console.log(3 < 8) // true
// console.log(3 >= 3) // true
// console.log(11 <= 11) // true
// console.log(3 <= 2) // false
//array can have anmy type of data type mixture that is why it is called composite or mixeed data type
  //to add an element in an array we use push() method variable.push()
// let messages = [
//   "hey , ho you doin?",
//   "I'm great thanks!!",
//   "All good been working on portfolio"
// ]
// let newMessage ="same here"
// messages.push(newMessage) to add amsg at the end
// console.log(messages)
// messages.pop(newMessage)to delete the end pushed message
// console.log(messages)




//----------------------------------------------------
//creating an object
//stored data in depth -composite/ complex data type
let player = {
  //variable declaration in objects are different from 
  //normal...don't use let operator, instead of assignment operator use colon:
  //seperate the elements using ',' except the last ones
  name: "Gambler",
   chips: 145
}

let firstCard
let secondCard
 let cards = [] //array - ordered list of cards
 let sum
 let hasBlackJack = false
 let isAlive = false
 let message =""
 let messageEl = document.getElementById("message-el")
 //let sumEl = document.getElementById("sum-el")
 let sumEl = document.querySelector("#sum-el")
 let cardsEl =document.querySelector("#cards-el")

//to access the elments of object use objectname.elementname
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


 function startGame(){
    isAlive =true;
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
   renderGame()
 }
 function getRandomCard(){
 let randomNum= Math.floor(Math.random()*13) + 1 //random() generates between 0.000 - 0.99999   
 if(randomNum ===1)
    randomNum =11
    else if(randomNum > 10)
    randomNum=10 
 return randomNum
 }
 function renderGame(){
   sumEl.textContent  = "Sum: "+ sum
   cardsEl.textContent = "Cards: "
   for(let i=0;i<cards.length;i++){
     cardsEl.textContent+=cards[i]+" "
   }
 if(sum <= 20){
   message = "Do you want a new card? :)"
  }
 else if(sum === 21){
   message = "Wohoo! You've got BlackJack!!!! ;) :)"
   hasBlackJack = true
  }
 else{
   message = "You're out of the game :-( :-("
    isAlive = false
  }
  messageEl.textContent = message
}
function newCard(){
  if(isAlive ===true && hasBlackJack ===false){
   console.log("Drawing a new card from the deck")
  let card = getRandomCard()
  sum += card
  cards.push(card)
  renderGame() 
 }
 else{
   console.log("IT'S OVER!!")
 }
}

