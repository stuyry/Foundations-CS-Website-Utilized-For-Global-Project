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

    console.log(green._rotation);
    console.log(yellow._rotation);
    console.log(pink._rotation);
    console.log(purple._rotation);
    console.log(neon._rotation);
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

document.getElementById("blue").addEventListener("click", onclicker);
setInterval(() => {
    massPhaseFixer();

    if (blue.isFront) {
        document.getElementById("blue").addEventListener("click", onclicker);
    }
    else {
        document.getElementById("blue").removeEventListener("click", onclicker);
    }
    
    if (red.isFront) {
        document.getElementById("red").addEventListener("click", onclicker);
    }
     else {
        document.getElementById("red").removeEventListener("click", onclicker);
    }
    
    if (green.isFront) {
        document.getElementById("green").addEventListener("click", onclicker);
    }
     else {
        document.getElementById("green").removeEventListener("click", onclicker);
    }
    
    if (yellow.isFront) {
        document.getElementById("yellow").addEventListener("click", onclicker);
    }
     else {
        document.getElementById("yellow").removeEventListener("click", onclicker);
    }
    
    if (purple.isFront) {
        document.getElementById("purple").addEventListener("click", onclicker);
    }
     else {
        document.getElementById("purple").removeEventListener("click", onclicker);
    }
    
    if (pink.isFront) {
        document.getElementById("pink").addEventListener("click", onclicker);
    }
     else {
        document.getElementById("pink").removeEventListener("click", onclicker);
    }
    
    if (neon.isFront) {
        document.getElementById("neon").addEventListener("click", onclicker);
    }
     else {
        document.getElementById("neon").removeEventListener("click", onclicker);
    }


    //TODO:!!
    // if (blue.isPresented) {
    //     document.getElementById("blue").addEventListener("click", onclicker);
    // }
    // else {
    //     document.getElementById("blue").removeEventListener("click", onclicker);
    // }
    
    // if (red.isPresented) {
    //     document.getElementById("red").addEventListener("click", onclicker);
    // }
    //  else {
    //     document.getElementById("red").removeEventListener("click", onclicker);
    // }
    
    // if (green.isPresented) {
    //     document.getElementById("green").addEventListener("click", onclicker);
    // }
    //  else {
    //     document.getElementById("green").removeEventListener("click", onclicker);
    // }
    
    // if (yellow.isPresented) {
    //     document.getElementById("yellow").addEventListener("click", onclicker);
    // }
    //  else {
    //     document.getElementById("yellow").removeEventListener("click", onclicker);
    // }
    
    // if (purple.isPresented) {
    //     document.getElementById("purple").addEventListener("click", onclicker);
    // }
    //  else {
    //     document.getElementById("purple").removeEventListener("click", onclicker);
    // }
    
    // if (pink.isPresented) {
    //     document.getElementById("pink").addEventListener("click", onclicker);
    // }
    //  else {
    //     document.getElementById("pink").removeEventListener("click", onclicker);
    // }
    
    // if (neon.isPresented) {
    //     document.getElementById("neon").addEventListener("click", onclicker);
    // }
    //  else {
    //     document.getElementById("neon").removeEventListener("click", onclicker);
    // }
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