let data = {
  "login": "JGordy",
  "id": 26208200,
  "avatar_url": "https://avatars1.githubusercontent.com/u/26208200?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/JGordy",
  "html_url": "https://github.com/JGordy",
  "followers_url": "https://api.github.com/users/JGordy/followers",
  "following_url": "https://api.github.com/users/JGordy/following{/other_user}",
  "gists_url": "https://api.github.com/users/JGordy/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/JGordy/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/JGordy/subscriptions",
  "organizations_url": "https://api.github.com/users/JGordy/orgs",
  "repos_url": "https://api.github.com/users/JGordy/repos",
  "events_url": "https://api.github.com/users/JGordy/events{/privacy}",
  "received_events_url": "https://api.github.com/users/JGordy/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Joseph Gordy",
  "company": "The Iron Yard",
  "blog": "josephgordy.com",
  "location": "Atlanta, GA",
  "email": "joe.a.gordy@gmail.com",
  "hireable": true,
  "bio": "I've recently decided to make a change in careers at 33. For the past 15 years i've been in the retail industry, and just enrolled in a development bootcamp! ",
  "public_repos": 20,
  "public_gists": 0,
  "followers": 4,
  "following": 10,
  "created_at": "2017-03-05T22:23:47Z",
  "updated_at": "2017-08-07T17:54:38Z"
}

// console.log('document: ', document.styleSheets[0]);

//  select the parent elements
let header = document.querySelector(".header");
let list = document.querySelector(".list");
let wrapper = document.querySelector('#wrapper');
let main = document.querySelector('#main');
let contacts = document.querySelector('.contact-list');
// vCard Function
function vCardFunction () {
    // header.innerHTML = `<h1>Hi, I'm ${data.name}</h1>
    //  `;

    list.innerHTML = `<li>
                        <span><i class="material-icons">person_pin</i></i></span> ${data.name}
                      </li>
                      <li>
                        <span><i class="material-icons">business</i></span>${data.company}
                      </li>
                      <li>
                        <span><i class="fa fa-github" aria-hidden="true"></i></span><a href=${data.html_url}>github.com/Jgordy</a>
                      </li>
                      <li>
                        <span><i class="fa fa-globe" aria-hidden="true"></i></span><a href=https://${data.blog}>${data.blog}</a>
                      </li>`;

    contacts.innerHTML = `<li>
      <span><i class="material-icons">email</i></span><a href="mailTo:${data.email}">${data.email}</a>
    </li>
    <li>
      <span><i class="fa fa-linkedin" aria-hidden="true"></i></span><a href="https://www.linkedin.com/in/joseph-gordy">LinkedIn.com/joseph-gordy</a>
    </li>
    <li>
      <span><i class="material-icons">phone_android</i>1•334•718•6808</span>
    </li>`

  let image = document.createElement("img");
  image.setAttribute("src", data.avatar_url);
  // let icon = document.getElementById("icon");
  icon.appendChild( image );
}
vCardFunction();


$('a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});

//adding the floating elements in the background
for (var i = 0; i < 125; i++) {
  let dot = document.createElement('div');
  let line = document.createElement('div');
  let cross = document.createElement('div');

  dot.setAttribute('class', 'dot');
  main.appendChild(dot);
  if (dot.className === 'dot') {
    dot.style.top === Math.random() * 100 + "%";
    dot.style.left === Math.random() * 100 + "%";
    dot.style.transition = `top ${Math.random() * 10}s, left ${Math.random() * 15}s`;
    dot.style.transform = `rotate(${Math.random() * 180}deg)`;
  }

  setTimeout(function() {
    dot.setAttribute('class', 'move');
    if (dot.className === 'move') {
      dot.style.top = Math.random() * 100 + "%";
      dot.style.left = Math.random() * 100 + "%";
      dot.style.transition = `top ${Math.random() * 10}s, left ${Math.random() * 15}s`;
    }
  }, 200);


  line.setAttribute('class', 'line');
  line.style.transform = "rotate(" + Math.random() * 180 + "deg)";
  line.style.animation = `${Math.random() * 500 / 2}s ease-out 0s infinite rotateCW`
  dot.appendChild(line);

  cross.setAttribute('class', 'cross');
  cross.style.transform = "rotate(" + Math.random() * 180 + "deg)";
  cross.style.animation = `${Math.random() * 500 / 2}s ease-out 0s infinite rotateCCW`
  dot.appendChild(cross);
}

fetch('https://api.github.com/users/jgordy/repos?sort=created')
    .then(results => {
      return results.json();
    }).then(data => {
      let repositories = document.querySelector('repositories');

      for (var i = 0; i < data.length; i++) {
        let eachRepo = document.createElement('div');
        eachRepo.setAttribute('class', 'eachRepo');
      }

    }); // end of the repo fetch






// let ss = document.styleSheets;
// console.log("CSS Sheets: " ss);

// Github api request
// function reqListener () {
//    let info = JSON.parse(this.responseText);
//    console.log('Github api data: ', info);
// }
//
// let req = new XMLHttpRequest();
// req.open("GET", "https://api.github.com/users/jgordy");
// req.addEventListener("load", reqListener);
// req.send();
