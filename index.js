

// (function () {
// const getUsers = async () => {
//     const result = await fetch('https://api.github.com/users');
//     const  users = result.json();
//     console.log(users);
    
// };
// getUsers()
// });



// const APIURL = 'https://api.github.com';

// const form = document.querySelector('#form');
// const main = document.querySelector('#main');
// const search = document.querySelector('#search');
// const button = document.querySelector('#button');

// async function getUsers(username) {
//     try{
//         const { data } = await axios(APIURL + username);
//         createUsersCard(data);
//         getRepos(username);
//     }catch (error) {
//         if(error.response.status == 404){
//             createErrorCard('No profile found wiht this username'); 
//         }
//     }
// }

// async function getRepos(username){
//     try{
//         const { data } = await axios(APIURL + username + '/repos?sort=created');
//         addReposToCard(data);
//     }catch{
//         createErrorCard('problem fetching Repos');
//     }
// }

// function createUsersCard(user){
//     const cardHTML = `
//     <div class="card">
//     <div>
//         <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
//     </div>
//     <div class="user-info">
//         <h2>${user.name}</h2>
//         <p>${user.bio}</p>
//         <ul>
//             <li>${user.followers} <strong>Followers</strong></li>
//             <li>${user.following} <strong>Following</strong></li>
//             <li>${user.public_repos} <strong>Repos</strong></li>
//         </ul>
//         <div id="Repos"></div>
//     </div>
// </div>
//     `
//     main.innerHTML = cardHTML;
// }

// function createErrorCard(msg){
//    const cardHTML = `  <div class="card">
//     <h1>${msg}</h1>
// </div>`
// main.innerHTML = cardHTML;
// }

// function addReposToCard(repos){
//     const reposEl = document.getElementById('repos');

//     repos
//        .slice(0, 5)
//        .forEach(repo => {
//           const repoEl = document.createElement ('a');
//           repoEl.classList.add('repo');
//           repoEl.hreaf = repo.html_url;
//           repoEl.target = '_black';
//           repoEl.innerText = repo.name

//           reposEl.appendChild(repoEl);
//        });
// }

// form.addEventListener('click', (e) => {
//     e.preventDefault();

//     const user = search.value;

//     if (user) {
//         getUsers(user);

//         search.value = '';
//     }
// });

 const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username){
    try{
        const { data } = await axios(APIURL + username)
        createUserCard(data)
        getRepos(username)
    }catch (err){
        if(err.response.status == 404){
            createErrorCard('No profile with this Username')
        }
    }
}

async function getRepos(username){
    try{
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
    }catch (err){
        createErrorCard('Problem Fetching Repos')

    }
}

 
function createUserCard(user){
    const cardHTML = `
        <div id="card" class="card">
            <div class ="avatar_div">
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>
            <div class="user-info">
            
               <div class="user_main">
                <h2 class="user_name" >${user.name}</h2>
                <h3 class="user_account">@${user.login}</h3> 
                <p class="user_bio">${user.bio}</p>
                <h4> ${user.date}</h4>
                </div>
                
                <ul>
                    <li> <strong>Repos</strong>${user.public_repos}</li>
                    <li> <strong>Followers</strong> ${user.followers}</li>
                    <li> <strong>Following</strong> ${user.following}</li>
                </ul>
                
                <div class="informations">
                    <div class="info1">
                    <i class="fa-solid fa-location-dot"></i>
                    <p >${user.location}</p>
                    </div>
                    <div class="info1">
                    <i class="fa-brands fa-twitter"></i>
                    <p >${user.twitter_username}</p>
                    </div>
                    <div class="info1">
                    <i class="fa-solid fa-link"></i>
                    <p >${user.blog}</p>
                    </div>
                    <div class="info1">
                    <i class="fa-solid fa-building"></i>
                    <p > ${user.company}</p>
                    </div>
                </div>
                <div id="repos"></div>
            </div>
        </div>
    `
    // const dateData = `data.created_at.slice(0, dateData.created_at.length - 10)`;
    main.innerHTML = cardHTML
}

function createErrorCard(msg){
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `
    main.innerHTML = cardHTML
}

function addReposToCard(repos){
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_black'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if(user){
        getUser(user)

        search.value = ''
    }
})

const lightMode = document.querySelector("#lightMode");
const container = document.querySelector('#container');
const DivlightMode = document.querySelector('#DivlightMode')
const logo = document.querySelector('#logo');
const logo1 = document.querySelector('#logo1');
const body = document.querySelector('body');
const DivSearch = document.querySelector('#DivSearch');
const dark = document.querySelector('#dark');
const card = document.querySelector('#cardiiiiii');



lightMode.addEventListener('click', () => {
    body.classList.toggle('show');
    lightMode.classList.toggle('show1')
    DivlightMode.classList.toggle('show')
    logo.classList.toggle('show1')
    logo1.classList.toggle('show2')
    dark.classList.toggle('dark1')
    // user.cardHTML.classList.toggle('show')
    // console.log(user);
});