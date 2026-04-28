let dropdown_active_signal = false;
let sectionHeight = 0;
let isLoaded = false;
const flashIterations = 3;

let transformed = false;

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

    multiImageContainerCheck(0);
    multiImageContainerCheck(1);
    singleImageContainerCheck(0);
    singleImageContainerCheck(1);
    sectionHeight = document.getElementsByClassName("section")[0].getBoundingClientRect().height;

    // console.log(document.getElementsByClassName("book_wrapper")[1].getBoundingClientRect().width);
    addEventListener("resize", () => {

        // console.log(document.getElementsByClassName("book_wrapper")[1].getBoundingClientRect().width);
        multiImageContainerCheck(0);
        multiImageContainerCheck(1);
        singleImageContainerCheck(0);
        singleImageContainerCheck(1);
        sectionHeight = document.getElementsByClassName("section")[0].getBoundingClientRect().height;
    })
});

function multiImageContainerCheck(index) {
    // if (innerWidth > 1113 && !transformed) {
    //     const normalOffset = document.getElementsByClassName("book")[index].getBoundingClientRect().width * 0.15;
    //     const missingOffset = (document.getElementsByClassName("book_wrapper")[index].getBoundingClientRect().width - 700) / 2;
    //     const offsetToApply = normalOffset + missingOffset;
    //     document.getElementsByClassName("flex_image_appear")[index].style.left = offsetToApply + "px";
    // }
    // else if (innerWidth > 1113 && transformed) {
    //     const normalOffset = document.getElementsByClassName("book")[index].getBoundingClientRect().width * 0.15;
    //     const missingOffset = ((document.getElementsByClassName("book_wrapper")[index].getBoundingClientRect().width * 7 / 9) - 700) / 2;
    //     //accounts for extra width by converting the 90% width to what it would be at 70% (7 : 9 ratio)
    //     const offsetToApply = normalOffset + missingOffset;
    //     document.getElementsByClassName("flex_image_appear")[index].style.left = offsetToApply + "px";
    // }
    // else {
    //     document.getElementsByClassName("flex_image_appear")[index].style.left = "15%";
    // }

    let backgroundWidth = document.getElementsByClassName("section")[index].getBoundingClientRect().width;
    let itemWidth = document.getElementsByClassName("flex_image_appear")[index].getBoundingClientRect().width;
    let offsetToApply = (backgroundWidth - itemWidth) / 2.5;

    
    document.getElementsByClassName("flex_image_appear")[index].style.left = offsetToApply + "px";
}

function singleImageContainerCheck(singleImageIndex) {
    let backgroundWidth = document.getElementsByClassName("section")[singleImageIndex].getBoundingClientRect().width;
    let itemWidth = document.getElementsByClassName("single_image")[singleImageIndex].getBoundingClientRect().width;
    let offsetToApply = (backgroundWidth - itemWidth) / 1.35;

    document.getElementsByClassName("single_image")[singleImageIndex].style.left = offsetToApply + "px";
}

