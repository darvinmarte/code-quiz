// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question


// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over



// DEPENDENCIES (DOM ELEMENT)
// Selects element by class
var timeEl = document.querySelector(".x");

// Selects element by id
var mainEl = document.getElementById("start-quiz");

//DATA
//LOOK AT LESSON 5
var strings = '1strings'
var booleans = '1booleans'
var alerts = '1alerts'
var numbers = '1numbers'
var quotes = '1quotes'
var curlybrackets = 'curly-brackets'
var parenthesis = 'parenthesis'
var squarebrackets = 'sqaure-brackets'
var comas = 'comas'
var javascript = 'javascript'
var terminalbash = 'terminal-bash'
var forloops = 'for-loops'
var counsellog = 'console-log'

var secondsLeft = 75;

//FUNCTIONS
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
for (var i = 0; i < secondsLeft.length; i--) {
    ();
   }

var x = setInterval(function() {
}

    function setTime() {
        // Sets interval in variable
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeEl.textContent = secondsLeft + "Times up!";
      
          if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
          }
      
        }, 1000);

// Function to create and end quiz
function sendMessage() {
  
  }
  
  setTime();
// INITIALIZATION

variable.addEventListener("click", function() {
    // If user clicks right answer
    if (var === "right answer") {
      var = "CORRECT!";
    }
    // If user clicks wrong answer 
    else {
      var = "INCORRECT!";
    }
  });
  
// WHEN the game is over
// THEN I can save my initials and score
  
var tagName = prompt("Please enter initals", "enter tag");

if (tagName !== "//INITIALS") {
    alert("please enter valid initals");
  } else {
    // Creates element based on tag entered by user
    var tag = document.createElement(tagName);
  
    // Adds text content to created tag
    tag.textContent = "This was made via prompts. It's a " + tagName + ".";
    
    // Appends tag as child of document body
    document.body.appendChild(tag);
  }