let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow >= 18) {
  greeting = "Good evening!";
} else if (hourNow >= 12) {
  greeting = "Good afternoon!";
} else if (hourNow >= 0) {
  greeting = "Good morning!";
} else {
  greeting = "Welcome!";
}

document.getElementById('greet').textContent = greeting;

// let div = document.querySelector('layer1');
// let h1 = document.createElement('h1';)
// h1.textContent = greeting;
