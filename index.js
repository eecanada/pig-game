let scores,currentScore, activePlayer
scores = [0,0]
currentScore = 0
activePlayer = 0

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

function nextPlayer (){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
  currentScore = 0
  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'
  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')
  document.querySelector('.dice').style.display = 'none'
}