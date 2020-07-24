const highScoresList = document.getElementById("high-score-ul-list");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// console.log(highScores);
highScoresList.innerHTML = highScores
  .map((highScore) => {
    return `<div class="each-player"> <li class="player name"> ${highScore.name}  </li>
    <p class="player score"> - ${highScore.score}</p></div> `;
  })
  .join("");
