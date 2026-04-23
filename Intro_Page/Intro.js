let dropdown_active_signal = false;
let key_obtained = false;

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

addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        document.getElementById("duck").style.animation = "duck_animation 1s ease-in-out";
        setTimeout(() => {
            document.getElementById("duck").style.display = "none"; 
        }, 990);
    }

    if (window.scrollY > 230) {
        document.getElementById("background_for_entrance").style.animation = "background_animation 1s ease-in-out";
        document.getElementById("background_for_entrance").style.display = "inline"; 

        document.getElementById("locked").style.animation = "lock_animation 1s ease-in-out";
        document.getElementById("locked").style.display = "inline"; 
        
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

