// let sound = new Audio("boom.wav3");
let play = 1;
let points = 0 ;
let level = "easy";
let levels = {
    "easy": 20,
    "medium": 40,
    "hard": 60
}

const levelSelector = document.getElementById("level");
levelSelector.onchange = () => {
    level = levelSelector.value;
    clearGrid();
    creatGrid();
    creatBombs();
}

function creatGrid() {
    const box = document.getElementById("mainDiv");
    for (i = 0; i < 100; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("onclick", "step(this)");
      box.appendChild(square);
    }
    creatBombs();
}

function creatBombs() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(element => element.classList.remove("bomb"));
    for (let i = 0; i < levels[level]; i++) {
        let casual = Math.floor(Math.random() * 100);
        squares[casual].classList.add("bomb");
}
}

function step(e) {
    if (!e.classList.contains("bomb") && play ==1) {
     e.classList.add("good");
     points++;
     document.getElementById("points").innerHTML = points;
}else if (e.classList.contains("bomb") && play == 1) {
    e.classList.add("explode");
    // sound.play();
    play = 0;
    document.getElementById("gameover").style.opacity = "1";
}

}

function clearGrid() {
    const box = document.getElementById("mainDiv").innerHTML = "";
    play = 1;
    points = 0;
    document.getElementById("points").innerText = '';
    document.getElementById("gameover").style.opacity = "1";
    creatGrid;
}
creatGrid();