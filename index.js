const dodger = document.querySelector('#dodger')
const left = parseInt(dodger.style.left)

function moveDodgerLeft(){
  dodger.style.left = `${left - 100}px`
}

function moveDodgerRight(){
  dodger.style.left = `${left + 100}px`
}
