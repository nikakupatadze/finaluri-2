const lightMode = document.querySelector("#lightMode");
const container = document.querySelector('#container');
const DivlightMode = document.querySelector('#DivlightMode')
const DivSpace = document.querySelector('#Divspace');
const logo = document.querySelector('#logo');
const logo1 = document.querySelector('#logo1');
const body = document.querySelector('body');
const DivSearch = document.querySelector('#DivSearch');

console.log(container);
lightMode.addEventListener('click', () => {
    // DivSearch.classList.toggle('show');
    body.classList.toggle('show');
    lightMode.classList.toggle('show1')
    container.classList.toggle('show')
    DivSpace.classList.toggle('show')
    DivlightMode.classList.toggle('show')
    logo.classList.toggle('show1')
    logo1.classList.toggle('show1')
});
