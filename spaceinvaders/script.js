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
const minimo = 50;
const maximo = 1000;

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
        atirarMissil1();
    }
});
let flag = 0;

function atirarMissil1() {
    const missil1 = document.getElementById("missil1");
    const missil2 = document.getElementById("missil2");
    const nave = document.getElementById("naveContainer");

    const posicaoLeft = nave.offsetLeft;
    const posicaoTop = nave.offsetTop;

    if (flag == 0) {
        let posicaoMissil1 = posicaoTop;

        document.body.appendChild(missil1);
        missil1.style.position = "absolute";
        missil1.style.left = posicaoLeft + "px";
        missil1.style.top = posicaoMissil1 + "px";

        const animacao = setInterval(() => {
            posicaoMissil1 -= 20;
            missil1.style.top = posicaoMissil1 + "px";

            if (posicaoMissil1 < 1) {
                clearInterval(animacao);
                flag = 1;
            }
        }, 100);
    } else if (flag == 1) {
        let posicaoMissil2 = posicaoTop;

        document.body.appendChild(missil2);
        missil2.style.position = "absolute";
        missil2.style.left = (posicaoLeft + 50) + "px";
        missil2.style.top = posicaoMissil2 + "px";

        const animacao = setInterval(() => {
            posicaoMissil2 -= 20;
            missil2.style.top = posicaoMissil2 + "px";

            if (posicaoMissil2 < 1) {
                clearInterval(animacao);

                nave.appendChild(missil1);
                missil1.style.position = "absolute";
                missil1.style.left = "3px";
                missil1.style.bottom = "1vh";
                missil1.style.top = "";
                missil1.style.right = "";

                nave.appendChild(missil2);
                missil2.style.position = "absolute";
                missil2.style.right = "3px";
                missil2.style.bottom = "1vh";
                missil2.style.top = "";
                missil2.style.left = "";

                flag = 0;
            }
        }, 100);
    }
}
//const maximo = window.innerWidth - nav.offsetWidth; // limite direito