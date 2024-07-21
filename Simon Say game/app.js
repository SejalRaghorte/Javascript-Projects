let gameSeq = [];
let userseq = [];

let started = false;
let level = 0;
let highestScore = 0;

let btns =["yellow","red","purple","green"];

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;
    }
    levelUp();
});

function levelUp(){
   userseq = [];
   level++;

   let h2 = document.querySelector("h2");
   h2.innerText = `Level ${level}`;

   let randomIdx = Math.floor(Math.random() * 3);
   let randomColor = btns[randomIdx];
   let randombtn = document.querySelector(`.${randomColor}`);
   gameSeq.push(randomColor);
   console.log(gameSeq);
   gameFlash(randombtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

function checkans(idx){
    // let idx = level-1;
    let h2 = document.querySelector("h2");

    if(userseq[idx] === gameSeq[idx]){
        if(userseq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        if(level > highestScore){
             highestScore = level;
        }
        h2.innerHTML = `Game Over! Your score was <b>${level} .</b><br>Highest Score: <b>${highestScore}</b>. Press any key to start !`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnpress(){
    // console.log(this);
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userseq.push(userColor);
    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}


function reset(){
    started = false;
    gameSeq = [];
    userseq = [];
    level = 0;
}