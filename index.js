const toggleBtn = document.querySelector("#toggle-btn");
const closeBtn = document.querySelector("#close-btn");
const nav = document.querySelector(".nav");

toggleBtn.addEventListener('click',() => {
    nav.classList.add('active')
})
closeBtn.addEventListener('click',() => {
    nav.classList.remove('active');
})