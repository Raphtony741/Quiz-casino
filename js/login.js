function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (!users[user]) {
    users[user] = { password: pass, coins: 0 };
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", user);
    document.getElementById("message").textContent = "Compte créé!";
    window.location.href = "quiz.html";
  } else {
    if (users[user].password === pass) {
      localStorage.setItem("currentUser", user);
      document.getElementById("message").textContent = "Connexion réussie!";
      window.location.href = "quiz.html";
    } else {
      document.getElementById("message").textContent = "Mot de passe incorrect.";
    }
  }
}