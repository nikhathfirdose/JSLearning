const highScoresList = document.getElementById("high-score-ul-list");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// console.log(highScores);
highScoresList.innerHTML = highScores
  .map((highScore) => {
    return `<li class="high-score-list-data"> ${highScore.name} - ${highScore.score} </li>`;
  })
  .join("");
