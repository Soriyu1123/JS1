var today = new Date;
console.log(today);

var hour = today.getHours();
console.log(hour);

var greeting;

// 24hr - Military clock

if (hour >= 1 && hour < 12) {
     greeting = 'Good Morning';
}
else if (hour >= 12 && hour < 18) {
    greeting = 'Good Afternoon';
}
else (greeting = 'Good Evening')

// document.write('<h2>' + greeting +'</h2>');
console.log(greeting);

// Prompt

var username;
username = prompt('Enter your Name');
fbname = prompt('Enter your Facebook username');

// document.write(`<h1> Hello, ${username.toUpperCase()} ${greeting}! </h1>`);

var nams = document.getElementById('name');
nams.textContent = `${username.toUpperCase()}`;

var text = "Proceed to my Facebook Profile";
var result = text.link(newFunction());
document.getElementById("note").innerHTML = result;

function newFunction() {
    return "C:\Users\ASUS\Documents";
}
document.write (`<h2> ${greeting} </h2>`);