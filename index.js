let scores,currentScore, activePlayer, gamePlaying
scores = [0,0]
currentScore = 0
activePlayer = 0
gamePlaying = true 

document.querySelector('.dice').style.display = 'none'
document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'

document.querySelector('.btn-roll').addEventListener('click', function(){
  const dice = Math.floor(Math.random() * 6) + 1
  const diceDOM = document.querySelector('.dice')
  diceDOM.style.display = 'block'
  diceDOM.src = `dice-${dice}.png`
  if(dice !== 1){
    currentScore = currentScore + dice
    document.getElementById(`current-${activePlayer}`).textContent = currentScore
  } else {
    nextPlayer()
  }

})

document.querySelector('.btn-hold').addEventListener('click',function(){
  scores[activePlayer] = scores[activePlayer] + currentScore
  document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer]
  if(scores[activePlayer] >= 10 ){
    document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!'
    document.querySelector('.dice').style.display = 'none'
    document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner')
    document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active')
  } else {
    nextPlayer()
  }
})

document.querySelector('.btn-new').addEventListener('click',init)

function init (){
  scores = [0,0]
  activePlayer = 0
  currentScore = 0
  gamePlaying = true
  document.querySelector('.dice').style.display = 'none'
  document.getElementById('.score-0').textContent = '0'
  document.getElementById('score-1').textContent = '0'
  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'
  document.getElementById('name-0').textContent = 'Player 1'
  document.getElementById('name-1').textContent = 'Player 2'
  document.querySelector('.player-0-panel').classList.remove('winner')
  document.querySelector('.player-1-panel').classList.remove('winner')
  // responsible for the red active dot and gray toggle screen 
  document.querySelector('.player-0-panel').classList.remove('active')
  document.querySelector('.player-1-panel').classList.remove('active')
  document.querySelector('.player-0-panel').classList.add('active')
}

function nextPlayer (){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
  currentScore = 0
  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'
  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')
  document.querySelector('.dice').style.display = 'none'
}