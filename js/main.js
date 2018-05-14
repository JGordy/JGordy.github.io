let main = document.querySelector('#main'),
    mainHeader = document.querySelector('#main_header'),
    menu = document.querySelectorAll('.menu_button'),
    nav = document.querySelector('#nav'),
    screen_width = document.documentElement.clientWidth,
    floatersAmount,
    newHeader = "",
    date = new Date();
    // console.log(date.getMonth() + 1, date.getDate());

// adding event listeners for mobile menu toggle open and close
for (var i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', function() {
    nav.classList.toggle('openMenu');
  });
};

// adding divs around each letter in the header to animate them
for (var i = 0; i < mainHeader.innerHTML.length; i++) {
  newHeader += `<div onmouseover="letterBounce(${i})" class="letter" id="letter${i}" >${mainHeader.innerHTML[i]}</div>`;
};
mainHeader.innerHTML = newHeader;

// adding letter animation on mouseover
letterBounce = (i) => {
  let letter = document.querySelector(`#letter${i}`);
  letter.setAttribute('class', 'letter hover');
  // letter.style.color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`;
  // rgba(100,0,200,)

  setTimeout(function() {
    letter.setAttribute('class', 'letter');
  }, 600);
};

// changing the color of the navigation when moved from "main"
changeNavColor = () => {
  let navLinks = document.querySelectorAll('.navLinks');

    if ((document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) && (screen_width > 500)) {
      //adding class to navlinks when scrolled 500px from top
      for (var i = 0; i < navLinks.length; i++) {

        if (navLinks[i].className === "navLinks menu_button") {

          navLinks[i].className = "navLinks menu_button light"

        } else if (navLinks[i].className === "navLinks") {

          navLinks[i].className = "navLinks light";
        }
      }
    } else {
      // removing class from navlinks when scroll is less than 500px from the top
      for (var i = 0; i < navLinks.length; i++) {

        if (navLinks[i].className === "navLinks menu_button light" || navLinks[i].className === "navLinks menu_button") {

          navLinks[i].className = "navLinks menu_button"

        } else if (navLinks[i].className === "navLinks menu_button light") {

          navLinks[i].className = "navLinks menu_button";
        }
      }
    };

    if ((document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) && (screen_width <= 500)) {
      //adding a class to the navbar if the screen is below 500px
      menu[0].style.color = "rgba(255 ,255, 255, 1)";

      nav.style.backgroundColor = 'rgba(255 ,255, 255, 0.9)';
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].style.backgroundColor = 'rgba(255 ,255, 255, 0.0)';
        navLinks[i].style.color = "#102027";
        navLinks[i].style.borderTop = "1px solid #102027";
      };

    } else if ((document.body.scrollTop < 650 || document.documentElement.scrollTop < 650) && (screen_width <= 500)) {
      // removing a class from the navbar if the screen is below 500px
      menu[0].style.color = "#102027";

      nav.style.backgroundColor = '#102027';
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].style.backgroundColor = 'inherit';
        navLinks[i].style.color = "rgba(255, 255, 255, 1)";
        navLinks[i].style.borderTop = "1px solid rgba(255, 255, 255, 0.2)";
      };

    };

  };
window.onscroll = function() {changeNavColor()};

// smooth scrolling jquery function for navigation
$('a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 750);
  return false;
});

// Adding projects from data.js
createProjectHTML = (project) =>{
  return `<div class="image-container ${project.mobile ? " mobile" : ''}">
            <a href=${project.href} target="_blank">
              <img src=${project.imageURL} alt="" class="image ${project.mobile ? 'mobile' : ''}">
              <div class="overlay">
                <div class="text">
                  <div class="views">
                    <h3>${project.name}</h3>
                    <div class="view_icons">
                      ${project.icons.map(icon => {
                        return `<i class="material-icons">${icon}</i>`;
                      })}
                    </div>
                  </div>
                  <div class="project_skills">
                    <div class="skills_list">
                      ${project.skills.map(skill => {
                        return `<span>${skill}</span>`;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>`;
}

addProjects = (projects) => {
  const desktop = document.getElementById('desktop_projects');
  const mobile = document.getElementById('mobile_projects');

  projects.forEach(project => {
    if (project.mobile) {
      mobile.innerHTML += createProjectHTML(project);
    } else {
      desktop.innerHTML += createProjectHTML(project);
    }
  })
}
addProjects(projects);

// Github api repository request
fetch(repoURL)
  .then(results =>  results.json())
  .then(data => {
  for (var i = 0; i < data.length; i++) {
    if (data[i].homepage) {
      createRepo(data, i);
    } else if (i <= 10 && !data[i].homepage) {
      createRepo(data, i);
    };
  };
});

