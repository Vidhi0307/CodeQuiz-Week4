var timerCount;
var startButton =document.querySelector( ".start-button");
var quizContainer=document.querySelector("#quiz");
var timerElement =document.querySelector(".timer-count");

var myQuestions = [
    {
        question: "String Values must be enclosed within _____ when being assigned to variables.",
        answers : {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4:  "parenthesis"
    },correctAnswer: "1"
    },{
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers : {
        1: "JavaScript",
        2: "terminal/bash",
        3: "for loops",
        4: "console log"
        },correctAnswer: "4"
        },
    {
        question: "Commonly used datatypes do not include:",
        answers : {
            1:"strings",
            2: "booleans",
            3: "alerts",
            4:  "numbers"
    },correctAnswer: "3"
    },{
        question: "The condition in an if/else statement is enclosed within ________",
        answers : {
            1: "quotes",
            2: "curly brackets",
            3: "parenthesis",
            4: "square brackets"
    },correctAnswer: "3"
    },{
        question: "Arrays in Javascript can be used to store ________",
        answers : {
            1: "numbers and strings",
            2: "other arrays",
            3: "",
            4: "all of the above"
    },correctAnswer: "4"
    },]


//strtGame function is calles when the start quiz button is clicked
function startQuiz(){
    timerCount= 75;
    timerElement.textContent=timerCount;
    console.log(myQuestions);
     renderQuiz();
    //startTimer();

}


function renderQuiz() {
    console.log(document.getElementById("quizQuestions"));

    document.getElementById('container').style.display = "none";
    document.getElementById('quizQuestions').style.display = "block";
    

    var Test='test';
   // startButton.hidden = true;
   // quizContainer.innerHTML= '<p>Test</p>';
   

}


//The set Timer will start and stops the timer and triggers score()

/* function startTimer() {
    timer =setInterval(function() {
    timerCount--;
    timerElement.textcontent = timerCount;
    })
} */




//attach eventlistener to statrt button to call startQuiz function on click
startButton.addEventListener("click",startQuiz);
/* 
init(); */