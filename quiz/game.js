const quizQuestion = document.getElementById("question");

const quizChoices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progress-text");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progress-bar-full");
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Constants

const correctBonus = 10;
const maxQuestion = 3;

let questions = [];

fetch("questions.json")
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((loadedQuestions) => {
    questions = loadedQuestions;
    startGame();
  })
  .catch((err) => {
    console.error(err);
  });
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};
getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= maxQuestion) {
    localStorage.setItem("mostRecentScore", score);
    console.log(window);
    return window.location.assign("/quiz/end.html");
  }
  questionCounter++;
  // console.log(progressBarFull);
  progressText.innerText = `Question:  ${questionCounter}/${maxQuestion}`;
  progressBarFull.style.width = `${(questionCounter / maxQuestion) * 100}%`;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  quizQuestion.innerText = currentQuestion.question;

  quizChoices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};
quizChoices.forEach((choice) => {
  choice.addEventListener("click", function (e) {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    let classAnswer = "incorrect";

    if (selectedAnswer == currentQuestion.answer) {
      classAnswer = "correct";
      incrementScore(correctBonus);
    }
    // let classToApply =
    //   selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    selectedChoice.parentElement.classList.add(classAnswer);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classAnswer);
      getNewQuestion();
    }, 1000);
  });
});
incrementScore = (num) => {
  score += num;
  scoreText.innerHTML = score;
};
