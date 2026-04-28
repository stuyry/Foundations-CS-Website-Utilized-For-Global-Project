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

addEventListener("resize", () => {
    video_centerer();

    for (let i = 0; i < document.getElementsByClassName("drop_item").length; i++) {
        if (document.getElementsByClassName("drop_item")[i].getBoundingClientRect().width < 68.53571319580078) {
            document.getElementsByClassName("drop_item")[i].style.transform = "rotateX(90deg)";
        }
    }
});

addEventListener("scroll", () => {
    video_centerer();
});

function video_centerer() {
    const iterations = document.getElementsByClassName("video").length;

    for (let i = 0; i < iterations; i++) {
        const application =
            (document.getElementById("video_section").getBoundingClientRect().width -
                document.getElementsByClassName("video")[i].getBoundingClientRect().width) / 2;

        document.getElementsByClassName("video")[i].style.left = application + "px"
    }

    //first try hell yeah -> I learned from my messy mistakes in books which i will change later :p
}

setInterval(() => {

}, 100)