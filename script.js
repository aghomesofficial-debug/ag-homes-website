// =============================
// AG HOMES V4
// =============================

// Smooth Navigation
document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Counter Animation

const counters=document.querySelectorAll(".stat h1");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const text=counter.innerText;

const target=parseInt(text);

if(isNaN(target)) return;

let count=0;

const speed=Math.max(1,Math.ceil(target/80));

function update(){

count+=speed;

if(count<target){

counter.innerText=count+"+";

requestAnimationFrame(update);

}
else{

counter.innerText=text;

}

}

update();

observer.unobserve(counter);

}

});

});

counters.forEach(c=>observer.observe(c));

// Gallery Hover

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

window.open(img.src,"_blank");

});

});// ===== Hero Background Slider =====

const hero = document.querySelector(".hero");

const heroImages = [
"images/project1.png",
"images/project2.png",
"images/project3.png",
"images/project4.png",
"images/project5.png",
"images/project6.png"
];

let currentImage = 0;

function changeHeroBackground(){

hero.style.backgroundImage =
`linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),
url('${heroImages[currentImage]}')`;

hero.style.backgroundSize = "cover";
hero.style.backgroundPosition = "center";

currentImage++;

if(currentImage >= heroImages.length){
currentImage = 0;
}

}

changeHeroBackground();

setInterval(changeHeroBackground,3000);