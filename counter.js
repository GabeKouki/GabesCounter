let counter = 0;
let counterDecrease = 0;
let counterReset = 0;
let max = 100;

//counter button functions
function incrementValue() {
    counter++;
    document.querySelector(".counter").innerText = counter;
}  

function decrementValue() {
    counter--;
    document.querySelector(".counter").innerText = counter;
}

function resetCounter() {
    counter = 0;
    document.querySelector(".counter").innerText = counter;
}

function randomNumber() {
    random = Math.floor(Math.random() * 10) + 1;
    if (random > 5) {
        counter = Math.floor(Math.random() * 100) -150;
    } else {
        counter = Math.floor(Math.random() * 150);
    }
    document.querySelector(".counter").innerText = counter;
}
//change color button functions

function changeToRed() {
        document.querySelector(".header").style.color = "red";
}

function changeToOrange() {
    document.querySelector(".header").style.color = "orange";
}

function changeToYellow() {
    document.querySelector(".header").style.color = "yellow";
}

function changeToGreen() {
    document.querySelector(".header").style.color = "green";
}

function changeToBlue() {
    document.querySelector(".header").style.color = "blue";
}

function changeToIndigo() {
    document.querySelector(".header").style.color = "indigo";
}

function changeToViolet() {
    document.querySelector(".header").style.color = "violet";
}

function changeToBlack() {
    document.querySelector(".header").style.color = "black";
}



document.querySelector(".increase").addEventListener("click", () => {
    incrementValue();
})

document.querySelector(".reset").addEventListener("click", () => {
    resetCounter();
})

document.querySelector(".decrease").addEventListener("click", () => {
    decrementValue();
})

document.querySelector(".random").addEventListener("click", () => {
    randomNumber();
})

document.getElementById("red").addEventListener("click", () => {
    changeToRed();
})

document.getElementById("orange").addEventListener("click", () => {
    changeToOrange();
})

document.getElementById("yellow").addEventListener("click", () => {
    changeToYellow();
})

document.getElementById("green").addEventListener("click", () => {
    changeToGreen();
})

document.getElementById("blue").addEventListener("click", () => {
    changeToBlue();
})

document.getElementById("indigo").addEventListener("click", () => {
    changeToIndigo();
})

document.getElementById("violet").addEventListener("click", () => {
    changeToViolet();
})

document.getElementById("black").addEventListener("click", () => {
    changeToBlack();
})
