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
            <div id="user-info" class="user-info">
            
               <div class="user_main">
                <h2 class="user_name" >${user.name}</h2>
                <h3 class="user_account">@${user.login}</h3> 
                <p class="user_bio">${user.bio}</p>
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
const DivlightMode = document.querySelector('#DivlightMode')
const logo = document.querySelector('#logo');
const logo1 = document.querySelector('#logo1');
const body = document.querySelector('body');
const glass = document.querySelector('#glass');
const search_div = document.querySelector('#search_div');

lightMode.addEventListener('click', () => {
    body.classList.toggle('show');
    lightMode.classList.toggle('show1')
    DivlightMode.classList.toggle('show')
    logo.classList.toggle('show1')
    logo1.classList.toggle('show2')
    form.classList.toggle('gray');
    search.classList.toggle('gray');
  search_div.classList.toggle('gray');
  card.classList.toggle('gray');
});