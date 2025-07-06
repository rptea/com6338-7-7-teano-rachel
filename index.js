// Your code here
// Must: create a variable named questionsArr (will contain all of the quiz data for the app) and must be an array of objects, should contain at least FIVE question objects, each set of possible choices in options should have at least two choices.

var questionsArr = [
    {
        question: 'What is raced in Formula 1 (F1)?',
        answer: 'Cars',
        options: [
            'Drones',
            'Planes',
            'Cars',
            'Boats',
        ]
    },
    {
        question: 'What energy drink company owns an F1 team?',
        answer: 'Red Bull',
        options: [
            'Monster Energy',
            'Red Bull',
            'Celsius',
            'Sting Energy',
        ]
    },
    {
        question: 'Are F1 cars hybrids?',
        answer: 'Yes',
        options: [
            'Yes',
            'No',
        ]
    },
    {
        question: 'What is the top speed an F1 car reaches?',
        answer: '233 mph (375 km/h)',
        options: [
            '200 mph (322 km/h)',
            '180 mph (290 km/h)',
            '250 mph (402 km/h)',
            '233 mph (375 km/h)',
        ]
    },
    {
        question: 'Which one of these teams aren\'t in F1 this year?',
        answer: 'Cadillac',
        options: [
            'Mclaren',
            'Mercedes',
            'Ferrari',
            'Cadillac',
        ]
    },
    {
        question: 'Which is the only American owned team in F1?',
        answer: 'Haas',
        options: [
            'Haas',
            'Mclaren',
            'Williams',
            'Red Bull',
        ]
    },
    {
        question: 'Which team is represented by the prancing horse logo?',
        answer: 'Ferrari',
        options: [
            'Alpine',
            'Aston Martin',
            'Mclaren',
            'Ferrari',
        ]
    }
]
// Rules: do not use ALERT, CONFIRM and PROMPT. User only has 30 seconds to answer each question.
// On first page load, should display a "start quiz" button. Must have an id attribute of "start-quiz"; if the user has taken the quiz before, the app should display the previous score.

var quiz = document.getElementById("quiz");

// WHEN PAGE LOADS
window.addEventListener("DOMContentLoaded", function () {
    // Checks if localStorage has a saved score:
    quiz.innerHTML = "";
    // View the previous score
    let previousScore = localStorage.getItem("previous-score");
    if (previousScore) {
        let viewScore = document.createElement("p");
        viewScore.textContent = `Previous Score: ${previousScore}%`;
        quiz.appendChild(viewScore);
    }
    // Create the start quiz button
    let startButton = document.createElement("button");
    startButton.id = "start-quiz";
    startButton.textContent = "Start Quiz!";
    quiz.appendChild(startButton);

    startButton.addEventListener("click", startQuiz);
})

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 30;


// WHEN START QUIZ BUTTON IS CLICKED   
function startQuiz() {
    // set current questions index to 0
    currentQuestionIndex = 0;    
    // reset score to 0
    score = 0;
    // start the first question
    timeLeft = 30;
    showQuestion ();
}

// Function startQuestion:
function showQuestion () {
    // Clear  #quiz div
    quiz.innerHTML = ""
    // Show current question and its options as buttons
    var currentQuestion = questionsArr[currentQuestionIndex]

    var questionElement = document.createElement("p");
    questionElement.textContent = currentQuestion.question;
    quiz.appendChild(questionElement);
    // Show
    var optionsContainer = document.createElement("div");

    currentQuestion.options.forEach(option => {
        var btn = document.createElement("button");
        btn.textContent = option;
        btn.addEventListener("click", handleAnswerClick);
        optionsContainer.appendChild(btn);
    })

    quiz.appendChild(optionsContainer);
    // Display a 30-second timer
    let showTime = document.createElement("p");
    showTime.textContent = timeLeft;
    quiz.appendChild(showTime);

    // Start countdown using setInterval
    timerInterval = setInterval(() => {
        timeLeft--;
        showTime.textContent = timeLeft;

        if (timeLeft <= 0) {
            nextQuestion();
        }
    }, 1000);
}

// WHEN USER CLICKS AN OPTION:
function handleAnswerClick (e) {
    // Stop timer
    clearInterval(timerInterval);
    // Check if selected option matches the correct answer
    var selectedAnswer = e.target.textContent;
    var correctAnswer = questionsArr[currentQuestionIndex].answer;
    // IF correct:
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    // Move to the next question
    nextQuestion();
}

// WHEN TIME RUNS OUT:
    // Automatically move to next question
function nextQuestion() {
    currentQuestionIndex++;
    timeLeft = 30;

    if (currentQuestionIndex < questionsArr.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}
// FUNCTION end game
function endQuiz() {
    // stop timer
    clearInterval(timerInterval);
    // Calculate score as percentage (round to the nearest whole number)
    let percentage = Math.round((score / questionsArr.length) * 100);
    // Save to localStorage
    localStorage.setItem("previous-score", percentage);
    // Clear quiz container
    quiz.innerHTML = "";
    // Show final score
    let scoreElement = document.createElement("p");
    scoreElement.textContent = `Score: ${percentage}%`;
    quiz.appendChild(scoreElement);

    // Function restart quiz
    let restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart Quiz";
    restartBtn.id = "start-quiz";
    restartBtn.addEventListener("click", startQuiz);
    quiz.appendChild(restartBtn);
}



