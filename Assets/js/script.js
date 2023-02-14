// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question


// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

//index that starts at 0 goes up to the next question
//one variable determined 

// DEPENDENCIES (DOM ELEMENT)
// Selects element by class


// Selects element by id
var startButton = document.getElementById('start-quiz')
var secondsLeftEl = document.getElementById('secondsLeft')
var containerEl = document.getElementById('container')
var questionsEl = document.getElementById('questions')
var titleEl = document.getElementById('title')
var optionsEl = document.getElementById('options')
var timerInterval;

// global question number variable
var questionNumber = 0;
// array of objects
var questions = [
  {
    questionText: "Commonly used data types DO NOT include ____.",
    answerChoices: [
      "strings",
      "booleans",
      "alerts",
      "numbers"
    ],
    correctAnswer: "alerts"
  },
  {
    questionText: "The condition in an if/else statement is enclosed within ____.",
    answerChoices: [
      "quotes",
      "curly-brackets",
      "parenthesis",
      "square-brackets"
    ],
    correctAnswer: "parenthesis"
  },
  {
    questionText: "Arrays in Javascript can be used to store ___.",
    answerChoices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    correctAnswer: "numbers and strings"
  },
  {
    questionText: "String values must be enclosed within ___ when being assigned to variables.",
    answerChoices: [
      "commas",
      "curly brackets",
      "quotes",
      "all of the above"
    ],
    correctAnswer: "quotes"
  },
  {
    questionText: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerChoices: [
      "javascript",
      "terminal/bash",
      "for loops",
      "console log"
    ],
    correctAnswer: "console log"
  }
  
]
var secondsLeft = 75;

function start(){
  //start timer
  timerInterval = setInterval(function () {
              secondsLeft--;
              secondsLeftEl.textContent = secondsLeft + " seconds left";
          
              if(secondsLeft === 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
             
              }
          
            }, 1000);

  //make container disappear
containerEl.classList.add('hidden')
  // make question container appear
questionsEl.classList.remove('hidden')
  // call question function
  getQuestion()
};

function getQuestion(){
//display question title
titleEl.textContent = questions[0].questionText
// create the buttons for the optionsEl


}

startButton.addEventListener('click',start)

// //DATA
// //LOOK AT LESSON 5


// var wrongAnswer= -15

// //FUNCTIONS
// // WHEN I answer a question incorrectly
// // THEN time is subtracted from the clock
// // Deduct 15 seconds when question answered wrong
// for (var i = 0; i < secondsLeft.length; i--) {
//     ();
//    }

// var x = setInterval(function() {
// }

//     function setTime() {
//         // Sets interval in variable
//         var timerInterval = setInterval(function () {
//           secondsLeft--;
//           secondsLeftEl.textContent = secondsLeft + " seconds left";
      
//           if(secondsLeft === 0) {
//             // Stops execution of action at set interval
//             clearInterval(timerInterval);
//             // Calls function to create and append image
//             sendMessage();
//           }
      
//         }, 1000);
//       }
//         //function load question function, that changes question text and answer choices  

// // Function to create and end quiz
// function sendMessage() {
  
//   }
  
//   setTime();
// // INITIALIZATION

// variable.addEventListener("click", function() {
//     // If user clicks right answer
//     if (var === "right answer") {
//       var = "CORRECT!";
//     }
//     // If user clicks wrong answer 
//     else {
//       var = "INCORRECT!";
//     }
//   });
  
// // WHEN the game is over
// // THEN I can save my initials and score
  
// var tagName = prompt("Please enter initals", "enter tag");

// if (tagName !== "//INITIALS") {
//     alert("please enter valid initals");
//   } else {
//     // Creates element based on tag entered by user
//     var tag = document.createElement(tagName);
  
//     // Adds text content to created tag
//     tag.textContent = "This was made via prompts. It's a " + tagName + ".";
    
//     // Appends tag as child of document body
//     document.body.appendChild(tag);
//   }

//   //ADD LOCAL STORAGE
//    // TODO: Create user object from submission
//    var userInitial = {
//     Initials: firstNameInput.value,
//     Score: score.value
//   };

//   // TODO: Set new submission to local storage 
//   localStorage.setItem('userInital', JSON.stringify(userInput));
//   renderMessage();
  
// });