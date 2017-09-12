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
  "blog": "jgordy.github.io",
  "location": "Atlanta, GA",
  "email": "jgordy2424@gmail.com",
  "hireable": true,
  "bio": "I've recently decided to make a change in careers at 33. For the past 15 years i've been in the retail industry, and just enrolled in a development bootcamp! ",
  "public_repos": 20,
  "public_gists": 0,
  "followers": 4,
  "following": 10,
  "created_at": "2017-03-05T22:23:47Z",
  "updated_at": "2017-08-07T17:54:38Z"
}


//  select the parent elements

let header = document.querySelector(".header");

let list = document.querySelector(".list");

// vCard Function

function vCardFunction () {
    header.innerHTML = `<h1>${data.name}</h1>
     `;

    list.innerHTML = `<li>
                        <span>Name:</span> ${data.name}
                      </li>
                      <li>
                        <span>Github URL:</span><a href=${data.html_url}>Jgordy</a>
                      </li>
                      <li>
                        <span>Email:</span><a>${data.email}</a>
                      </li>
                      <li>
                        <span>Company:</span>${data.company}
                      </li>
                      <li>
                        <span>LinkedIn:</span><a href="https://www.linkedin.com/in/joseph-gordy-64070a28/">LinkedIn.com</a>
                      </li>
                      <li>
                        <span>Website:</span><a href=https://${data.blog}>${data.blog}</a>
                      </li>
                      <li>
                        <a href="https://josephgordy.wordpress.com">josephgordy.wordpress.com</a>
                      </li>`;

  let image = document.createElement("img");
  image.setAttribute("src", data.avatar_url);
  // let icon = document.getElementById("icon");
  icon.appendChild( image );
}

vCardFunction();



// Github api request

function reqListener () {
   let info = JSON.parse(this.responseText);
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/jgordy");
req.addEventListener("load", reqListener);
req.send();
