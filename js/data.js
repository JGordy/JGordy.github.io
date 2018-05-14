const repoURL = 'https://api.github.com/users/jgordy/repos?sort=created';

const userURL = 'https://api.github.com/users/jgordy';

const projects = [
  {
    mobile: true,
    href: '#',
    imageURL: './images/generosity-market-mobile.png',
    name: 'Generosity Market',
    icons: ['phone_android'],
    skills: ['React', 'Redux', 'API Calls', 'Progressive Web Apps', 'CSS3 Animations']
  }, {
    mobile: true,
    href: 'https://house-rules.github.io/webpage/',
    imageURL: './images/HR-gameList-screen.png',
    name: 'House Rules',
    icons: ['phone_android'],
    skills: ['React', 'Redux', 'API Calls', 'Progressive Web Apps', 'CSS3 Animations']
  }, {
    mobile: true,
    href: 'http://josephgordy.com/wk4_itunes_music_search/',
    imageURL: './images/iTunes-project-rwd.png',
    name: 'Itunes Project',
    icons: ['phone_android', 'computer'],
    skills: ['Skills', 'Javascript', 'Responive Web Design']
  }, {
    mobile: true,
    href: 'http://josephgordy.com/week3_calculator_project/',
    imageURL: './images/js-calculator-rwd.png',
    name: 'Javascript calculator',
    icons: ['phone_android', 'computer'],
    skills: ['Javascript', 'HTML/CSS', 'Responsive Web Design']
  }, {
    mobile: false,
    href: 'https://josephgordy.com/shoppily/',
    imageURL: './images/shoppily-homepage.png',
    name: 'Shoppily',
    icons: ['computer'],
    skills: ['React', 'CSS animations', 'Javascript']
  }, {
    mobile: false,
    href: '#',
    imageURL: './images/jibberjab.png',
    name: 'Jibberjab',
    icons: ['computer'],
    skills: ['NodeJS', 'Express', 'Postgres', 'Javascript', 'Mustache']
  }, {
    mobile: false,
    href: 'https://flipcards-joe-gordy.herokuapp.com',
    imageURL: './images/flipcards.png',
    name: 'Flipcards',
    icons: ['computer'],
    skills: ['NodeJS', 'Express', 'Postgres', 'Rest API', 'Javascript', 'Mustache']
  }, {
    mobile: false,
    href: 'http://josephgordy.com/Bent-Creek-Ceramics/',
    imageURL: './images/bent_creek_ceramics.png',
    name: 'Bent Creek Ceramics',
    icons: ['computer'],
    skills: ['Javascript', 'HTML/CSS']
  }
]

// Greeting for main header
// let today = new Date();
// let hourNow = today.getHours();
// let greeting;
//
// if (hourNow >= 18) {
//   greeting = "Good evening!";
// } else if (hourNow >= 12) {
//   greeting = "Good afternoon!";
// } else if (hourNow >= 0) {
//   greeting = "Good morning!";
// } else {
//   greeting = "Welcome!";
// }
//
// document.getElementById('greet').textContent = greeting;
