//  select the parent elements
let header = document.querySelector(".header"),
    list = document.querySelector(".list"),
    wrapper = document.querySelector('#wrapper'),
    main = document.querySelector('#main'),
    contacts = document.querySelector('.contact-list'),
    image = document.querySelector('.image'),
    mainHeader = document.querySelector('#main_header'),
    repositories = document.querySelector('.repositories'),
    newHeader = "";

// adding spans around each letter in the header to animate them
for (var i = 0; i < mainHeader.innerHTML.length; i++) {
  newHeader += `<div onmouseover="letterBounce(${i})" class="letter" id="letter${i}" >${mainHeader.innerHTML[i]}</div>`;
}
mainHeader.innerHTML = newHeader;

// adding letter animation on mouseover
letterBounce = (i) => {
  // console.log(i);
  let letter = document.querySelector(`#letter${i}`);
  letter.setAttribute('class', 'letter hover');

  setTimeout(function() {
    letter.setAttribute('class', 'letter');
  }, 600);
}

// changing the color of the navigation when moved from "main"
changeNavColor = () => {
  let navLinks =  document.querySelectorAll(".navLinks");

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {

      for (var i = 0; i < navLinks.length; i++) {

        if (navLinks[i].className === "navLinks menu") {

          navLinks[i].className = "navLinks menu light"

        } else if (navLinks[i].className === "navLinks") {

          navLinks[i].className = "navLinks light";
        }
      }
    } else {

      for (var i = 0; i < navLinks.length; i++) {

        if (navLinks[i].className === "navLinks menu light" || navLinks[i].className === "navLinks menu") {

          navLinks[i].className = "navLinks menu"

        } else if (navLinks[i].className === "navLinks light") {

          navLinks[i].className = "navLinks";
        }
      }
    }
  };
window.onscroll = function() {changeNavColor()};

// smooth scrolling jquery function for navigation
$('a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 750);
  return false;
});

// Github api repository request
fetch('https://api.github.com/users/jgordy/repos?sort=created')
    .then(results => {
      return results.json();
    }).then(data => {
      for (var i = 0; i < data.length; i++) {

        if (data[i].homepage) {
          createRepo(data, i);
        } else if (i <= 10 && !data[i].homepage) {
          createRepo(data, i);
        };
      }// end of for loop
    }); // end of the repo fetch

// Github api user info request
fetch('https://api.github.com/users/jgordy')
  .then(results => {
    return results.json();
  }).then(data => {
    vCardFunction(data);
  });

// adding github user data to the DOM
function vCardFunction (data) {
  let company;
  if (data.company === null) {
    company = `<a class="company hire" href="mailTo:joe.a.gordy@gmail.com" ></a>`;
  } else {
    company = data.company;
  }

    list.innerHTML = `<li>
                        <span><i class="material-icons">person_pin</i></i></span> ${data.location}
                      </li>
                      <li>
                        <span><i class="material-icons">school</i></span><a href="https://www.theironyard.com/" target="_blank">The Iron Yard</a>
                      </li>
                      <li>
                        <span><i class="material-icons">business</i></span> ${company}
                      </li>
                      <li>
                        <span><i class="fa fa-github" aria-hidden="true"></i></span><a href=${data.html_url} target="_blank">github.com/Jgordy</a>
                      </li>
                      <li>
                        <span><i class="fa fa-globe" aria-hidden="true"></i></span><a href=https://${data.blog}>${data.blog}</a>
                      </li>`;

    contacts.innerHTML = `<li>
      <span><i class="material-icons">email</i></span>
      <h4>Email me at</h4>
      <a href="mailTo:joe.a.gordy@gmail.com">joe.a.gordy@gmail.com</a>
    </li>
    <li>
      <span><i class="fa fa-linkedin" aria-hidden="true"></i></span>
      <h4>Message me on LinkedIn</h4>
      <a href="https://www.linkedin.com/in/joseph-gordy" target="_blank">LinkedIn.com/joseph-gordy</a>
    </li>
    <li>
      <span><i class="material-icons">phone_android</i></span>
      <h4>Call me at</h4>
      <a href="tel:13347186808">(334) 718 - 6808</a>
    </li>`;

  let image = document.createElement("img");
  image.setAttribute("src", data.avatar_url);
  // let icon = document.getElementById("icon");
  icon.appendChild( image );
}

