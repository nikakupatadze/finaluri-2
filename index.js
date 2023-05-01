const lightMode = document.querySelector("#lightMode");
const container = document.querySelector('#container');
const DivlightMode = document.querySelector('#DivlightMode')
const DivSpace = document.querySelector('#Divspace');
const logo = document.querySelector('#logo');
const logo1 = document.querySelector('#logo1');
const body = document.querySelector('body');
const DivSearch = document.querySelector('#DivSearch');
const dark = document.querySelector('#dark');


lightMode.addEventListener('click', () => {
    body.classList.toggle('show');
    lightMode.classList.toggle('show1')
    container.classList.toggle('show')
    DivSpace.classList.toggle('show')
    DivlightMode.classList.toggle('show')
    logo.classList.toggle('show1')
    logo1.classList.toggle('show2')
    dark.classList.toggle('dark')
});

(function () {
const getUsers = async () => {
    const result = await fetch('https://api.github.com/users');
    const  users = result.json();
    console.log(users);
    
};
getUsers()
});