// Github api user info request
fetch(userURL)
  .then(results => results.json())
  .then(data => vCardFunction(data));

// adding github user data to the DOM
vCardFunction = (data) => {
  let company,
      list = document.querySelector(".list"),
      contacts = document.querySelector('.contact-list');
  if (data.company === null) {
    company = `<a class="company hire" href="mailTo:joe.a.gordy@gmail.com" ></a>`;
  } else {
    company = data.company;
  };

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
                        <span><i class="fab fa-github" aria-hidden="true"></i></span><a href=${data.html_url} target="_blank">github.com/Jgordy</a>
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
      <span><i class="fab fa-linkedin" aria-hidden="true"></i></span>
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
};

// Adding project company logos below
createCompanyHTML = logo => {
  return `<div class="logo">
            <a href=${logo.href} />
              <img src="./images/Logo/${logo.imageURL}" />
            </a>
          </div>`;
}

addCompanyLogos = logos => {
  const companies = document.querySelector('#company-wrapper');
  logos.forEach(logo => {
    companies.innerHTML += createCompanyHTML(logo);
  })
};
addCompanyLogos(logos);

// creating list item elements for each repo, from the api data
createRepo = (data, i) => {

  let repositories = document.querySelector('.repositories'),
      eachRepo = document.createElement('div');

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
};

//function to create the standard background floater
createFloater = (index) => {
  let dot = document.createElement('div');
  let line = document.createElement('div');
  let cross = document.createElement('div');

  dot.setAttribute('class', 'dot');
  main.appendChild(dot);
  if (dot.className === 'dot') {
    // dot.style.top === Math.random().toFixed(2) * 100 + "vh";
    // dot.style.left === Math.random().toFixed(2) * 100 + "vw";
    // dot.style.transition = `top ${Math.random().toFixed(2) * 15}s, left ${Math.random().toFixed(2) * 15}s`;
    dot.style.transform = `rotate(${Math.random().toFixed(2) * 180}deg)`;
  };

  setTimeout(function() {
    dot.setAttribute('class', 'move');
    if (dot.className === 'move') {

      let randomSpeed = Math.random().toFixed(2) * 15;
      dot.style.top = Math.random().toFixed(2) * 100 + "vh";
      dot.style.left = Math.random().toFixed(2) * 95 + "vw";
      dot.style.transition = `top ${randomSpeed}s, left ${randomSpeed}s`;

    }
  }, 1500);

  let rotateSpeed = Math.random().toFixed(2) * 150;
  line.setAttribute('class', 'line');
  line.style.transform = "rotate(" + Math.random().toFixed(2) * 180 + "deg)";
  line.style.animation = `${rotateSpeed}s ease-out 0s infinite rotateCW`;
  dot.appendChild(line);

  cross.setAttribute('class', 'cross');
  cross.style.transform = "rotate(" + Math.random().toFixed(2) * 180 + "deg)";
  cross.style.animation = `${rotateSpeed}s ease-out 0s infinite rotateCCW`;
  dot.appendChild(cross);

  if (index % 5 === 0) {

    line.style.backgroundColor = `rgba(0,0,0,0.9)`;
    cross.style.backgroundColor = `rgba(0,0,0,0.9)`;

  } else if (index % 9 === 0) {

    line.style.backgroundColor = `rgba(0,0,0,0.1)`;
    cross.style.backgroundColor = `rgba(0,0,0,0.1)`;

  }
};

// function to create snow themed background
snowTheme = () => {
  let snowflake = document.createElement('div');
  snowflake.innerHTML = `<i class="fa fa-snowflake-o" aria-hidden="true"></i>`;
  snowflake.style.position = 'absolute';
  snowflake.style.top = '0';
  snowflake.style.left = `${Math.floor(Math.random().toFixed(2) * 100)}vw`;
  snowflake.style.transform = `scale(${Math.random().toFixed(2) * 1.5})`;
  snowflake.style.color = 'lightblue';

  main.appendChild(snowflake);
};

// adding floating elements in the background of main section
if (screen_width <= 500 ) {
  floatersAmount = 25;
} else if (screen_width <= 800 ) {
  floatersAmount = 40;
} else if (screen_width <= 1000 ) {
  floatersAmount = 75;
} else {
  floatersAmount = 80;
};

for (var i = 0; i < floatersAmount; i++) {

  // if (date.getMonth() + 1 === 12) {
  //   snowTheme()
  // } else {
  //   createFloater();
  // };

  createFloater(i);

};
