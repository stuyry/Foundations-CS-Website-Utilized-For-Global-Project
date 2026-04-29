let dropdown_active_signal = false;

let imageClickedLeft1 = false;
let imageClickedLeft2 = false;
let imageClickedRight1 = false;
let imageClickedRight2 = false;

let leftWidth1;
let rightWidth1;
let leftWidth2;
let rightWidth2;

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

addEventListener("resize", () => {
    variableSetter();

    image_clicker_centerer();
});

addEventListener("DOMContentLoaded", () => {
    variableSetter();

    image_clicker_centerer();
});

setInterval(() => {
    variableSetter();

   image_clicker_centerer();
}, 1000)

//for later, make an array of every left side and right side image mover instance then loop through those numbers and reset at certain points. but for this small webPAGE it should suffice
addEventListener("scroll", () => {
    variableSetter();

    image_clicker_centerer();
    
    if (window.scrollY > 500 && window.scrollY < 800) {
        document.getElementById("duck").style.animation = "duck_animation 1s ease-in-out";
        setTimeout(() => {
            document.getElementById("duck").style.display = "none";
        }, 990);
    }

    // if (window.scrollY > 2600) {
    //     imageClicked = true;
    //     image_mover_left1();
    //     imageClickedRight = true;
    //     image_mover_right1();
    // }

    // if (window.scrollY < 2600) {
    //     imageClicked = true;
    //     image_mover_left2();
    //     imageClickedRight = true;
    //     image_mover_right2();
    // }
});

// function login_checker() {
//     let password = document.getElementById("password_input").value;
// }


//ADD ANIMATIONS LIKE FOR THE LOCK IT SHOULD DISSAPEAR AND TRANSFORM ITSELF DOWN AND THEN THE UNLOCKED LOCK SHOULD FADE IN I JS DONT HAVE TIME AND NEED TO MOVE ON
function key_mover() {
    key_obtained = true;
    document.getElementById("key").style.display = "none";
}

function key_checker() {
    if (key_obtained) {
        document.getElementById("locked").style.display = "none";
        document.getElementById("unlocked").style.display = "inline";
    }
}

//learned that when you use classNames you must specify the element you are using as an array index -> makes good sense to me
function image_mover_left1(index = 0, clickerIndex = 0) {
    if (!imageClickedLeft1) { //this is where the animation updater should be called!!!!!
        document.getElementsByClassName("image_tooltip_section")[index].animate([
            { left: (-1 * leftWidth1) + "px" }, // from
            { left: 0 + "px" }          // to
        ], {
            duration: 1000,
            easing: "ease-in-out",
            
        });
        document.getElementsByClassName("image_clicker")[clickerIndex].style.animation = "rotate_arrow 1s ease-in-out";
        imageClickedLeft1 = true;

        setTimeout(() => {
            image_clicker_centerer();
            document.getElementsByClassName("image_clicker")[clickerIndex].style.transform = "rotateZ(180deg)";
        }, 990);
    }
    else {
        document.getElementsByClassName("image_tooltip_section")[index].animate([
    { left: 0 + "px" },
    { left: (-1 * leftWidth1) + "px" }
], {
    duration: 1000,
    easing: "ease-in-out",
    
});
        document.getElementsByClassName("image_clicker")[clickerIndex].style.animation = "rotate_arrow_back 1s ease-in-out";
        imageClickedLeft1 = false;
        setTimeout(() => {
            image_clicker_centerer();
            document.getElementsByClassName("image_clicker")[clickerIndex].style.transform = "rotateZ(0deg)";
        }, 990);
    }
}

