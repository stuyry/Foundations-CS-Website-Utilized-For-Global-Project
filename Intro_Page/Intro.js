let dropdown_active_signal = false;
let key_obtained = false;


function dropdowner() {
    if (!dropdown_active_signal) {
        dropdown_active_signal = true;
        document.getElementById("dropdown_container").style.animation = "dropdown_animation_in 0.5s ease-in-out";
        document.getElementById("dropdown_container").style.display = "flex";

    }
    else {
        dropdown_active_signal = false;
        document.getElementById("dropdown_container").style.animation = "dropdown_animation_out 0.5s ease-in-out";
        setTimeout(() => {
            document.getElementById("dropdown_container").style.display = "none";
        }, 490); //this is corresponding to the animation time! -> if you change one, you must change the other
    }
}

// addEventListener("scroll", () => {
//     if (window.scrollY > 80) {
//         document.getElementById("duck").style.animation = "duck_animation 1s ease-in-out";
//         setTimeout(() => {
//             document.getElementById("duck").style.display = "none"; 
//         }, 990);
//     }

//     if (window.scrollY > 230) {
//         document.getElementById("background_for_entrance").style.animation = "background_animation 1s ease-in-out";
//         document.getElementById("background_for_entrance").style.display = "inline"; 

//         document.getElementById("locked").style.animation = "lock_animation 1s ease-in-out";
//         document.getElementById("locked").style.display = "inline"; 

//     }

// });

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

addEventListener("scroll", () => {
    const navbarWidth = document.getElementById("navbar").getBoundingClientRect().width;

    const startPos = navbarWidth * 0.1;
    const endPos = navbarWidth * 0.8;
    const distance = endPos - startPos;

    const totalHeight = document.getElementById("sticky_container").getBoundingClientRect().height * 2;

    const progress = Math.min(scrollY / totalHeight, 1);
    console.log(scrollY);
    console.log(totalHeight);

    const application = startPos + (progress * distance * 1.8);
    document.getElementById("navbar_duck").style.left = `${application}px`;

    document.getElementById("start_button").style.opacity = progress * 2;
});

setInterval(() => { //nested in here because the display is none
    document.getElementById("dropdown_item_1").addEventListener("click", () => {
        window.location.href = "./Posters/Posters.html";
    });
    document.getElementById("dropdown_item_2").addEventListener("click", () => {
        window.location.href = "./Books/books.html";
    });
    document.getElementById("dropdown_item_3").addEventListener("click", () => {
        window.location.href = "./Films/films.html";
    });
    document.getElementById("dropdown_item_4").addEventListener("click", () => {
        window.location.href = "./Music/music.html";
    });
    document.getElementById("dropdown_item_5").addEventListener("click", () => {
        window.location.href = "./Radio_Shows/radio.html";
    });
}, 100);

setInterval(() => {
    let topToApply = (document.getElementById("start_button").getBoundingClientRect().height - document.getElementById("start_wrapper").getBoundingClientRect().height) / 2;
    document.getElementById("start_wrapper").style.top = topToApply + "px";

    document.getElementById("start_button").addEventListener("click", () => {
        window.location.href = "./Posters/Posters.html";
    });
}, 100)



