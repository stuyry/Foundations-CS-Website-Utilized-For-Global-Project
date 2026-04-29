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
  vertical_video_centerer();
  video_centerer();
});

addEventListener("scroll", () => {
  vertical_video_centerer();
  video_centerer();
});

addEventListener("scroll", () => {
    const navbarWidth = document.getElementById("navbar").getBoundingClientRect().width;
    
    const startPos = navbarWidth * 0.1;       
    const endPos = navbarWidth * 0.9;          
    const distance = endPos - startPos;

    const totalHeight = document.getElementById("title_section").getBoundingClientRect().height + 
    document.getElementsByClassName("smaller_video_section")[0].getBoundingClientRect().height +
    document.getElementById("footer").getBoundingClientRect().height +
    document.getElementsByClassName("smaller_video_section")[0].getBoundingClientRect().height;


    const progress = Math.min(scrollY / totalHeight, 1);
    console.log(scrollY);
    console.log(totalHeight);

    const application = startPos + (progress * distance * 1.2);
    document.getElementById("navbar_duck").style.left = `${application}px`;
});

function vertical_video_centerer() {
  
    const application = 
    ((innerWidth / 2) -
    document.getElementsByClassName("video")[1].getBoundingClientRect().width) / 2;

    document.getElementsByClassName("video")[0].style.left = application + "px"
    document.getElementsByClassName("video")[1].style.left = (application + innerWidth / 2) + "px"

  //first try hell yeah -> I learned from my messy mistakes in books which i will change later :p
}

setInterval(() => { //nested in here because the display is none
    document.getElementById("dropdown_item_1").addEventListener("click", () => {
        window.location.href = "../../Posters/Posters.html";
    });
    document.getElementById("dropdown_item_2").addEventListener("click", () => {
        window.location.href = "../../Books/books.html";
    });
    document.getElementById("dropdown_item_3").addEventListener("click", () => {
        window.location.href = "../../Films/films.html";
    });
    document.getElementById("dropdown_item_4").addEventListener("click", () => {
        window.location.href = "../../Music/music.html";
    });
    document.getElementById("dropdown_item_5").addEventListener("click", () => {
        window.location.href = "../../Radio_Shows/radio.html";
    });
}, 100);