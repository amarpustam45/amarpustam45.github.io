let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cardArr = [firstCard, secondCard]
let sum = 0
let hasBlackJack = false
let isAlive =  false
let message = ""
let intro = document.getElementById("intro")
let sumEl = document.getElementById("sum")  //get by id selector
let cards = document.getElementById("cards")  
let playerID = document.getElementById("playerName")
let newCardVar = 0
let newGame = false
let nameOfPlayer = ""
// let sumEl = document.querySelector("#sum") //query selector 

let player = {                  //example of an object
    Name: "Amar",
    Chips: 150
}


function enterName() {
    nameOfPlayer = document.getElementById("playerrName").value
    player.Name = nameOfPlayer
    document.getElementById("name-btn").disabled = true
    document.getElementById("playerrName").disabled = true
    playerID.textContent = player.Name + ": $" + player.Chips
}



function chips() {
    if (isAlive === false && hasBlackJack === false){
        player.Chips = player.Chips - 50
        console.log(player.Chips)
        playerID.textContent = player.Name + ": $" + player.Chips
    }
}


function startGame(){

    if (newGame === true){
        chips()
    }
    
    isAlive = true
    hasBlackJack = false
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cardArr = [firstCard, secondCard]
    sum = firstCard + secondCard
    newGame = true
    renderGame()
}

function renderGame() {

    sumEl.textContent = "Sum: " + sum
    cards.textContent = "Card: " 
    // cards.textContent = "Card: " + cardArr

    for (let i =0; i< cardArr.length; i++){
        cards.textContent += cardArr[i] + " "
    }

    if (sum < 21) {
        message = "Draw another card?"
        intro.innerText = message
    } else if (sum === 21) {
        message = "Blackjack!"
        intro.innerText = message
        hasBlackJack = true 
    } else {
        message = "You Lose!"
        intro.innerText = message
        isAlive =  false
    }  

    if (hasBlackJack === true){
        player.Chips = player.Chips + 50
        playerID.textContent = player.Name + ": $" + player.Chips
    }
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        intro.textContent = "Drawing new card from the deck!"
        newCardVar = getRandomCard()
        sum += newCardVar
        cardArr.push(newCardVar)    //add item to the end of an array
        renderGame()
    }
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13) + 1

    if (randomCard > 10){
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
    
}



