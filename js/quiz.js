let index = 0;
const questionEl = document.getElementById("question");
const feedbackEl = document.getElementById("feedback");
const coinsEl = document.getElementById("coins");

function loadQuestion() {
  questionEl.textContent = questions[index].question;
  coinsEl.textContent = getUserData().coins;
}

function answer(val) {
  const correct = questions[index].answer === val;
  if (correct) {
    feedbackEl.textContent = "Bonne réponse! +10 coins";
    updateCoins(10);
  } else {
    feedbackEl.textContent = "Mauvaise réponse!";
  }
  index = (index + 1) % questions.length;
  loadQuestion();
}

loadQuestion();