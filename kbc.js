const questions = [
    {
        question: "Which is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Marsh", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
        ]
    },
    {
        question: "Who discovered the law of gravity?",
        answers: [
            { text: "Galileo Galilei", correct: false },
            { text: " Albert Einstein", correct: false },
            { text: " Isaac Newton", correct: true },
            { text: "Nikola Tesla", correct: false },
        ]
    },
    {
        question: "What is the chemical symbol for Gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Go", correct: false },
            { text: "Gd", correct: false },
        ]
    },
    {
        question: "Which organ in the human body is responsible for pumping blood?",
        answers: [
            { text: "Liver", correct: false },
            { text: "Kidney", correct: false },
            { text: "Heart", correct: true },
            { text: "Lungs", correct: false },
        ]
    },
    {
      question: "What is the square root of 144?",
      answers: [
        { text: "10", correct: false },
        { text: "11", correct: false },
        { text: "12", correct: true },
        { text: "14", correct: false },
      ]  
    },
    {
        question: "In which year did India gain independence?",
        answers: [
            { text: "1947", correct: true },
            { text: "1948", correct: false },
            { text: "1949", correct: false },
            { text: "1950", correct: false },
        ]
    },
    {
      question: "Who painted the famous artwork Mona Lisa?",
      answers: [
        { text: "Leonardo da Vinci", correct: true },
        { text: "Pablo Picasso", correct: false },
        { text: "Vincent van Gogh", correct: false },
        { text: "Michelangelo", correct: false },
      ]  
    },
    {
      question: "What is the national currency of Japan?",
      answers: [
        { text: "Dollor", correct: false },
        { text: "Yen", correct: true },
        { text: "Euro", correct: false },
        { text: "Pound", correct: false },
      ]  
    },
    {
      question: "Which gas is most abundant in the Earth’s atmosphere?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Hydrogen", correct: false },
        { text: "Carbon dioxide", correct: false },
        { text: "Nitrogen", correct: true },
      ]
    },
    {
      question: "Who is the author of the Harry Potter series?",
      answers: [
        { text: "J.K. Rowling", correct: true },
        { text: "J.R.R. Tolkien", correct: false },
        { text: "George R.R. Martin", correct: false },
        { text: "Stephen King", correct: false },
      ]  
    }
];

function startButton() {
    document.getElementById("start-btn").addEventListener("click", startQuiz);
}
function resetButton() {
    document.getElementById("reset-btn").addEventListener("click", startQuiz);
}
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("choice");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
            
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const iscorrect = selectedButton.dataset.correct === "true";
    if (iscorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; 
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();



    
