let dropdown_active_signal = false;

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

addEventListener("resize", () => {
  video_centerer();
});

addEventListener("scroll", () => {
  video_centerer();
});

function video_centerer() {
  const iterations = document.getElementsByClassName("video").length;

  for (let i = 0; i < iterations; i ++) {
    const application = 
    (document.getElementsByClassName("section")[i].getBoundingClientRect().width -
    document.getElementsByClassName("video")[i].getBoundingClientRect().width) / 2;

    document.getElementsByClassName("video")[i].style.left = application + "px"
  }

  //first try hell yeah -> I learned from my messy mistakes in books which i will change later :p
}


addEventListener("scroll", () => {
    const navbarWidth = document.getElementById("navbar").getBoundingClientRect().width;
    
    const startPos = navbarWidth * 0.1;       
    const endPos = navbarWidth * 0.8;          
    const distance = endPos - startPos;

    const totalHeight = document.getElementById("title_section").getBoundingClientRect().height + 
    
    document.getElementsByClassName("vertical_section_title")[0].getBoundingClientRect().height +
    document.getElementsByClassName("vertical_section_title")[1].getBoundingClientRect().height +
    document.getElementsByClassName("section")[0].getBoundingClientRect().height +
    document.getElementsByClassName("section")[1].getBoundingClientRect().height +
    document.getElementById("footer").getBoundingClientRect().height;

    const progress = Math.min(scrollY / totalHeight, 1);
    // console.log(scrollY);
    // console.log(totalHeight);

    const application = startPos + (progress * distance);
    document.getElementById("navbar_duck").style.left = `${application}px`;
});

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
}, 100);


// setInterval(() => {
//   let normSectionHeight = document.getElementsByClassName("section")[0].getBoundingClientRect().height;
//   for(let i = 0; i < document.getElementsByClassName("pos_middle").length; i++) {
//     document.getElementsByClassName("pos_middle")[i].style.bottom = `${normSectionHeight * 0.032}px`;
//   }
//   console.log(normSectionHeight);
// }, 100)