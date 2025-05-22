function getCurrentUser() {
    return localStorage.getItem("currentUser");
}

function getUserData() {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    return users[getCurrentUser()] || { coins: 0 };
}

function updateCoins(amount) {
    let users = JSON.parse(localStorage.getItem("users")) || {};
    const current = getCurrentUser();
    if (!users[current]) users[current] = { coins: 0 };
    users[current].coins += amount;
    localStorage.setItem("users", JSON.stringify(users));
}