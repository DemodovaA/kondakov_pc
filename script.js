const btn = document.querySelector('#theme-toggle')
console.log(btn);

const page = document.documentElement;

btn.addEventListener('click', ()=>{
const theme = page.getAttribute('data-theme') === 'light'
?'dark': 'light';

page.setAttribute('data-theme', theme)
})
