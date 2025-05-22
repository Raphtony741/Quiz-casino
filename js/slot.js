const symbols = ["🍒", "🍋", "🍊", "⭐", "💎"];
const reels = [document.getElementById("reel1"), document.getElementById("reel2"), document.getElementById("reel3")];
const resultText = document.getElementById("slot-result");
const coinsEl = document.getElementById("coins");

function spin() {
    const result = [];
    for (let i = 0; i < 3; i++) {
        const rand = Math.floor(Math.random() * symbols.length);
        result.push(symbols[rand]);
        reels[i].textContent = symbols[rand];
    }
    coinsEl.textContent = getUserData().coins;
    if (result[0] === result[1] && result[1] === result[2]) {
        resultText.textContent = "🎉 Jackpot! +50 coins";
        resultText.classList.add("celebrate");
        updateCoins(50);
        showCoinExplosion();
    } else {
        resultText.textContent = "Pas de chance 😢";
        resultText.classList.remove("celebrate");
    }
    coinsEl.textContent = getUserData().coins;
}

function showCoinExplosion() {
    for (let i = 0; i < 10; i++) {
        const coin = document.createElement("div");
        coin.className = "coin";
        coin.textContent = "🪙";
        coin.style.left = Math.random() * 100 + "vw";
        coin.style.animationDelay = (Math.random() * 0.5) + "s";
        document.body.appendChild(coin);
        setTimeout(() => coin.remove(), 1000);
    }
}

coinsEl.textContent = getUserData().coins;