function scrollToBook(bookNumber) {
    switch (bookNumber) {
        case 0:
            //utilize getting the client rectangle and the height values each time instead of manual
            scrollTo(0, 1000 + (innerWidth * 0.3) + 300 + (sectionHeight * 0.04));
            //manual adjustment will be subtracted at the end
            break;
        case 1:

            break;
        case 2:

            break;
        case 3:

            break;
    }

    //always should be 0!! -> it gets added to such so it amounts to the flash iterations or the amount of the times to make the border yello
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

function seeMultiImages(index, multImageContainerIndex) {
    transformed = true; 

    document.getElementsByClassName("flex_container_for_image_clicker")[index].style.animation = "button_swap 1s ease-in-out";
    document.getElementsByClassName("book_wrapper")[index].style.animation = "multi_image_description_mover 1s ease-in-out";

    document.getElementsByClassName("book_description")[index].style.animation = "text_shrinker 1s ease-in-out";
    document.getElementsByClassName("book_title")[index].style.animation = "title_shrink 1s ease-in-out";

    setTimeout(() => {
        document.getElementsByClassName("flex_container_for_image_clicker")[index].style.left = "-100%";

        document.getElementsByClassName("book_wrapper")[index].style.width = "90%";
        document.getElementsByClassName("book_wrapper")[index].style.height = "32.5%";
        document.getElementsByClassName("book_wrapper")[index].style.top = "37.5%";
        document.getElementsByClassName("book_wrapper")[index].style.left = "5%";

        document.getElementsByClassName("book_description")[index].style.fontSize = "min(1.3vw, 1.7vh)";
        document.getElementsByClassName("book_title")[index].style.fontSize = "2vw";
    }, 990)

    document.getElementsByClassName("flex_image_appear")[multImageContainerIndex].style.animation = "multi_image_appear 2s ease-in-out";

    setTimeout(() => {
        document.getElementsByClassName("flex_image_appear")[multImageContainerIndex].style.opacity = "1";
    }, 1980);
}

function seeSingleImages(genericIndex, singleIndex) {
    transformed = true; 

    document.getElementsByClassName("flex_container_for_image_clicker")[genericIndex].style.animation = "button_swap 1s ease-in-out";
    document.getElementsByClassName("single_book_wrapper")[singleIndex].style.animation = "single_image_description_mover 1s ease-in-out";

    document.getElementsByClassName("book_description")[genericIndex].style.animation = "single_text_grower 1s ease-in-out";
    document.getElementsByClassName("book_title")[genericIndex].style.animation = "single_title_grower 1s ease-in-out";

    setTimeout(() => {
        document.getElementsByClassName("flex_container_for_image_clicker")[genericIndex].style.left = "-100%";

        document.getElementsByClassName("single_book_wrapper")[singleIndex].style.width = "50%";
        document.getElementsByClassName("single_book_wrapper")[singleIndex].style.height = "70%";
        document.getElementsByClassName("single_book_wrapper")[singleIndex].style.top = "5%";
        document.getElementsByClassName("single_book_wrapper")[singleIndex].style.left = "3%";

        document.getElementsByClassName("book_description")[genericIndex].style.fontSize = "min(2.1vw, 2.8vh)";
        document.getElementsByClassName("book_title")[genericIndex].style.fontSize = "min(4vw, 80px)";
    }, 990)

    document.getElementsByClassName("single_image")[singleIndex].style.animation = "single_image_appear 2s ease-in-out";

    setTimeout(() => {
        document.getElementsByClassName("single_image")[singleIndex].style.opacity = "1";
    }, 1980);
}

function hideMultiImages(index, multImageContainerIndex) {
    transformed = false;

    document.getElementsByClassName("flex_container_for_image_clicker")[index].style.animation = "button_swap_back 1s ease-in-out";
    document.getElementsByClassName("book_wrapper")[index].style.animation = "multi_image_description_mover_back 1s ease-in-out";

    document.getElementsByClassName("book_description")[index].style.animation = "single_text_revert 1s ease-in-out";
    document.getElementsByClassName("book_title")[index].style.animation = "single_title_revert 1s ease-in-out";

    setTimeout(() => {
        document.getElementsByClassName("flex_container_for_image_clicker")[index].style.left = "0";

        document.getElementsByClassName("book_wrapper")[index].style.width = "70%";
        document.getElementsByClassName("book_wrapper")[index].style.height = "60%";
        document.getElementsByClassName("book_wrapper")[index].style.top = "10%";
        document.getElementsByClassName("book_wrapper")[index].style.left = "15%";

        document.getElementsByClassName("book_description")[index].style.fontSize = "min(1.8vw, 2.4vh)";
        document.getElementsByClassName("book_title")[index].style.fontSize = "3vw";
    }, 990)

    document.getElementsByClassName("flex_image_appear")[multImageContainerIndex].style.animation = "multi_image_disappear 2s ease-in-out";

    setTimeout(() => {
        document.getElementsByClassName("flex_image_appear")[multImageContainerIndex].style.opacity = "0";
    }, 1980);
}

function hideSingleImages(genericIndex, singleIndex) {
    transformed = true; 

    document.getElementsByClassName("flex_container_for_image_clicker")[genericIndex].style.animation = "button_swap_back 1s ease-in-out";
    document.getElementsByClassName("single_book_wrapper")[singleIndex].style.animation = "single_image_description_mover_back 1s ease-in-out";

    document.getElementsByClassName("book_description")[genericIndex].style.animation = "text_revert 1s ease-in-out";
    document.getElementsByClassName("book_title")[genericIndex].style.animation = "title_revert 1s ease-in-out";

    setTimeout(() => {
        document.getElementsByClassName("flex_container_for_image_clicker")[genericIndex].style.left = "0";

        document.getElementsByClassName("single_book_wrapper")[singleIndex].style.width = "70%";
        document.getElementsByClassName("single_book_wrapper")[singleIndex].style.height = "60%";
        document.getElementsByClassName("single_book_wrapper")[singleIndex].style.top = "10%";
        document.getElementsByClassName("single_book_wrapper")[singleIndex].style.left = "15%";

        document.getElementsByClassName("book_description")[genericIndex].style.fontSize = "min(1.8vw, 2.4vh)";
        document.getElementsByClassName("book_title")[genericIndex].style.fontSize = "min(3vw, 80px)";
    }, 990)

    document.getElementsByClassName("single_image")[singleIndex].style.animation = "single_image_dissapear 2s ease-in-out";

    setTimeout(() => {
        document.getElementsByClassName("single_image")[singleIndex].style.opacity = "0";
    }, 1980);
}



// @keyframes text_shrinker {
//     from {
//         font-size: min(2vw, 25px);
//     }
//     to {
//         font-size: min(1.3vw, 15px);
//     }
// }

// @keyframes text_revert {
//     from {
//         font-size: min(1.3vw, 15px);
//     }
//     to {
//         font-size: min(2vw, 25px);
//     }
// }

// @keyframes title_shrink {
//     from {
//         font-size: 3vw;
//     }
//     to {
//         font-size: 2vw;;
//     }
// }
// @keyframes title_revert {
//     from {
//         font-size: 2vw;
//     }
//     to {
//         font-size: 3vw;
//     }
// }
// @keyframes multi_image_description_mover {
//     from {
//         width: 70%;
//         height: 60%;
//         top: 10%;
//         left: 15%;
//     }

//     to {
//         width: 90%;
//         height: 32.5%;
//         left: 5%;
//         top: 37.5%
//     }
// }

// @keyframes multi_image_description_mover_back {
//     from {
//         width: 90%;
//         height: 32.5%;
//         left: 5%;
//         top: 37.5%;
//     }

//     to {
//         width: 70%;
//         height: 60%;
//         top: 10%;
//         left: 15%;
//     }
// }

// @keyframes multi_image_appear {
//     from {
//         opacity: 0;
//     }

//     to {
//         opacity: 1;
//     }
// }

// @keyframes multi_image_disappear {
//     from {
//         opacity: 1;
//     }

//     to {
//         opacity: 0;
//     }
// }

// @keyframes button_swap {
//     from {
//         transform: translateX(0%);

//     }

//     to {
//         transform: translateX(-50%);

//     }
// }

// @keyframes button_swap_back {
//     from {
//         transform: translateX(0%);

//     }

//     to {
//         transform: translateX(-50%);

//     }
// }

