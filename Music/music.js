import { Slide } from './Slide.js';

const red = new Slide(0);
const blue = new Slide(6);
const green = new Slide(1);
const yellow = new Slide(2);
const pink = new Slide(3);
const purple = new Slide(4);
const neon = new Slide(5);

function onclicker() {
    red.transitioner();
    blue.transitioner();
    green.transitioner();
    yellow.transitioner();
    pink.transitioner();
    purple.transitioner();
    neon.transitioner();

    // console.log(green._rotation);
    // console.log(yellow._rotation);
    // console.log(pink._rotation);
    // console.log(purple._rotation);
    // console.log(neon._rotation);
}
function massPhaseFixer() {
    red.phaseFixer();
    blue.phaseFixer();
    green.phaseFixer();
    yellow.phaseFixer();
    pink.phaseFixer();
    purple.phaseFixer();
    neon.phaseFixer();
}

//messy because i need to call the onclicker thingy to call transition but that complicates things as I would need to use
//the java equivalent of ... and then do whole bunch of cleaning - it beats me
red.element.addEventListener("click", () => {
    if(red.isFront) {
        onclicker();
    }
    else if (red.isPresented) {
        window.location.href = "VeraLynn/info.html";
    }
});

blue.element.addEventListener("click", () => {
    if(blue.isFront) {
        onclicker();
    }
    else if (blue.isPresented) {
        window.location.href = "NoelCowards/info.html";
    }
});

green.element.addEventListener("click", () => {
    if(green.isFront) {
        onclicker();
    }
    else if (green.isPresented) {
        window.location.href = "LouisArmStrong/info.html";
    }
});

yellow.element.addEventListener("click", () => {
    if(yellow.isFront) {
        onclicker();
    }
    else if (yellow.isPresented) {
        window.location.href = "Kelly/info.html";
    }
});


pink.element.addEventListener("click", () => {
    if(pink.isFront) {
        onclicker();
    }
    else if (pink.isPresented) {
        window.location.href = "AndrewSisters/info.html";
    }
});

purple.element.addEventListener("click", () => {
    if(purple.isFront) {
        onclicker();
    }
    else if (purple.isPresented) {
        window.location.href = "Flanagan/info.html";
    }
});

neon.element.addEventListener("click", () => {
    if(neon.isFront) {
        onclicker();
    }
    else if (neon.isPresented) {
        window.location.href = "GracieFields/info.html";
    }
});


setInterval(() => {
    massPhaseFixer();
}, 100);


let dropdown_active_signal = false;

function dropdowner() {
    if (!dropdown_active_signal) {
        dropdown_active_signal = true;
        document.getElementById("dropdown_container").style.animation = "dropdown_animation_in 0.5s ease-in-out";
        document.getElementById("dropdown_container").style.display = "inline";

    }
    else {
        dropdown_active_signal = false;
        document.getElementById("dropdown_container").style.animation = "dropdown_animation_out 0.5s ease-in-out";
        setTimeout(() => {
            document.getElementById("dropdown_container").style.display = "none";
        }, 490); //this is corresponding to the animation time! -> if you change one, you must change the other
    }
}


document.getElementById("navbar").addEventListener("click", dropdowner);


