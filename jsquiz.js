setInterval(function () {
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var period = "AM";
if (hours >= 12) {
        period = "PM";
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
     var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;

    var clock = document.getElementById('clock');
    clock.innerText = clockTime;
}, 1000);

//.........................//
var questions = [{
    question: "HTML is what type of language ?",
    choices: ["Scripting Language","Markup Language","Programming Language","Network Protocol"],
    correctAnswer: 1
}, {
    question: "HTML uses______",
    choices: ["User defined tags","Pre-specified tags","Fixed tags defined by the language","Tags only for linking"],
    correctAnswer: 2
}, {
    question: "The year in which HTML was first proposed _______.",
    choices: ["1990","1980","2000","1995"],
    correctAnswer: 0
}, {
    question: "Fundamental HTML Block is known as ___________.",
    choices: ["HTML Body","HTML Tag","HTML Attribute","HTML Element"],
    correctAnswer: 1
}, {
    question: "Apart from <b> tag, what other tag makes text bold ?",
    choices: ["fat","strong","black","emp"],
    correctAnswer: 1
 }, {
    question: "The correct sequence of HTML tags for starting a webpage is ",
    choices: ["Head, Title, HTML, body","HTML, Body, Title, Head","HTML, Head, Title, Body","HTML, Head, Title, Body"],
    correctAnswer: 3

}, {
    question: "Which of the following element is responsible for making the text bold in HTML?",
    choices: ["pre","a","b","br"],
    correctAnswer: 2
}, {
    question: " Which of the following tag is used for inserting the largest heading in HTML?",
    choices: ["h3","h1","h5","h6"],
    correctAnswer: 1
}, {
    question: "Which of the following tag is used to insert a line-break in HTML?",
    choices: ["br","a","pre","b"],
    correctAnswer: 0

}, {
    question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
    choices: ["ul","ol","li","i"],
    correctAnswer: 0

}, {
    question: "Which character is used to represent the closing of a tag in HTML?",
    choices: ["\\" ,"!","/","."],
    correctAnswer: 2

	}, {
    question: "How to create an ordered list (a list with the list items in numbers) in HTML?",
    choices: ["ul","ol","li","i"],
    correctAnswer: 1
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {


    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();


    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});


function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;


    $(questionClass).text(question);


    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}
//........................//

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
