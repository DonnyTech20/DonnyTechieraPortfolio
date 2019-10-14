let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = 'Good Evening & Welcome!';
} else if (hourNow > 12) {
greeting = "Good Afternoon & Welcome!";
} else if (hourNow > 0) {
    greeting = 'Good Morning & Welcome!';
} else {
    greeting = 'Welcome!';
}

document.getElementById('now').innerHTML = today;