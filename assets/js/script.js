// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

//Getting Elements/IDS/CLASSES from HTML
var startButton = document.getElementById("startbutton");
var secondsLeftEl = document.getElementById("secondsLeft");
var containerEl = document.getElementById("container");
var questionsEl = document.getElementById("questions");
var titleEl = document.getElementById("title");
var optionsEl = document.getElementById("options");
var messageEl = document.getElementById("message");

// array of objects
var questions = [
  {
    questionText: "Commonly used data types DO NOT include ____.",
    answerChoices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    questionText:
      "The condition in an if/else statement is enclosed within ____.",
    answerChoices: [
      "quotes",
      "curly-brackets",
      "parenthesis",
      "square-brackets",
    ],
    correctAnswer: "parenthesis",
  },
  {
    questionText: "Arrays in Javascript can be used to store ___.",
    answerChoices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: "numbers and strings",
  },
  {
    questionText:
      "String values must be enclosed within ___ when being assigned to variables.",
    answerChoices: ["commas", "curly brackets", "quotes", "all of the above"],
    correctAnswer: "quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerChoices: ["javascript", "terminal/bash", "for loops", "console log"],
    correctAnswer: "console log",
  },
];

var secondsLeft = 75;
// global question number variable
var questionNumber = 0;

function start() {
  //start timer
  timerInterval = setInterval(function () {
    secondsLeft--;
    secondsLeftEl.textContent = secondsLeft + " seconds left";
    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
  }, 1000);
  //make container disappear
  containerEl.classList.add("hidden");
  // make question container appear
  questionsEl.classList.remove("hidden");
  // call question function
  getQuestion();
}

function getQuestion() {
  //display question title
  titleEl.textContent = questions[questionNumber].questionText;
  // create the buttons for the optionsEl
  for (let index = 1; index <= 4; index++) {
    var button = document.querySelector("#answer" + index);
    // forloop getting reference for each answer choice button and setting text content using question bank
    button.textContent = questions[questionNumber].answerChoices[index - 1];
    //going through the arrays in the answer choices
  }
}

// determine whether right or wrong
optionsEl.addEventListener("click", handleOptionsClick);
//optionsel is container and when clicking we try to figure out which button is clicked and try to see if its the correct answer
function handleOptionsClick(event) {
  var answerChoice = event.target.textContent;
  var isCorrect = isChoiceCorrect(answerChoice);
  questionNumber++
  //loads next question or goes to high score page
  if (questionNumber < questions.length) {
    getQuestion()
  }
  else {
    location.replace('highscore.html')
  }
}