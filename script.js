const quizData = {
    title: "JavaScript Fundamentals Quiz",
    description: "Test your knowledge of JavaScript basics",
    timePerQuestion: 30, // seconds
    questions: [
        {
            id: 1,
            question: "What is the correct way to declare a variable in JavaScript?",
            options: [
                "var myVariable = 5;",
                "variable myVariable = 5;",
                "declare myVariable = 5;",
                "myVariable := 5;"
            ],
            correctAnswer: 0, // index of correct option
            explanation: "In JavaScript, 'var' is one of the keywords used to declare variables."
        },
        {
            id: 2,
            question: "Which method is used to add an element to the end of an array?",
            options: [
                "append()",
                "push()",
                "add()",
                "insert()"
            ],
            correctAnswer: 1,
            explanation: "The push() method adds one or more elements to the end of an array."
        },
        {
            id: 3,
            question: "Which symbol is used for single-line comments in JavaScript?",
            options: [
                "<!-- -->",
                "//",
                "/* */",
                "#"
            ],
            correctAnswer: 1,
            explanation: "Two forward slashes (//) are used to write a single-line comment in JavaScript."
        },
        {
            id: 4,
            question: "How do you write 'Hello' in an alert box?",
            options: [
                "msg('Hello');",
                "alertBox('Hello');",
                "alert('Hello');",
                "popup('Hello');"
            ],
            correctAnswer: 2,
            explanation: "The alert() function displays a message in a popup box in the browser."
        },
        {
            id: 5,
            question: "What is the correct way to write an array in JavaScript?",
            options: [
                "var colors = 'red', 'green', 'blue';",
                "var colors = (1:'red', 2:'green', 3:'blue');",
                "var colors = ['red', 'green', 'blue'];",
                "var colors = {red, green, blue};"
            ],
            correctAnswer: 2,
            explanation: "Arrays are written with square brackets, and items are separated by commas."
        },
        {
            id: 6,
            question: "How do you find the length of a string?",
            options: [
                "string.size",
                "string.length",
                "string.count",
                "string.total"
            ],
            correctAnswer: 1,
            explanation: "The .length property returns the number of characters in a string."
        },
        {
            id: 7,
            question: "Which of these is a JavaScript data type?",
            options: [
                "Number",
                "Letter",
                "Word",
                "Character"
            ],
            correctAnswer: 0,
            explanation: "Number is a JavaScript data type used for numeric values."
        },
        {
            id: 8,
            question: "How do you write an if statement in JavaScript?",
            options: [
                "if x == 5 then",
                "if (x == 5)",
                "if x = 5",
                "if x == 5 {"
            ],
            correctAnswer: 1,
            explanation: "An if statement uses parentheses around the condition: if (condition) { ... }"
        },
        {
            id: 9,
            question: "What does 'console.log()' do?",
            options: [
                "Shows a popup box",
                "Prints a message to the browser console",
                "Saves a file",
                "Creates a new variable"
            ],
            correctAnswer: 1,
            explanation: "console.log() prints a message to the browser's console, useful for debugging."
        },
        {
            id: 10,
            question: "How do you create a function in JavaScript?",
            options: [
                "function myFunction()",
                "create myFunction()",
                "def myFunction()",
                "new myFunction()"
            ],
            correctAnswer: 0,
            explanation: "Functions are created using the 'function' keyword followed by a name and parentheses."
        }
    ]
};

let quizTitle= document.getElementById('quiz-title')
let questionText= document.getElementById('question-text')
let questionIndex=0
let currentQuestionIndex=0
let questionCounter=document.getElementById('question-counter')
let answerOptions=document.getElementById('answer-options')
let currentScore= document.getElementById('current-score')
let scoreTracker=0
let nextBtn= document.getElementById('next-btn')


function initQuiz() {
    quizTitle.textContent = quizData.title
    displayQuestion()
}

function displayQuestion(){
 answerOptions.innerHTML = "";
 const currentQuestion=quizData.questions[currentQuestionIndex]
 
 questionText.textContent=currentQuestion.question
 questionCounter.textContent=`Question ${currentQuestionIndex +1} of 10`
 currentQuestion.options.forEach((option, index) => {
    const optionDiv= document.createElement("div")
    optionDiv.classList.add("div-option")
    const optionRadio= document.createElement("input")
    optionRadio.type='radio'
    optionRadio.id = `q${currentQuestionIndex}-opt${index}`
    optionRadio.name = "quiz-option";
    const optionLabel=document.createElement('label')
    optionLabel.htmlFor = `q${currentQuestionIndex}-opt${index}`
    optionLabel.textContent= currentQuestion.options[index]
    optionRadio.value = index; 
    optionDiv.appendChild(optionRadio)
    optionDiv.appendChild(optionLabel)
    answerOptions.appendChild(optionDiv)

    
    




    
})

}

window.addEventListener('DOMContentLoaded', initQuiz);
nextBtn.addEventListener('click', handleNextClick)

// Navigation Events
function handleNextClick(event) {
    // Validate current answer
    const selectedOption = document.querySelector('input[name="quiz-option"]:checked');
    if(selectedOption){
        const selectedOptionDiv = selectedOption.closest('.div-option')
        const userAnswerIndex=Number(selectedOption.value)
        const currentQuestion = quizData.questions[currentQuestionIndex];
        if(userAnswerIndex===currentQuestion.correctAnswer){
            selectedOptionDiv.classList.add('correct-answer')
            scoreTracker++
            currentScore.textContent=scoreTracker
        } else{
            selectedOptionDiv.classList.add('wrong-answer')
        }
    } else {
        alert("Please select an answer!")
        return
    }

     currentQuestionIndex++;
    if (currentQuestionIndex < quizData.questions.length) {
        setTimeout(displayQuestion, 1000)
        
    } else {
        console.log("Quiz Finished");
    }
}

function handlePreviousClick(event) {
    // Save current answer
    // Load previous question
    // Update navigation state
}

// Answer Selection Events
function handleAnswerSelection(event) {
    // Update selected answer
    // Enable/disable navigation
    // Provide visual feedback
}

// Keyboard Navigation Events
function handleKeyboardNavigation(event) {
    // Arrow keys for option selection
    // Enter for answer confirmation
    // Number keys for quick selection
}

// Timer Events
function handleTimerTick() {
    // Update countdown display
    // Check for time expiration
    // Provide time warnings
}

function handleTimerExpiration() {
    // Auto-advance to next question
    // Record "no answer" if applicable
    // Update score accordingly
}