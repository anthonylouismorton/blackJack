'use strict'

const playerCardsElem = document.getElementById('playerCards')
const hitElem = document.getElementById('hit');
hitElem.addEventListener('click', hitHandler)

function hitHandler(){
  let newCard = getCard()
  console.log(newCard)
  let newCardValue = convertCard(newCard.slice(0, -1))
  console.log(newCardValue)
  playerTotal += newCardValue
  let newDisplayCard = document.createElement('img')
  newDisplayCard.src = getDisplayCard(newCard)
  playerCardsElem.appendChild(newDisplayCard)
  bustCheck();
  console.log(playerTotal)
}