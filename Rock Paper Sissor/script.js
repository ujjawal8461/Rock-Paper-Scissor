const titleBox = document.querySelector("#title-box");
const playBtn = document.querySelector("#play-btn");
const btnBox = document.querySelector("#btn-box");
const btns = document.querySelectorAll(".btn");
const gameBox = document.querySelector("#game-box");
const popUp = document.querySelector("#popup");
const overlay = document.querySelector("#overlay");
const titlePopup = document.querySelector("#title-popup");

const themeBox = document.querySelector("#theme-box");
const themeBtn = document.querySelector("#theme-btn");
const themeImg = document.querySelector("#theme-img");

const matchResult = document.querySelector("#match-result");

const playerScrDisplay = document.querySelector("#player-score-display");
const computerScrDisplay = document.querySelector("#computer-score-display");

const playerImg = document.getElementById("player-img");
const computerImg = document.getElementById("computer-img");





playBtn.addEventListener("click", function () {
  playBtn.style.display = "none";
  themeBtn.style.display = "none";
  btnBox.style.display = "flex";
  btnBox.style.animation = "fadeIn 1s ease ";
});

themeBtn.addEventListener("click", function () {
  themeBox.style.display = "block";
  titleBox.style.display = "none";
  playBtn.style.display = "none";
  themeBtn.style.display = "none";
});


// Function to give shake effect on image
function shake() {
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

// Funcion to see how many round user want to play
let noOfRound = 0;
function roundCount(num) {
  noOfRound = num;
  btnBox.style.display = "none";
  titleBox.style.display = "none";
  gameBox.style.display = "block";
}

// Function to take input from user in game (rock , paper , scissor)
let playerInp = 0;
function playerInput(num) {
  playerInp = num;
  playerImg.querySelector(
    "img"
  ).src = `Images/${arrayOfImages[currentIndex].rockImg}`;
  computerImg.querySelector(
    "img"
  ).src = `Images/${arrayOfImages[currentIndex].rockImg}`;
  mainFun();
}


// Function for computer input (rock , paper , scissor)
let computerInp = 0;
function computerInput() {
  computerInp = Math.floor(Math.random() * 3);
}


// Function for Match Score
let playerScr = 0;
let computerScr = 0;
function matchScore() {
  if (playerInp === computerInp) {
    matchResult.innerText = "Match Draw";
  } else if (
    (playerInp === 0 && computerInp === 2) ||
    (playerInp === 1 && computerInp === 0) ||
    (playerInp === 2 && computerInp === 1)
  ) {
    playerScr++;
    playerScrDisplay.innerText = playerScr;
    matchResult.innerText = "You Won";
  } else {
    computerScr++;
    computerScrDisplay.innerText = computerScr;
    matchResult.innerText = "You Lose";
  }
  popup();
}


// Function to change hand sign image when input changes (rock, paper, scissor )
function changeImg(inp, img) {
  if (inp === 0) {
    img.querySelector(
      "img"
    ).src = `Images/${arrayOfImages[currentIndex].rockImg}`;
  } else if (inp === 1) {
    img.querySelector(
      "img"
    ).src = `Images/${arrayOfImages[currentIndex].paperImg}`;
  } else if (inp === 2) {
    img.querySelector(
      "img"
    ).src = `Images/${arrayOfImages[currentIndex].scissorImg}`;
  }
}


// Function for popup after the game is finished
function popup() {
  if (playerScr === noOfRound || computerScr === noOfRound) {
    popUp.style.display = "block";
    overlay.style.opacity = 1;
    if (computerScr === noOfRound) {
      titlePopup.innerText = "You Lose";
    } else {
      titlePopup.innerText = "You Win";
    }
  }
}


// Function to replay the game
function replay() {
  popUp.style.display = "none";
  overlay.style.opacity = 0;
  playerScr = 0;
  computerScr = 0;
  matchResult.innerText = "";
  playerScrDisplay.innerText = 0;
  computerScrDisplay.innerText = 0;
}


// Function to go to home page
function goHome() {
  popUp.style.display = "none";
  overlay.style.opacity = 0;
  playerScr = 0;
  computerScr = 0;
  noOfRound = 0;
  playerScrDisplay.innerText = 0;
  computerScrDisplay.innerText = 0;
  matchResult.innerText = "";
  gameBox.style.display = "none";
  playBtn.style.display = "flex";
  themeBtn.style.display = "flex";
  titleBox.style.display = "block";
  themeBox.style.display = "none";
}


// main function in that all the function were called
function mainFun() {
  shake();
  computerInput();
  setTimeout(function () {
    changeImg(playerInp, playerImg);
    changeImg(computerInp, computerImg);
    matchScore();
  }, 1600);
}


// Function to change Hand Sign Image
const themeImgLeft = document.querySelector("#img-left");
const themeImgRight = document.querySelector("#img-right");
let currentIndex = 0;

themeImgLeft.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    themeImg.src = `Images/${arrayOfImages[currentIndex].rockImg}`;
    playerImg.querySelector(
      "img"
    ).src = `Images/${arrayOfImages[currentIndex].rockImg}`;
    computerImg.querySelector(
      "img"
    ).src = `Images/${arrayOfImages[currentIndex].rockImg}`;
  }
});

themeImgRight.addEventListener("click", function () {
  if (currentIndex < 2) {
    currentIndex++;
    themeImg.src = `Images/${arrayOfImages[currentIndex].rockImg}`;
    playerImg.querySelector(
      "img"
    ).src = `Images/${arrayOfImages[currentIndex].rockImg}`;
    computerImg.querySelector(
      "img"
    ).src = `Images/${arrayOfImages[currentIndex].rockImg}`;
  }
});


// Function to change background Image
const bgImgLeft = document.querySelector("#bg-left");
const bgImgRight = document.querySelector("#bg-right");
const mainCtn = document.querySelector("#main-container");
let currentIndexOfBg = 0;

bgImgLeft.addEventListener("click", function () {
  if (currentIndexOfBg > 0) {
    currentIndexOfBg--;
    mainCtn.style.backgroundImage = `url("Images/${arrayOfBg[currentIndexOfBg]}")`;
  }
});

bgImgRight.addEventListener("click", function () {
  if (currentIndexOfBg < 6) {
    currentIndexOfBg++;
    mainCtn.style.backgroundImage = `url("Images/${arrayOfBg[currentIndexOfBg]}")`;
  }
});


// Array of objecs to store diffrent hand sign images
const arrayOfImages = [
  {
    name: "Mickey Mouse",
    rockImg: "rock.png",
    paperImg: "paper.png",
    scissorImg: "scissor.png",
  },
  {
    name: "Zombie",
    rockImg: "Zombie-Rock.png",
    paperImg: "Zombie-Paper.png",
    scissorImg: "Zombie-Scissors.png",
  },
  {
    name: "Cat",
    rockImg: "Cat-Rock.png",
    paperImg: "Cat-Paper.png",
    scissorImg: "Cat-Scissor.png",
  },
];


// Array to store diffrent background images
const arrayOfBg = [
  "bg2.jpg",
  "bg1.jpg",
  "bg3.svg",
  "bg4.jpg",
  "bg5.jpg",
  "bg6.jpg",
  "bg7.jpg",
];

