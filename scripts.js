let deck = ['aS','twoS','threeS','fourS','fiveS','sixS','sevenS','eightS','nineS','tenS','jS','qS','kS','aC','twoC','threeC','fourC','fiveC','sixC','sevenC','eightC','nineC','tenC','jC','qC','kC','aD','twoD','threeD','fourD','fiveD','sixD','sevenD','eightD','nineD','tenD','jD','qD','kD', 'aH','twoH','threeH','fourH','fiveH','sixH','sevenH','eightH','nineH','tenH','jH','qH','kH']
let deck2 = deck
let deck3 = deck
let deck4 = deck
let deck5 = deck
let deck6 = deck
let combinedDeck = [...deck, ...deck2, ...deck3, ...deck4, ...deck5, ...deck6]


let cardCount = 312;
let playerCard1;
let playerCard1Value;
let playerCard2;
let playerCard2Value;
let dealerFaceUp;
let dealerFaceDownValue;
let dealerFaceDown;
let dealerFaceUpValue;
let dealerHand;
let playerHand;
let dealerTotal;
let playerTotal;
let splitCount;
let gameOver = false;
const playerOptionsElem = document.getElementById('playerOptions')


function convertCard(card){
  console.log(card)
  if((card == 'a' && dealerTotal <= 10) || (card == 'a' && dealerTotal === undefined)) {
    let aceValue = 11
    return aceValue
  }
  if((card == 'a' && playerTotal <= 10) || (card == 'a' && playerTotal === undefined)){
    let aceValue = 11
    return aceValue
  }
  if((card == 'a' && playerTotal > 10) || (card == 'a' && playerTotal === undefined)){
    let aceValue = 1
    return aceValue
  }
  if((card == 'a' && dealerTotal > 10) || (card == 'a' && dealerTotal === undefined)){
    let aceValue = 1
    return aceValue
  }
  if(card === "j" || card === "q" || card === "k" || card === "ten"){
    card = 10
    return card
  }
  if(card === 'two'){
    card = 2
  }
  if(card === 'three'){
    card = 3
  }
  if(card === 'four'){
    card = 4
  }
  if(card === 'five'){
    card = 5
  }
  if(card === 'six'){
    card = 6
  }
  if(card === 'seven'){
    card = 7
  }
  if(card === 'eight'){
    card = 8
  }
  if(card === 'nine'){
    card = 9
  }
  return parseInt(card)
}

function getRandomCard(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

function getCard(){
  let randomNumber = getRandomCard(0,cardCount)
  cardCount--
  return combinedDeck.splice(randomNumber,1).join()
}


function openingDeal(){
  playerCard1 = getCard()
  dealerFaceDown = getCard()
  playerCard2 = getCard()
  dealerFaceUp = getCard()

  playerCard1Value = convertCard(playerCard1.slice(0, -1))
  console.log(playerCard1Value, "player card 1 value")
  playerTotal = playerCard1Value

  playerCard2Value = convertCard(playerCard2.slice(0, -1))
  playerTotal += playerCard2Value
  console.log(playerTotal, "player total")

  dealerFaceDownValue = convertCard(dealerFaceDown.slice(0, -1))
  dealerTotal = dealerFaceDownValue

  dealerFaceUpValue = convertCard(dealerFaceUp.slice(0, -1))
  dealerTotal += dealerFaceUpValue

    if(dealerFaceUp === 'aS' || dealerFaceUp === 'aC' || dealerFaceUp ==='aD' || dealerFaceUp === 'aH'){
    insurance();
    blackJackCheck();
  }
  blackJackCheck();

  return gameOver;
}



// Need logic to check if player card 1 === player card 2 to display split button
function split(){

}


// function playAround(){
//   openingDeal();
//   if(dealerFaceUp === 'As' || dealerFaceUp === 'Ac' || dealerFaceUp === 'Ad' || dealerFaceUp === 'Ah'){
//     //insurance();
//     blackJackCheck();
//   }
//   blackJackCheck();
//   //doubleCheck();
//   return gameOver;
// }

//openingDeal()
// console.log(playAround())
// console.log(playerCard1, "player card 1")
// console.log(playerCard2, "player card 2")
// console.log(dealerFaceDown, " dealer card face down")
// console.log(dealerFaceUp," dealer card face up" )
// console.log(deck3, "deck 3")
// console.log(deck4, "deck 4")
// console.log(deck5, "deck 5")
// console.log(deck6, "deck 6")