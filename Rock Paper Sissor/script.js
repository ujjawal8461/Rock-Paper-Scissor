const titleBox=document.querySelector("#title-box");
const playBtn=document.querySelector("#play-btn");
const btnBox=document.querySelector("#btn-box");
const btns=document.querySelectorAll(".btn");
const gameBox=document.querySelector("#game-box");

const matchResult=document.querySelector("#match-result");

const playerScrDisplay=document.querySelector("#player-score-display");
const computerScrDisplay=document.querySelector("#computer-score-display");


const playerImg=document.getElementById("player-img");
const computerImg=document.getElementById("computer-img");

for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", function(){
        btnBox.style.display="none";
        titleBox.style.display="none";  
        gameBox.style.display="block"
    })
}

playBtn.addEventListener("click", function(){
    playBtn.style.display="none";
    btnBox.style.display="flex";
    btnBox.style.animation = "fadeIn 1s ease ";
})



function shake(){
    gsap.from(playerImg, {
        y: -80,
        duration: 0.3,
        repeat: 4,
        yoyo: true,
        delay: 0.1,
        ease: "power1.inOut",
    });

    gsap.from(computerImg, {
        y: -80,
        duration: 0.3,
        repeat: 4,
        yoyo: true,
        delay: 0.1,
        ease: "power1.inOut",
    });
}


let playerInp;
function playerInput(num){
    playerInp=num;
    playerImg.querySelector("img").src="Images/rock.png";
    computerImg.querySelector("img").src="Images/rock.png";
    shake();
    computerInput();
    setTimeout(function(){
        changeImg(playerInp, playerImg);
        changeImg(computerInp, computerImg);
        matchScore();
    }, 1600);
}

let computerInp;
function computerInput(){
    computerInp=Math.floor(Math.random()*3);
}

let playerScr=0;
let computerScr=0;
function matchScore(){
    if(playerInp===computerInp){
        matchResult.innerText="Match Draw"
    }
    else if(playerInp===0&&computerInp===2 ||  playerInp===1&&computerInp===0  || playerInp===2&&computerInp===1){
        playerScr++;
        playerScrDisplay.innerText=playerScr;
        matchResult.innerText="You Won"
    }
    else{
        computerScr++;
        computerScrDisplay.innerText=computerScr;
        matchResult.innerText="You Loss"
    }
}


function changeImg(inp, img){
    if(inp===0){
        img.querySelector("img").src="Images/rock.png"; 
    }
    else if(inp===1){
        img.querySelector("img").src="Images/paper.png"; 
    }
    else if(inp===2){
        img.querySelector("img").src="Images/scissor.png";
    }
};
