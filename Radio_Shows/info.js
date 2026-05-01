let dropdown_active_signal = false;
const referenceHeight = innerHeight;


function dropdowner() {
    if (!dropdown_active_signal) {
        dropdown_active_signal = true;

        document.getElementById("dropdown_formatter").animate([
            {
                top: `${referenceHeight * 0.08}px`,
                opacity: "0"
            },
            {
                top: `${referenceHeight * 0.15}px`,
                opacity: "1"
            }
        ], { duration: 500, easing: "ease-in-out", fill: "forwards" });
    }

    else {
        dropdown_active_signal = false;
        document.getElementById("dropdown_formatter").animate([
            {
                top: `${referenceHeight * 0.15}px`,
                opacity: "1"
            },
            {
                top: `${referenceHeight * 0.08}px`,
                opacity: "0"
            }
        ], { duration: 500, easing: "ease-in-out", fill: "forwards" });

    }
}

addEventListener("resize", () => {
    video_centerer();
});

addEventListener("scroll", () => {
    video_centerer();
});

addEventListener("scroll", () => {
    const navbarWidth = document.getElementById("navbar").getBoundingClientRect().width;

    const startPos = navbarWidth * 0.1;
    const endPos = navbarWidth * 0.8;
    const distance = endPos - startPos;

    const totalHeight = document.getElementById("title_section").getBoundingClientRect().height +
        document.getElementsByClassName("video_section")[0].getBoundingClientRect().height +
        document.getElementById("footer").getBoundingClientRect().height +
        document.getElementsByClassName("video_section")[1].getBoundingClientRect().height;

    const progress = Math.min(scrollY / totalHeight, 1);
    console.log(scrollY);
    console.log(totalHeight);

    const application = startPos + (progress * distance * 1.2);
    document.getElementById("navbar_duck").style.left = `${application}px`;
});
function video_centerer() {
    const iterations = document.getElementsByClassName("video").length;


    const application =
        (innerWidth -
            document.getElementsByClassName("video")[1].getBoundingClientRect().width) / 2;

    document.getElementsByClassName("video")[1].style.left = application + "px"
    document.getElementsByClassName("video")[0].style.left = application + "px"


    //first try hell yeah -> I learned from my messy mistakes in books which i will change later :p
}


setInterval(() => { //nested in here because the display is none
    document.getElementById("dropdown_item_1").addEventListener("click", () => {
        window.location.href = "../Posters/Posters.html";
    });
    document.getElementById("dropdown_item_2").addEventListener("click", () => {
        window.location.href = "../Books/books.html";
    });
    document.getElementById("dropdown_item_3").addEventListener("click", () => {
        window.location.href = "../Films/films.html";
    });
    document.getElementById("dropdown_item_4").addEventListener("click", () => {
        window.location.href = "../Music/music.html";
    });
    document.getElementById("dropdown_item_5").addEventListener("click", () => {
        window.location.href = "../Radio_Shows/radio.html";
    });

    setHeights();
    setWidths();
}, 100);

function setHeights() {
    let application = Math.min(innerWidth, referenceHeight);
    for (let i = 0; i < document.getElementsByClassName("video_section").length; i++) {
        document.getElementsByClassName("video_section")[i].style.height = `${application}px`;
    }

    document.getElementById("title_section").style.height = `${application}px`;

    document.getElementById("navbar").style.height = `${referenceHeight * 0.08}px`;

    document.getElementById("dropdown_formatter").style.height = `${referenceHeight * 0.13}px`;

    document.getElementById("dropdown_formatter").style.top = `${referenceHeight * 0.15}px`;

    centerNavbar();
}

function setWidths() {
    let musicImageApplication = Math.min(innerWidth, document.getElementById("title_section").getBoundingClientRect().height * 0.45);
    document.getElementById("music_intro_image_container").style.width = `${musicImageApplication}px`;
    document.getElementsByClassName("video")[0].style.width = `${musicImageApplication}px`;
    document.getElementsByClassName("video")[1].style.width = `${musicImageApplication}px`;

}



function centerNavbar() {
    let application = (innerWidth - document.getElementById("dropdown_formatter").getBoundingClientRect().width) / 2;
    document.getElementById("dropdown_formatter").style.left = `${application}px`;
}