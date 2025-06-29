const main = document.getElementById("main");
const titleScreen = document.getElementById("titleScreen");
const gameScreen = document.getElementById("gameScreen");
const endScreen = document.getElementById("endScreen");

//windowサイズを取得
const windowWidth = parseInt(window.innerWidth);
const windowHeight = parseInt(window.innerHeight);

init();

function init() {
    titleScreen.style.display = "block";
    gameScreen.style.display = "none";
    endScreen.style.display = "none";
    next = 1;
}

function start(){
    titleScreen.style.display = "none";
    gameScreen.style.display = "block";
    endScreen.style.display = "none";
    gameStart();
}

function end() {
    titleScreen.style.display = "none";
    gameScreen.style.display = "none";
    endScreen.style.display = "block";
}

const buttonNumber = 9;
const circleSize = 60;
function gameStart() {
    for (var num = buttonNumber; num > 0; num--) {
        var elm = document.createElement("button");
        elm.innerHTML = num;
        elm.setAttribute("id", num);
        elm.setAttribute("class", "circle");
        var function_name = "remove(" + num + ")"
        elm.setAttribute("onclick", function_name);
        gameScreen.appendChild(elm);

        var left_pos = circleSize;
        var top_pos = circleSize;

        left_pos = left_pos + Math.floor(Math.random() * (windowWidth-(left_pos*2)));
        top_pos = top_pos + Math.floor(Math.random() * (windowHeight-(top_pos*2)));

        document.getElementById(num).style.left = "" + left_pos + "px";
        document.getElementById(num).style.top = "" + top_pos + "px";
    }
}

var next = 1;
document.remove = function (id) {
    if (id === next) {
        gameScreen.removeChild(document.getElementById(id));
        next = next + 1;
    }
    if (next === buttonNumber+1) {
        end();
    }
}
