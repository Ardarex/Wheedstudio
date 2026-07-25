// =========================
// CUSTOM CURSOR
// =========================


const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});



document.querySelectorAll("a, .service-card, .logos div")
.forEach(item => {


    item.addEventListener("mouseenter",()=>{

        cursor.style.transform="scale(2)";
        
    });



    item.addEventListener("mouseleave",()=>{

        cursor.style.transform="scale(1)";

    });


});







// =========================
// SCROLL REVEAL
// =========================


const revealElements = document.querySelectorAll(
"section, .service-card, .artist-grid div, .about-box"
);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}


});


},{
threshold:.15
});




revealElements.forEach(el=>{


el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition=
"all 0.9s cubic-bezier(.17,.67,.32,1.3)";


observer.observe(el);


});







// =========================
// NUMBER COUNTER
// =========================


const counters=document.querySelectorAll(".counter");


let started=false;



const counterObserver=new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting && !started){


started=true;



counters.forEach(counter=>{


let target=
parseInt(counter.dataset.number);



let count=0;



let speed=
target/80;



let update=()=>{


if(count<target){


count+=speed;


counter.innerHTML=
Math.floor(count)+"+";


requestAnimationFrame(update);


}

else{


counter.innerHTML=
target+"+";


}



};



update();



});



}


});


});



if(counters.length){

counterObserver.observe(counters[0]);

}








// =========================
// HERO PARALLAX
// =========================


const heroCircle =
document.querySelector(".hero-circle");



window.addEventListener("mousemove", e=>{


let x =
(e.clientX / window.innerWidth - .5) * 40;


let y =
(e.clientY / window.innerHeight - .5) * 40;



if(heroCircle){


heroCircle.style.transform=
`translate(${x}px,${y}px) rotate(360deg)`;


}


});








// =========================
// MOBILE MENU
// =========================



const menu =
document.querySelector(".menu");

const nav =
document.querySelector("nav");



menu.addEventListener("click",()=>{


nav.classList.toggle("active");


});







// =========================
// SMOOTH LINK CLOSE
// =========================



document.querySelectorAll("nav a")
.forEach(link=>{


link.addEventListener("click",()=>{


nav.classList.remove("active");


});


});








// =========================
// BUTTON RIPPLE EFFECT
// =========================



document.querySelectorAll(".button")
.forEach(button=>{


button.addEventListener("click",function(e){


let ripple =
document.createElement("span");


ripple.className="ripple";


this.appendChild(ripple);



setTimeout(()=>{


ripple.remove();


},600);



});



});