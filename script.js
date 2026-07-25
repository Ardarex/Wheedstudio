// =================================
// WHEEDSTUDIO SCRIPT
// =================================



// CURSOR

const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove", (e)=>{

    if(cursor){

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    }

});



document.querySelectorAll(
"a, .button, .service-card, .logos div, .artist-grid div"
).forEach(item=>{


item.addEventListener("mouseenter",()=>{

    if(cursor){

        cursor.style.transform="scale(2)";

    }

});


item.addEventListener("mouseleave",()=>{

    if(cursor){

        cursor.style.transform="scale(1)";

    }

});


});









// SCROLL REVEAL


const revealItems = document.querySelectorAll(
"section, .service-card, .artist-grid div, .about-box, .numbers div"
);



revealItems.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(50px)";

    item.style.transition=
    "all .8s ease";

});



const revealObserver = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


},
{
threshold:.15
});



revealItems.forEach(item=>{

    revealObserver.observe(item);

});









// COUNTER 200 000+


const counters =
document.querySelectorAll(".counter");



let counterRunning=false;



function formatNumber(number){

return new Intl.NumberFormat("sk-SK")
.format(Math.floor(number));

}



const counterObserver =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting && !counterRunning){


counterRunning=true;



counters.forEach(counter=>{


let target =
Number(counter.dataset.number);



let current=0;



let speed =
target / 120;



function count(){



current += speed;



if(current < target){


counter.innerHTML =
formatNumber(current)+"+";


requestAnimationFrame(count);



}else{


counter.innerHTML =
formatNumber(target)+"+";


}



}



count();



});


}



});


},
{
threshold:.5
});



if(counters.length){

counterObserver.observe(counters[0]);

}









// MOBILE MENU


const menu =
document.querySelector(".menu");


const nav =
document.querySelector("nav");



if(menu){


menu.addEventListener("click",()=>{


nav.classList.toggle("active");


});


}





document.querySelectorAll("nav a")
.forEach(link=>{


link.addEventListener("click",()=>{


nav.classList.remove("active");


});


});









// SMOOTH SCROLL


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{


anchor.addEventListener("click",function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});









// HERO PARALLAX


const heroCircle =
document.querySelector(".hero-circle");



window.addEventListener("mousemove",(e)=>{


if(heroCircle){


let x =
(e.clientX / window.innerWidth - .5) * 40;


let y =
(e.clientY / window.innerHeight - .5) * 40;



heroCircle.style.transform =
`
translate(${x}px,${y}px)
rotate(360deg)
`;

}


});









// BUTTON RIPPLE


document.querySelectorAll(".button")
.forEach(button=>{


button.addEventListener("click",(e)=>{


let ripple =
document.createElement("span");


ripple.className="ripple";



let rect =
button.getBoundingClientRect();



ripple.style.left =
(e.clientX - rect.left)+"px";


ripple.style.top =
(e.clientY - rect.top)+"px";



button.appendChild(ripple);



setTimeout(()=>{


ripple.remove();


},600);



});


});









// HEADER BLUR PRI SCROLLE


const header =
document.querySelector("header");



window.addEventListener("scroll",()=>{


if(window.scrollY > 60){


header.style.background =
"rgba(5,5,5,.9)";


}else{


header.style.background =
"rgba(5,5,5,.45)";


}


});









// LOADING


window.addEventListener("load",()=>{


document.body.classList.add("loaded");


});