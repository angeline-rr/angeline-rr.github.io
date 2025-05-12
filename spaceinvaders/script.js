let seg = 0;
let min = 0;
let h = 0;
let id;
let counting = 0;

function startCounter() {
    id = setInterval(count, 1000);
    counting = 1;

    document.querySelector("#pause").style.display = "none";
    document.body.style.opacity = "1";
}
function count() {
    seg++;
    if (seg > 59) {
        seg = 0;
        min++;
    }
    if (min > 59) {
        min = 0;
        h++;
    }
    let hStr = "";
    let minStr = "";
    let segStr = "";
    if (seg < 10) {
        segStr = "0" + seg;
    } else {
        segStr = "" + seg;
    }
    if (min < 10) {
        minStr = "0" + min;
    } else {
        minStr = "" + min;
    }
    if (h < 10) {
        hStr = "0" + h;
    } else {
        hStr = "" + h;
    }
    document.querySelector("#timer").textContent = hStr + ":" + minStr + ":" + segStr;
}

function stopCounter() {
    clearInterval(id);
    counting = 0;

    document.querySelector("#pause").style.display = "flex";
    document.body.style.opacity = "0.5";
}

let nav = document.getElementById("naveContainer");
let pos = parseInt(window.getComputedStyle(nav).left);
const mover = 20;
const minimo = 300;
const maximo = 1250;

document.addEventListener("keydown", function (event) {
    //tempo
    if (event.code == "Space") {
        if (counting == 0) {
            startCounter();
        } else {
            stopCounter();
        }
    }
    //movimento
    if (event.code == "ArrowRight") {
        pos = Math.min(pos + mover, maximo);
        nav.style.left = pos + "px";
    }
    else if (event.code == "ArrowLeft") {
        pos = Math.max(pos - mover, minimo);
        nav.style.left = pos + "px";
    }
    //atirar
    if (event.code === "Enter") {
        atirar();
    }
});
function atirar() {
    let missil1 = document.getElementById("missil1");
    let missil2 = document.getElementById("missil2");

    let flag = 0;
    console.log("entrou");

    let posicaoMissil1 = 0;
    let posicaoMissil2 = 0;

    const animacao = setInterval(() => {
        posicaoMissil1 -= 100;
        posicaoMissil2 -= 100;

        while (flag == 0) {
            missil1.style.transform = `translateY(${posicaoMissil1}px)`;
            if (posicaoMissil1 < -500) {
                clearInterval(animacao);
                flag = 1;
            }
        }
        while (flag == 1) {
            missil2.style.transform = `translateY(${posicaoMissil2}px)`;
            if (posicaoMissil2 < -500) {
                clearInterval(animacao);
                flag = 0;
            }

        }
    }, 1000);
}

//const maximo = window.innerWidth - nav.offsetWidth; // limite direito