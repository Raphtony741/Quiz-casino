function getUserData() {
    return JSON.parse(localStorage.getItem("quizUser") || '{"coins":0}');
}
function updateCoins(amount) {
    const user = getUserData();
    user.coins += amount;
    localStorage.setItem("quizUser", JSON.stringify(user));
}
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
        localStorage.setItem("quizUser", JSON.stringify({ username, coins: 0 }));
        alert("Connecté!");
    } else {
        alert("Veuillez remplir les champs.");
    }
}