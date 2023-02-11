// Selectors
const result = document.querySelector('.result')
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const refresh = document.querySelector('.refresh')

// Event 

refresh.addEventListener('click', ()=> {
    let random1 = Math.floor( Math.random() *6 + 1)
    let random2 = Math.floor(Math.random()  *6 + 1)
    img1.src = `images/dice${random1}.png`
    img2.src = `images/dice${random2}.png`
  if(random1 > random2){
    result.textContent = 'Player1 WIN!!!'
  } else if(random1 == random2){
    result.textContent = 'Draw!'
  } else if(random1 < random2){
    result.textContent = 'Player 2 Win!!'
  }
    
})