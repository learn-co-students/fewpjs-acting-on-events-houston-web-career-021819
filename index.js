// Your code here
let dodger = document.querySelector('#dodger');

function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px", "");
    let left =parseInt(leftNumbers,10);
    if(left > 0){
    dodger.style.left = `${left-1}px`;
   }
}

function moveDodgerRight(){
    let leftNumbers = dodger.style.left.replace("px", "");
    let left =parseInt(leftNumbers,10);
    if(left > 0){
    dodger.style.left = `${left+1}px`;
   }
}

dodger.addEventListener('keydown', function(e){
    if(e.key === "ArrowLeft"){
      moveDodgerLeft();
    }
})

dodger.addEventListener('keydown', function(e){
    if(e.key === "ArrowRight"){
      moveDodgerRight();
    }
})



