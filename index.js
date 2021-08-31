/*------------Game Board-----------------*/
let topic1OneHundred = document.getElementById("topic1OneHundred");
let topic2OneHundred = document.getElementById("topic2OneHundred");
let topic3OneHundred = document.getElementById("topic3OneHundred");
let topic4OneHundred = document.getElementById("topic4OneHundred");
let topic5OneHundred = document.getElementById("topic5OneHundred");

let topic1TwoHundred = document.getElementById("topic1TwoHundred");
let topic2TwoHundred = document.getElementById("topic2TwoHundred");
let topic3TwoHundred = document.getElementById("topic3TwoHundred");
let topic4TwoHundred = document.getElementById("topic4TwoHundred");
let topic5TwoHundred = document.getElementById("topic5TwoHundred");

let topic1ThreeHundred = document.getElementById("topic1ThreeHundred");
let topic2ThreeHundred = document.getElementById("topic2ThreeHundred");
let topic3ThreeHundred = document.getElementById("topic3ThreeHundred");
let topic4ThreeHundred = document.getElementById("topic4ThreeHundred");
let topic5ThreeHundred = document.getElementById("topic5ThreeHundred");

let topic1FourHundred = document.getElementById("topic1FourHundred");
let topic2FourHundred = document.getElementById("topic2FourHundred");
let topic3FourHundred = document.getElementById("topic3FourHundred");
let topic4FourHundred = document.getElementById("topic4FourHundred");
let topic5FourHundred = document.getElementById("topic5FourHundred");

let topic1FiveHundred = document.getElementById("topic1FiveHundred");
let topic2FiveHundred = document.getElementById("topic2FiveHundred");
let topic3FiveHundred = document.getElementById("topic3FiveHundred");
let topic4FiveHundred = document.getElementById("topic4FiveHundred");
let topic5FiveHundred = document.getElementById("topic5FiveHundred");

/*----------------------Globals-----------------------*/

let onePlayerStart = document.getElementById("onePlayer");
let twoPlayerStart = document.getElementById("twoPlayer");
let questionTimer = document.getElementById("questionTimer");
let answer = document.getElementById("answerArea");

let nav = document.getElementById("nav");
let nav2 = document.getElementById("nav2");

let timer;
let gameTimer;

let playerOneScore = 0;
let playerTwoScore = 0;

let gamePlay = false;
let gameMode;

let clickedQuestions = [];
let allQuestions = [
  topic1OneHundred,
  topic2OneHundred,
  topic3OneHundred,
  topic4OneHundred,
  topic5OneHundred,
  topic1TwoHundred,
  topic2TwoHundred,
  topic3TwoHundred,
  topic4TwoHundred,
  topic5TwoHundred,
  topic1TwoHundred,
  topic2TwoHundred,
  topic3TwoHundred,
  topic4TwoHundred,
  topic5TwoHundred,
  topic1ThreeHundred,
  topic2ThreeHundred,
  topic3ThreeHundred,
  topic4ThreeHundred,
  topic5ThreeHundred,
  topic1FourHundred,
  topic2FourHundred,
  topic3FourHundred,
  topic4FourHundred,
  topic5FourHundred,
  topic1FiveHundred,
  topic2FiveHundred,
  topic3FiveHundred,
  topic4FiveHundred,
  topic5FiveHundred,
];

let oneHundredArray = [
  topic1OneHundred,
  topic2OneHundred,
  topic3OneHundred,
  topic4OneHundred,
  topic5OneHundred,
];
let twoHundredArray = [
  topic1TwoHundred,
  topic2TwoHundred,
  topic3TwoHundred,
  topic4TwoHundred,
  topic5TwoHundred,
];
let threeHundredArray = [
  topic1ThreeHundred,
  topic2ThreeHundred,
  topic3ThreeHundred,
  topic4ThreeHundred,
  topic5ThreeHundred,
];
let fourHundredArray = [
  topic1FourHundred,
  topic2FourHundred,
  topic3FourHundred,
  topic4FourHundred,
  topic5FourHundred,
];
let fiveHundredArray = [
  topic1FiveHundred,
  topic2FiveHundred,
  topic3FiveHundred,
  topic4FiveHundred,
  topic5FiveHundred,
];
/*-----------------------Functions-----------------------*/

function gameStart(event, allQuestions) {
  allQuestions.forEach(function (eachQuestion) {
    eachQuestion.addEventListener("click", isItWorking());
  });
  timer = setInterval(questionClock, 1000);
  if (event.target.id === "twoPlayer") {
    gameMode = "twoPlayer";
    gamePlay = true;
  } else {
    gameMode = "onePlayer";
    gamePlay = true;
  }
}

function isItWorking(event) {
  alert("It is!");
}

// function boardGuess(event) {
//     if (gameMode === "twoPlayer") {
//         if()
//     }
// }

function removeBoardGuess(event) {
  event.target.removeEventListener("click", boardGuess);
}

function questionClock() {
  seconds -= 1;
  if (seconds < 7) {
    questionTimer.textContent = "0:0" + seconds;
  } else {
    questionTimer.textContent = seconds;
  }
}

function stopQuestionClock() {
  clearInterval(timer);
}

/*--------------Game Play Event Listeners---------------*/
onePlayerStart.addEventListener("click", () => {
  window.location = "single.html";
  gameStart(allQuestions);
  questionClock();
});

twoPlayerStart.addEventListener("click", () => {
  window.location = "single.html";
  gameStart(allQuestions);
  questionClock();
});

nav.addEventListener("click", () => {
  window.location = "double.html";
});

nav2.addEventListener("click", () => {
  window.location = "final.html";
});
