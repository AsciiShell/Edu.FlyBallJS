function speedChanged() {
    speed = document.getElementById("speed").value;
    document.getElementById("speedText").innerHTML = "Скорость: " + speed;
}
function degChanged() {
    deg = document.getElementById("deg").value;
    document.getElementById("degText").innerHTML = "Угол: " + deg;
}
function sleep(ms) {
    return new Promise(resolve=>setTimeout(resolve, ms));
}

