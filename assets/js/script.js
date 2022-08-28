var timerCount = 0;
let quizTimer;
var startButton =document.querySelector( ".start-button");
var quizQuestions= document.getElementById('quizQuestions')
var currentQuestion= document.getElementById('question')
var buttonOptions= document.getElementById('answers')
var timerElement =document.querySelector(".timer-count");
let shuffledQuestions, currentQuestionIndex;   
var highscore=0 ; var initials='';
var result = document.createElement("div"); 
var playersInfo =[];



//created a  questions array
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


//startGame function is calles when the start quiz button is clicked
function startQuiz(event){
    event.preventDefault();
    timerCount= 75;
    currentQuestionIndex = 0

  //hiding the start button
     document.getElementById('container').style.display = "none";

    // displaying the quiz question window

    quizQuestions.style.display = "block";    
    shuffledQuestions = myQuestions.sort(() => Math.random() - .5)
    
    startTimer();
    renderQuestion();

  }


  //Created a timer function
 function startTimer(){
   var quizTimer = setInterval(function(){
        timerCount--;
        timerElement.textContent= timerCount;
      if(timerCount < 0){
        timerCount = 0;
      //  endQuiz();
      }
        
        
    }, 1000)

 }

function renderQuestion() {
  console.log(currentQuestionIndex);
  console.log(myQuestions.length);
if (currentQuestionIndex < myQuestions.length)
{
    var currentAnswerOptions = shuffledQuestions[currentQuestionIndex].answers;
   
 for (const property in currentAnswerOptions) {
    
    var answerButton = document.createElement("button");
    var option= currentAnswerOptions[property];
    var selectedQuestion = shuffledQuestions[currentQuestionIndex];
    answerButton.textContent = option;
    answerButton.classList.add("answerButtons");
    currentQuestion.textContent =  selectedQuestion.question;
    buttonOptions.appendChild(answerButton);
    buttonOptions.classList.add("buttonOptions");


    answerButton.addEventListener("click", function() {
        isCorrect(selectedQuestion,answerButton);
      });
} 

}
else {
    clearInterval(quizTimer);
    currentQuestion.textContent =  "All Done !!";
   // result.classList.add("answers");
    result.innerHTML= " Your Final score is <b>" + timerCount  +   " <b><br/><br/><h2> Enter Your Initials<h2>" ;
    initials = document.createElement("input");
    initials.setAttribute("type", "text");
    initials.setAttribute("id", "Initials");
    
   
    var submit = document.createElement("button");
    submit.textContent = "Submit"
    
   
  
    
    submit.addEventListener("click",submitHighscore );

    result.appendChild(initials); result.appendChild(submit);

}

  }

  
function submitHighscore() {

    var user = document.getElementById("Initials");
    
      var player = {
        name: user.value,
        highscore: timerCount
       };
       console.log (player);
   
       playersInfo.push(player);
    
      console.log (playersInfo);

      localStorage.setItem("playersInfo", JSON.stringify(playersInfo));
      window.location.href = "highscore.html";

}

  function isCorrect(arg1,arg2) {
     
     result.textContent=""
     result.innerHTML="";
   
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
   
    buttonOptions.innerHTML = "";
    renderQuestion();




  }


//attach eventlistener to statrt button to call startQuiz function on click
startButton.addEventListener("click",startQuiz);

 

    