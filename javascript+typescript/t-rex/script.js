const dino = document.querySelector("#dino");
const rock = document.querySelector("#rock");
const score = document.querySelector("#score");
const again = document.querySelector("#again");
let isAlive = true;

function jump() {
  if(isAlive){
    if (!dino.classList.contains('jump-animation')) {
      dino.classList.add("jump-animation");
    }
  
    setTimeout(() =>
      dino.classList.remove("jump-animation"), 500);
  }
}

function checkDead(){
  if (isAlive) {
    const dinoTopPosition = parseInt(window.getComputedStyle(dino)
      .getPropertyValue('top'));
    const rockLeftPosition = parseInt(window.getComputedStyle(rock)
      .getPropertyValue('left'));
    score.innerText++;
  
  
    if (rockLeftPosition < 50 && rockLeftPosition > 0 && dinoTopPosition > 150) {
      isAlive = false;
      again.style.display = 'block';
      rock.classList.remove('animated-rock');
      rock.style.left = `${rockLeftPosition}px`;
      dino.style.top = `${dinoTopPosition}px`
    }
  }
}

function tryAgain() {
  location.reload()
}

again.addEventListener('click',tryAgain)
document.addEventListener('keypress',jump)
setInterval(checkDead, 50);