const insuranceElem = document.getElementById('insurance')
const insuranceYesElem = document.getElementById('insuranceYes')
const insuranceNoElem = document.getElementById('insuranceNo')


insuranceYesElem.addEventListener('click', insuranceHandler)
insuranceNoElem.addEventListener('click', insuranceHandler)

function insurance(){
  insuranceElem.classList.toggle('hidden')
}

function insuranceHandler(){
  console.log(this.id)
  if(this.id === 'insuranceYes'){
    console.log('in the if')
  let insuranceBet = Math.floor(bet/2)
  sideBet = insuranceBet
  betElem.innerHTML = `Bet: $${bet}`
    _createElement('p', 'betDiv', `Insurance: $${sideBet}`)
  }
  insuranceElem.classList.toggle('hidden')
}
