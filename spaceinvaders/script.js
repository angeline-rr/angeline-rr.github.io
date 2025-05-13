let seg = 0;
let min = 0;
let h = 0;
let id;
let counting = 0;
let life = 3
let jogoPausado = false;
let movimentoAlien;
let posicaoAlien = 0;

//tempo
function startCounter() {
    tempo = setInterval(count, 1000);
    counting = 1;
    jogoPausado = false;

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
    clearInterval(tempo);
    clearInterval(movimentoAlien);
    counting = 0;

    jogoPausado = true;
    document.querySelector("#pause").style.display = "flex";
    document.body.style.opacity = "0.5";
    document.querySelector("#pause").textContent = 'GAME PAUSED'

}
//movimento horizontal da nave
let nav = document.getElementById("naveContainer");
let pos = parseInt(window.getComputedStyle(nav).left);
const mover = 20;
const minimo = 50;
const maximo = 1000;

document.addEventListener("keydown", function (event) {
    //tempo
    if (event.code == "Space") {
        if (jogoPausado) {
            startCounter();
            criarAliens();
        } else {
            stopCounter();
        }
    }
    //movimento
    if (event.code == "ArrowRight") {
        if (jogoPausado) return;
        pos = Math.min(pos + mover, maximo);
        nav.style.left = pos + "px";
    }
    else if (event.code == "ArrowLeft") {
        if (jogoPausado) return;
        pos = Math.max(pos - mover, minimo);
        nav.style.left = pos + "px";
    }
    //atirar
    if (event.code === "Enter") {
        if (jogoPausado) return;
        atirar();
    }
});
//disparos
let flag = 0;
function atirar() {
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

            detectarColisao();
            if (posicaoMissil1 < -100) {
                clearInterval(animacao);
                flag = 1;
            }
        }, 1000);
    } else if (flag == 1) {
        let posicaoMissil2 = posicaoTop;

        document.body.appendChild(missil2);
        missil2.style.position = "absolute";
        missil2.style.left = (posicaoLeft + 50) + "px";
        missil2.style.top = posicaoMissil2 + "px";

        const animacao = setInterval(() => {
            posicaoMissil2 -= 20;
            missil2.style.top = posicaoMissil2 + "px";

            if (posicaoMissil2 < -100) {
                clearInterval(animacao);

                nave.appendChild(missil1);
                missil1.style.left = "3px";
                missil1.style.bottom = "1vh";
                missil1.style.top = "";
                missil1.style.right = "";

                nave.appendChild(missil2);
                missil2.style.right = "3px";
                missil2.style.bottom = "1vh";
                missil2.style.top = "";
                missil2.style.left = "";

                flag = 0;
            }
        }, 30);
    }
}
//naves inimigas
function criarAliens() {

    if (jogoPausado) return;
    const aliensContainer = document.getElementById("alienContainer");

    movimentoAlien = setInterval(() => {
        posicaoAlien += 5;
        aliensContainer.style.top = posicaoAlien + "px";

        if (posicaoAlien > 525) {
            clearInterval(movimentoAlien);
            stopCounter()
            document.querySelector("#pause").style.display = "flex";
            document.body.style.opacity = "0.5";
            document.querySelector("#pause").textContent = 'YOU LOSE';

            jogoPausado = true;
            if (life > 1) {
                setTimeout(() => {
                    startCounter();
                    posicaoAlien = 0;
                    life--;
                    document.querySelector('#lifeText').textContent = 'LIFE: ' + life;
                    criarAliens();

                }, 2000);
            } else {
                life = 0;
                document.querySelector('#lifeText').textContent = 'LIFE: 0';
                setTimeout(gameOver, 2000);
            }
        }
    }, 70);
}

function gameOver() {
    stopCounter();
    document.querySelector("#pause").style.display = "flex";
    document.body.style.opacity = "0.5";
    document.querySelector("#pause").textContent = 'GAME OVER';
    jogoPausado = true;

}
function detectarColisao() {
    let alien1 = document.getElementById("alien1");
    let missil1 = document.getElementById("missil1");

    const missilTop = parseInt(getComputedStyle(missil1).top);
    const alienTop = parseInt(getComputedStyle(alien1).top);
    const missilLeft = parseInt(getComputedStyle(missil1).left);
    const alienLeft = parseInt(getComputedStyle(alien1).left);

    const aliensContainer = document.getElementById("alienContainer");

    let div = document.getElementById("alienContainer");

    valor = parseInt(getComputedStyle(div).top);
    valor2 = parseInt(getComputedStyle(div).left);

    

    if(missilTop < valor){
        alien1.remove

    }
}


//const maximo = window.innerWidth - nav.offsetWidth; // limite direito
//nao mover quando pausado
