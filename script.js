// Fake user (for demo)
const USER = "admin";
const PASS = "1234";

// LOGIN FUNCTION
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === USER && password === PASS) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "app.html";
    } else {
        document.getElementById("error").innerText = "Invalid credentials!";
    }
}

// CHECK LOGIN
function checkAuth() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

// JOKE GENERATOR
const jokes = [
    "Why don’t hackers like nature? Too many bugs 🐛",
    "Access denied... just kidding 😎",
    "I hacked my fridge… now it runs Linux 🐧",
    "404 Joke Not Found 😂",
    "I love cybersecurity… it keeps me secure 😌"
];

function getJoke() {
    const random = Math.floor(Math.random() * jokes.length);
    document.getElementById("joke").innerText = jokes[random];
}

// MEMES
const memes = [
    "https://i.imgflip.com/30b1gx.jpg",
    "https://i.imgflip.com/1bij.jpg",
    "https://i.imgflip.com/26am.jpg",
    "https://i.imgflip.com/2fm6x.jpg",
    "https://i.imgflip.com/3si4.jpg"
];

// JOKE + MEME GENERATOR
function getJoke() {
    const randomJoke = Math.floor(Math.random() * jokes.length);
    const randomMeme = Math.floor(Math.random() * memes.length);

    document.getElementById("joke").innerText = jokes[randomJoke];
    document.getElementById("meme").src = memes[randomMeme];
}