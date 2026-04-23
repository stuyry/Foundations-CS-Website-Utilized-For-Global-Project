let dropdown_active_signal = false;

function dropdowner() {
    if (!dropdown_active_signal) {
        dropdown_active_signal = true;
        document.getElementById("dropdown_container").style.display = "inline";
    }
    else {
        dropdown_active_signal = false;
        document.getElementById("dropdown_container").style.display = "none";
    }
}