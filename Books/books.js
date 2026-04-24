let dropdown_active_signal = false;
let europeHeight = 0;
let isLoaded = false;
const flashIterations = 3;

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

//I learned 2 things here. you have to check if everything is loaded, and that I should be looking more into the list of events like resize :)
addEventListener("DOMContentLoaded", () => {
    isLoaded = true;
    europeHeight = document.getElementById("Europe").getBoundingClientRect().height;
    addEventListener("resize", () => {
        europeHeight = document.getElementById("Europe").getBoundingClientRect().height;
    })
});

function scrollToBook(bookNumber) {
    switch (bookNumber) {
        case 0:
            scrollTo(0, 1000 + (innerWidth * 0.3) + 300 + (europeHeight * 0.04));
            break;
        case 1:

            break;
        case 2:

            break;
        case 3:

            break;
    }

    borderFlashing("book_wrapper", bookNumber, 0);
}

//not my proudest moment :p 
function borderFlashing(className, index, count) {
    if (count == flashIterations) {
        return;
    }

    document.getElementsByClassName(className)[index].style.animation = "borderFlashIn 1s ease-in-out";
    setTimeout(() => {
        document.getElementsByClassName(className)[index].style.border = "solid 6px yellow";

        document.getElementsByClassName(className)[index].style.removeProperty("animation");
        document.getElementsByClassName(className)[index].style.animation = "borderFlashOut 1s ease-in-out";

        setTimeout(() => {
            document.getElementsByClassName(className)[index].style.border = "dashed 4px #91837e";
            document.getElementsByClassName(className)[index].style.removeProperty("animation");
        }, 990);

    }, 990);

    setTimeout(() => {
        borderFlashing(className, index, count + 1);
    }, 2000)

    //for loop wasn't working so I made it recursive
}
