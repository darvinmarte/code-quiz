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
var containerEl = document.getElementById("container");
var questionsEl = document.getElementById("questions");
var titleEl = document.getElementById("title");
var optionsEl = document.getElementById("options");
var messageEl = document.getElementById('message')

// array of objects
var questions = [
{
    questionText: "Commonly used data types DO NOT include ____.",
    answerChoices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
},
{
    questionText:"The condition in an if/else statement is enclosed within ____.",
    answerChoices: ["quotes","curly-brackets","parenthesis","square-brackets",],
    correctAnswer: "parenthesis",
},
{
    questionText: "Arrays in Javascript can be used to store ___.",
    answerChoices: ["numbers and strings","other arrays","booleans","all of the above",],
    correctAnswer: "numbers and strings",
},
{
questionText:"String values must be enclosed within ___ when being assigned to variables.",
    answerChoices: ["commas", "curly brackets", "quotes", "all of the above"],
    correctAnswer: "quotes",
},
{
questionText:"A very useful tool used during development and debugging for printing content to the debugger is:",
    answerChoices: ["javascript", "terminal/bash", "for loops", "console log"],
    correctAnswer: "console log",
},
];

