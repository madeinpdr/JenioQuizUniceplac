const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}


function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = " PARABÉNS! VOCÊ FOI MUITO BEM! :)"
      break
    case (performance >= 70):
      message = " VOCÊ CONHECE BEM MAS PODE MELHORAR!:/"
      break
    case (performance >= 50):
      message = ""
      break
    default:
      message = "VOCÊ FOI MAL! VAMOS ESTUDAR? :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}

const questions = [
  {
    question: "1- Qual é o valor decimal do número binário 1011?",
    answers: [
      { text: " a) 3", correct: false },
      { text: " b) 5", correct: false },
      { text: " c) 7", correct: true },
      { text: " d) 9", correct: false }
    ]
  },
  {
    question: "2- Converta o número decimal 42 para binário.",
    answers: [
        { text: "a) 101010", correct: false },
        { text: "b) 101100", correct: false },
        { text: "c) 110010", correct: true },
        { text: "d) 110100", correct: false }
    ]
  },
  {
    question: "3- Converta o número octal 56 para binário.",
    answers: [
        { text: "a) 101011", correct: false },
        { text: "b) 101100", correct: false },
        { text: "c) 110011", correct: false },
        { text: "d) 110100", correct: true }
    ]
  },
  {
    question: "4- No sistema binário, cada dígito pode ter um valor de 0 ou 1.",
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "5- Qual é o valor hexadecimal do número binário 1100?",
    answers: [
        { text: "a) A ", correct: false },
        { text: "b) B", correct: false },
        { text: "c) C", correct: true },
        { text: "d) D", correct: false }
    ]
  },
  {
    question: "6- Qual é o valor decimal do número octal 127?",
    answers: [
        { text: "A) 47", correct: false },
        { text: "B) 71", correct: true },
        { text: "C) 55", correct: false },
        { text: "D) 87", correct: false }
    ]
  },
  {
    question: '7- Converta o número hexadecimal 2F para binário.    ',
    answers: [
        { text: "A) 00101111", correct: true },
        { text: "B) 01001110 ", correct: false },
        { text: "C) 00111101", correct: false },
        { text: "D) 01011100", correct: false }
    ]
  },
  {
    question: '8- Qual é o valor hexadecimal do número binário 10101010?    ',
    answers: [
        { text: "a) AA", correct: true },
        { text: "b) BB", correct: false },
        { text: "c) CC", correct: false },
        { text: "d) DD", correct: false }
    ]
  },
  {
    question: '9- Converta o número binário 11111111 para octal.    ',
    answers: [
        { text: "a) 377", correct: true },
        { text: "b) 3777", correct: false },
        { text: "c) 37777", correct: false },
        { text: "d) 377777", correct: false }
    ]
  },
  {
    question: '10- Qual é o valor decimal do número hexadecimal ABCD?',
    answers: [
        { text: "a) 43981", correct: true },
        { text: "b) 44077", correct: false },
        { text: "c) 44173", correct: false },
        { text: "d) 44269", correct: false }
    ]
  },
]