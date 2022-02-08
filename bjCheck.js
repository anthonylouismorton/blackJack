'use strict'

function blackJackCheck(){
  if(dealerTotal === 21 && playerTotal < 21){
    console.log('game over')
    return gameOver = true;
  }
  else if(dealerTotal === 21 && playerTotal === 21){
    return gameOver = true
    console.log('push')
  }
  else if (playerTotal === 21){
    console.log('You win!')
    return gameOver = true
  }
  else{
    console.log(gameOver)
    return gameOver
  }
}