// creating list item elements for each repo, from the api data
createRepo = (data, i) => {

  let eachRepo = document.createElement('div');
  eachRepo.setAttribute('class', 'eachRepo');
  repositories.appendChild(eachRepo);

  let repo_container = document.createElement('div');
  repo_container.setAttribute('class', 'repo_container');
  eachRepo.appendChild(repo_container);

  let link_container = document.createElement('div');
  link_container.setAttribute('class', 'link_container');
  eachRepo.appendChild(link_container);

  if (data[i].homepage != null) {

    let site = document.createElement('a');
    site.setAttribute('href', `${data[i].homepage}`);
    site.setAttribute('class', 'github');
    site.setAttribute('target', "_blank");
    link_container.appendChild(site);

    let ghIcon = document.createElement('div');
    ghIcon.setAttribute('class', 'ghIcon');
    ghIcon.innerHTML = `<i class="fa fa-globe" aria-hidden="true"></i>`;
    site.appendChild(ghIcon);
  }

  let link = document.createElement('a');
  link.setAttribute('href', `${data[i].html_url}`);
  link_container.appendChild(link);

  let title = document.createElement('h4');
  title.textContent = `${data[i].name}`;
  repo_container.appendChild(title);

  let language = document.createElement('h5');
  language.setAttribute('class', 'language');
  language.textContent = `${data[i].language}`;
  repo_container.appendChild(language);

  let codeIcon = document.createElement('div');
  codeIcon.setAttribute('class', 'codeIcon');
  codeIcon.innerHTML = `<i class="material-icons">code</i>`;
  link.appendChild(codeIcon);
}

// adding floating elements in the background of main section
let floatersAmount;
if (window.screen.width / window.devicePixelRatio <= 500 ) {
  floatersAmount = 25;
} else if (window.screen.width / window.devicePixelRatio <= 800 ) {
  floatersAmount = 40;
} else if (window.screen.width / window.devicePixelRatio <= 1000 ) {
  floatersAmount = 75;
} else {
  floatersAmount = 100;
}
console.log("FLOATERAMOUNT: ", floatersAmount);

for (var i = 0; i < floatersAmount; i++) {
  let dot = document.createElement('div');
  let line = document.createElement('div');
  let cross = document.createElement('div');

  dot.setAttribute('class', 'dot');
  main.appendChild(dot);
  if (dot.className === 'dot') {
    dot.style.top === Math.random() * 100 + "vh";
    dot.style.left === Math.random() * 100 + "vw";
    dot.style.transition = `top ${Math.random() * 10}s, left ${Math.random() * 15}s`;
    dot.style.transform = `rotate(${Math.random() * 180}deg)`;
  }

  setTimeout(function() {
    dot.setAttribute('class', 'move');
    if (dot.className === 'move') {
      dot.style.top = Math.random() * 100 + "vh";
      dot.style.left = Math.random() * 100 + "vw";
      dot.style.transition = `top ${Math.random() * 10}s, left ${Math.random() * 15}s`;
    }
  }, 1500);


  line.setAttribute('class', 'line');
  line.style.transform = "rotate(" + Math.random() * 180 + "deg)";
  line.style.animation = `${Math.random() * 500 / 2}s ease-out 0s infinite rotateCW`
  dot.appendChild(line);

  cross.setAttribute('class', 'cross');
  cross.style.transform = "rotate(" + Math.random() * 180 + "deg)";
  cross.style.animation = `${Math.random() * 500 / 2}s ease-out 0s infinite rotateCCW`
  dot.appendChild(cross);
}

// getting the date to use for a later idea
let date = new Date();
console.log(date.getMonth() + 1, date.getDate());

// getting screen width and height
console.log("WINDOW.SCREEN.WIDTH: ",window.screen.width);
console.log("WINDOW.SCREEN.HEIGHT: ", window.screen.height);
console.log("WINDOW.DEVICEPIXELRATIO: ", window.devicePixelRatio);

let screen_width = document.documentElement.clientWidth;
let screen_height = document.documentElement.clientHeight;
console.log(screen_height, screen_width);
