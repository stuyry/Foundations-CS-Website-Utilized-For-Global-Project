let dropdown_active_signal = false;
let imageClicked = false;
let imageClickedRight = false;

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

//for later, make an array of every left side and right side image mover instance then loop through those numbers and reset at certain points. but for this small webPAGE it should suffice
addEventListener("scroll", () => {
    if (window.scrollY > 500 && window.scrollY < 800) {
        document.getElementById("duck").style.animation = "duck_animation 1s ease-in-out";
        setTimeout(() => {
            document.getElementById("duck").style.display = "none";
        }, 990);
    }

    if (window.scrollY > 2600) {
       imageClicked = true;
       image_mover_left(0, 0);
       imageClickedRight = true;
       image_mover_right(0, 1);
    }

    if (window.scrollY < 2600) {
        imageClicked = true;
       image_mover_left(1, 2);
       imageClickedRight = true;
       image_mover_right(1, 3);
    }

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
function image_mover_left(index, clickerIndex) {
    if (!imageClicked) {
        document.getElementsByClassName("image_tooltip_section")[index].style.animation = "see_image 1s ease-in-out";
        document.getElementsByClassName("image_clicker")[clickerIndex].style.animation = "rotate_arrow 1s ease-in-out";
        imageClicked = true;

        setTimeout(() => {
            document.getElementsByClassName("image_tooltip_section")[index].style.left = "0px";
            document.getElementsByClassName("image_clicker")[clickerIndex].style.transform = "rotateZ(180deg)";
        }, 990);
    }
    else {
        document.getElementsByClassName("image_tooltip_section")[index].style.animation = "see_image_out 1s ease-in-out";
        document.getElementsByClassName("image_clicker")[clickerIndex].style.animation = "rotate_arrow_back 1s ease-in-out";
        imageClicked = false;
        setTimeout(() => {
            document.getElementsByClassName("image_tooltip_section")[index].style.left = "-345px";
            document.getElementsByClassName("image_clicker")[clickerIndex].style.transform = "rotateZ(0deg)";
        }, 990);
    }
}

function image_mover_right(index, clickerIndex) {
    if (!imageClickedRight) {
        document.getElementsByClassName("right_image_tooltip_section")[index].style.animation = "see_image_right 1s ease-in-out";
        document.getElementsByClassName("image_clicker")[clickerIndex].style.animation = "rotate_arrow_back 1s ease-in-out";
        imageClickedRight = true;

        setTimeout(() => {
            document.getElementsByClassName("right_image_tooltip_section")[index].style.right = "0px";
            document.getElementsByClassName("image_clicker")[clickerIndex].style.transform = "rotateZ(0deg)";
        }, 990);
    }
    else {
        document.getElementsByClassName("right_image_tooltip_section")[index].style.animation = "see_image_right_out 1s ease-in-out";
        document.getElementsByClassName("image_clicker")[clickerIndex].style.animation = "rotate_arrow 1s ease-in-out";
        imageClickedRight = false;
        setTimeout(() => {
            document.getElementsByClassName("right_image_tooltip_section")[index].style.right = "-345px";
            document.getElementsByClassName("image_clicker")[clickerIndex].style.transform = "rotateZ(180deg)";
        }, 990);
    }
}
