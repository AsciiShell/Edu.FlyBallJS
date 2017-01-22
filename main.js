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
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
