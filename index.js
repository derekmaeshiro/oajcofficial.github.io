import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/rERcIt58XiJMWVLP/scene.splinecode');

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');
    
        //animate links
        navLinks.forEach((link, index)=> {
            if(link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

console.log(window.innerHeight)
console.log(window.innerWidth)