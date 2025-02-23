const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');
const link = document.getElementById('link');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    nav.style.top = "3rem";
    link.style.width = "100vh";
    link1.style.width = "100vh";
    link2.style.width = "100vh";
    link3.style.width = "100vh";
    link.style.fontSize = "1.5rem";
    link1.style.fontSize = "1.5rem";
    link2.style.fontSize = "1.5rem";
    link3.style.fontSize = "1.5rem";
    link.style.height = "10vh";
    link1.style.height = "10vh";
    link2.style.height = "10vh";
    link3.style.height = "10vh";
   
});