function image_mover_left2(index = 1, clickerIndex = 2) {
    if (!imageClickedLeft2) { //this is where the animation updater should be called!!!!!
        document.getElementsByClassName("image_tooltip_section")[index].animate([
            { left: (-1 * leftWidth2) + "px" }, // from
            { left: 0 + "px" }          // to
        ], {
            duration: 1000,
            easing: "ease-in-out",
            
        });
        document.getElementsByClassName("image_clicker")[clickerIndex].style.animation = "rotate_arrow 1s ease-in-out";
        imageClickedLeft2 = true;

        setTimeout(() => {
            image_clicker_centerer();
            document.getElementsByClassName("image_clicker")[clickerIndex].style.transform = "rotateZ(180deg)";
        }, 990);
    }
    else {
        document.getElementsByClassName("image_tooltip_section")[index].animate([
    { left: 0 + "px" },
    { left: (-1 * leftWidth2) + "px" }
], {
    duration: 1000,
    easing: "ease-in-out",
   
});
        document.getElementsByClassName("image_clicker")[clickerIndex].style.animation = "rotate_arrow_back 1s ease-in-out";
        imageClickedLeft2 = false;
        setTimeout(() => {
            image_clicker_centerer();
            document.getElementsByClassName("image_clicker")[clickerIndex].style.transform = "rotateZ(0deg)";
        }, 990);
    }
}

function image_mover_right1(index = 0, clickerIndex = 1) {
    if (!imageClickedRight1) {
        document.getElementsByClassName("right_image_tooltip_section")[index].animate([
            { left: (innerWidth) + "px" }, // from
            { left: innerWidth - rightWidth1  + "px" }          // to
        ], {
            duration: 1000,
            easing: "ease-in-out",
            
        });
        document.getElementsByClassName("image_clicker")[clickerIndex].style.animation = "rotate_arrow_back 1s ease-in-out";
        imageClickedRight1 = true;

        setTimeout(() => {
            image_clicker_centerer();
            document.getElementsByClassName("image_clicker")[clickerIndex].style.transform = "rotateZ(0deg)";
        }, 990);
    }
    else {
        document.getElementsByClassName("right_image_tooltip_section")[index].animate([
            { left:  innerWidth - rightWidth1 + "px" }, // from
            { left: innerWidth + "px" }          // to
        ], {
            duration: 1000,
            easing: "ease-in-out",
            
        });
        document.getElementsByClassName("image_clicker")[clickerIndex].style.animation = "rotate_arrow 1s ease-in-out";
        imageClickedRight1 = false;
        setTimeout(() => {
            image_clicker_centerer();
            document.getElementsByClassName("image_clicker")[clickerIndex].style.transform = "rotateZ(180deg)";
        }, 990);
    }
}

function image_mover_right2(index = 1, clickerIndex = 3) {
     if (!imageClickedRight2) {
        document.getElementsByClassName("right_image_tooltip_section")[index].animate([
            { right: -1 * rightWidth2 + "px" }, // from
            { right: 0 + "px" }          // to
        ], {
            duration: 1000,
            easing: "ease-in-out",
            
        });
        document.getElementsByClassName("image_clicker")[clickerIndex].style.animation = "rotate_arrow_back 1s ease-in-out";
        imageClickedRight2 = true;

        setTimeout(() => {
            image_clicker_centerer();
            document.getElementsByClassName("image_clicker")[clickerIndex].style.transform = "rotateZ(0deg)";
        }, 990);
    }
    else {
        document.getElementsByClassName("right_image_tooltip_section")[index].animate([
            { right: 0 + "px" }, // from
            { right: -1 * rightWidth2  + "px" }          // to
        ], {
            duration: 1000,
            easing: "ease-in-out",
            
        });
        document.getElementsByClassName("image_clicker")[clickerIndex].style.animation = "rotate_arrow 1s ease-in-out";
        imageClickedRight2 = false;
        setTimeout(() => {
            image_clicker_centerer();
            document.getElementsByClassName("image_clicker")[clickerIndex].style.transform = "rotateZ(180deg)";
        }, 990);
    }
}


