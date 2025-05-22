const questions = [
    { q: "Combien font 5 x 5 ?", a: "25" },
    { q: "Quelle est la capitale du Canada ?", a: "Ottawa" }
];
let current = 0;
const coinsEl = document.getElementById("coins");
const qContainer = document.getElementById("question-container");

function showQuestion() {
    const q = questions[current];
    qContainer.innerHTML = `<p>${q.q}</p><input type="text" id="answer">`;
}

function nextQuestion() {
    const userAnswer = document.getElementById("answer").value.trim();
    const correct = questions[current].a;
    if (userAnswer.toLowerCase() === correct.toLowerCase()) {
        updateCoins(10);
        showCoinExplosion();
    } else {
        document.body.classList.add("stress");
        setTimeout(() => document.body.classList.remove("stress"), 500);
    }
    current = (current + 1) % questions.length;
    showQuestion();
    coinsEl.textContent = getUserData().coins;
}

function showCoinExplosion() {
    for (let i = 0; i < 8; i++) {
        const coin = document.createElement("div");
        coin.className = "coin";
        coin.textContent = "🪙";
        coin.style.left = Math.random() * 100 + "vw";
        coin.style.animationDelay = (Math.random() * 0.5) + "s";
        document.body.appendChild(coin);
        setTimeout(() => coin.remove(), 1000);
    }
}

showQuestion();
coinsEl.textContent = getUserData().coins;