'use strict'

function bustCheck(){
  if(playerTotal > 21){
    gameOver = true;
  }
  console.log('you busted')
  console.log(gameOver)
}