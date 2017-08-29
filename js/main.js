
// Greeting for main header

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


// For the menu toggle

function myFunction(x) {
    x.classList.toggle("change");
}
















// var headerElement = document.getElementById("container");
//
// // Adding a "click" event listener to "header"
// headerElement.addEventListener("click", ourCallBack);
//
// // The "ourCallBack()" function is called whenever our declared event listener is triggered.
// function ourCallBack() {
//     if( headerElement.style.color === "red" ){
//         headerElement.style.color = "blue";
//     }else{
//         headerElement.style.color = "red";
//     };