function variableSetter() {
    leftWidth1 = document.getElementsByClassName("image_tooltip_section")[0].getBoundingClientRect().width;
    leftWidth2 = document.getElementsByClassName("image_tooltip_section")[1].getBoundingClientRect().width;
    rightWidth1 = document.getElementsByClassName("right_image_tooltip_section")[0].getBoundingClientRect().width;
    rightWidth2 = document.getElementsByClassName("right_image_tooltip_section")[1].getBoundingClientRect().width;
}

function image_clicker_centerer() {

    if (imageClickedLeft1) {
        document.getElementsByClassName("image_tooltip_section")[0].style.left = 0 + "px";
    } 
    else {
        document.getElementsByClassName("image_tooltip_section")[0].style.left = (-1 * leftWidth1) + "px";
    }

    if(imageClickedLeft2) {
        document.getElementsByClassName("image_tooltip_section")[1].style.left = 0 + "px";
    } else {
        document.getElementsByClassName("image_tooltip_section")[1].style.left = (-1 * leftWidth2) + "px";
    }

    if (imageClickedRight1) {

    document.getElementsByClassName("right_image_tooltip_section")[0].style.right =  0 + "px";
    } else {
    document.getElementsByClassName("right_image_tooltip_section")[0].style.right = -1* rightWidth1 + "px";
    }

    if (imageClickedRight2) {
    document.getElementsByClassName("right_image_tooltip_section")[1].style.right =  0 + "px";
    } else {
    document.getElementsByClassName("right_image_tooltip_section")[1].style.right =  -1 * rightWidth1 + "px";
    }
            
    
}

addEventListener("scroll", () => {
    const navbarWidth = document.getElementById("navbar").getBoundingClientRect().width;
    
    const startPos = navbarWidth * 0.1;       
    const endPos = navbarWidth * 0.85;          
    const distance = endPos - startPos;

    const totalHeight = document.getElementById("title_section").getBoundingClientRect().height + 
    document.getElementById("Slide_1").getBoundingClientRect().height + 
    document.getElementById("Slide_2").getBoundingClientRect().height + 
    document.getElementById("footer").getBoundingClientRect().height;

    const progress = Math.min(scrollY / totalHeight, 1);
    console.log(scrollY);
    console.log(innerHeight);

    const application = startPos + (progress * distance);
    document.getElementById("navbar_duck").style.left = `${application}px`;
});

// function transformRightClickerWidth(width) {
//     return (innerWidth / 1.455) + width;
// }

// function update_clicker_animations() {
//     const stylesheeter = document.styleSheets[5];
//     const see_image_keyframe = stylesheeter.cssRules[0];
//     const see_image_out_keyframe = stylesheeter.cssRules[1];
//     const see_image_right_keyframe = stylesheeter.cssRules[4];
//     const see_image_right_out_keyframe = stylesheeter.cssRules[5];

//     console.log(stylesheeter.href);

//     if (leftWidth1) {
//         see_image_keyframe.cssRules[0].style.setProperty("left", (-1 * leftWidth1) + "px");

//         see_image_keyframe.cssRules[1].style.setProperty("left", leftWidth1 + "px");
    
//         see_image_out_keyframe.cssRules[1].style.setProperty("left", (-1 * leftWidth1) + "px");

//         see_image_out_keyframe.cssRules[0].style.setProperty("left", leftWidth1 + "px");
//     }

//     if (rightWidth1) {
//         see_image_right_keyframe.cssRules[0].style.setProperty("left", transformRightClickerWidth(rightWidth1) + "px");

//         see_image_right_keyframe.cssRules[1].style.setProperty("left", (transformRightClickerWidth(rightWidth1) - rightWidth1) + "px");
    
//         see_image_right_out_keyframe.cssRules[1].style.setProperty("left", transformRightClickerWidth(rightWidth1) + "px");

//         see_image_right_out_keyframe.cssRules[0].style.setProperty("left", (transformRightClickerWidth(rightWidth1) - rightWidth1) + "px");
//     }

// }

