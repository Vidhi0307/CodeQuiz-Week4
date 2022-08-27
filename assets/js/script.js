var timerCount = 0;
var startButton =document.querySelector( ".start-button");
var quizQuestions= document.getElementById('quizQuestions')
var currentQuestion= document.getElementById('question')
var buttonOptions= document.getElementById('answers')
var timerElement =document.querySelector(".timer-count");
let shuffledQuestions, currentQuestionIndex;    


var myQuestions = [
    {
        question: "String Values must be enclosed within _____ when being assigned to variables.",
        answers : {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4:  "parenthesis"
    },correctAnswer: "commas"
    },{
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers : {
        1: "JavaScript",
        2: "terminal/bash",
        3: "for loops",
        4: "console log"
        },correctAnswer: "console log"
        },
    {
        question: "Commonly used datatypes do not include:",
        answers : {
            1:"strings",
            2: "booleans",
            3: "alerts",
            4:  "numbers"
    },correctAnswer: "alerts"
    },{
        question: "The condition in an if/else statement is enclosed within ________",
        answers : {
            1: "quotes",
            2: "curly brackets",
            3: "parenthesis",
            4: "square brackets"
    },correctAnswer: "parenthesis"
    },{
        question: "Arrays in Javascript can be used to store ________",
        answers : {
            1: "numbers and strings",
            2: "other arrays",
            3: "",
            4: "all of the above"
    },correctAnswer: "all of the above"
    },]


//strtGame function is calles when the start quiz button is clicked
function startQuiz(){
    timerCount= 75;
      //hiding the start button
      document.getElementById('container').style.display = "none";

      // displaying the quiz question window
      quizQuestions.style.display = "block";
    
    shuffledQuestions = myQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0

    renderQuestion();
    
    //startTimer();

}


function renderQuestion() {
    timerElement.textContent=timerCount;
  

    var currentAnswerOptions = shuffledQuestions[currentQuestionIndex].answers;
   
 for (const property in currentAnswerOptions) {
    
    var answerButton = document.createElement("button");
    var option= currentAnswerOptions[property];
    var selectedQuestion = shuffledQuestions[currentQuestionIndex];
    answerButton.textContent = option;
    currentQuestion.textContent =  selectedQuestion.question;
    buttonOptions.appendChild(answerButton);

    
    //answerButton.addEventListener("click",isCorrect);
     answerButton.addEventListener("click", function() {
        isCorrect(selectedQuestion,answerButton);
      });
} 

  }


  function isCorrect(arg1,arg2) {
     var result = document.createElement("div");
     result.innerHTML="";
    console.log(arg1.correctAnswer);
    console.log(arg2.textContent);
    if (arg2.textContent === arg1.correctAnswer)
    {
        
        result.textContent="Right";
    }
    else
    {
        result.textContent="Wrong";
        timerCount = timerCount-15;
    }

    quizQuestions.appendChild(result);
    currentQuestionIndex++;
    console.log(currentQuestionIndex);
    buttonOptions.innerHTML = "";
   renderQuestion();




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
