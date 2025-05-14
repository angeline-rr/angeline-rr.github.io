let seg = 0;
let min = 0;
let h = 0;
let counting = 0;
let life = 3
let alien = 0;
let jogoPausado = false;
let jogoBloqueado = false;
let movimentoAlien;
let posicaoAlien = 0;
let fase = 1;
let alien1Ativo = true;
let alien2Ativo = true;
let alien3Ativo = true;
let velocidade = 200;

let alien1 = document.getElementById("alien1");
let alien2 = document.getElementById("alien2");
let alien3 = document.getElementById("alien3");
const nave = document.getElementById("naveContainer");
const missil1 = document.getElementById("missil1");
const missil2 = document.getElementById("missil2");

//tempo
function startCounter() {
    tempo = setInterval(count, 1000);
    counting = 1;
    jogoPausado = false;
    jogoBloqueado = false;

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
let pos = parseInt(window.getComputedStyle(nave).left);
const mover = 20;
const minimo = 50;
const maximo = 1000;

document.addEventListener("keydown", function (event) {
    if (jogoBloqueado) return;
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
        nave.style.left = pos + "px";
    }
    else if (event.code == "ArrowLeft") {
        if (jogoPausado) return;
        pos = Math.max(pos - mover, minimo);
        nave.style.left = pos + "px";
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

            flag = 1;
            if (posicaoMissil1 < -100) {
                clearInterval(animacao);
            }
        }, 30);
    } else if (flag == 1) {
        let posicaoMissil2 = posicaoTop;

        document.body.appendChild(missil2);
        missil2.style.position = "absolute";
        missil2.style.left = (posicaoLeft + 50) + "px";
        missil2.style.top = posicaoMissil2 + "px";

        const animacao = setInterval(() => {
            posicaoMissil2 -= 20;
            missil2.style.top = posicaoMissil2 + "px";

            detectarColisao();
            flag = 0;
            if (posicaoMissil2 < -100) {
                clearInterval(animacao);

                nave.appendChild(missil1);
                missil1.style.visibility = "visible";
                missil1.style.left = "3px";
                missil1.style.bottom = "1vh";
                missil1.style.top = "";
                missil1.style.right = "";

                nave.appendChild(missil2);
                missil2.style.visibility = "visible";
                missil2.style.right = "3px";
                missil2.style.bottom = "1vh";
                missil2.style.top = "";
                missil2.style.left = "";

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

        if (posicaoAlien > 525 && (alien1Ativo || alien2Ativo || alien3Ativo)) {
            clearInterval(movimentoAlien);
            stopCounter()
            document.querySelector("#pause").style.display = "flex";
            document.body.style.opacity = "0.5";
            document.querySelector("#pause").textContent = 'YOU LOOSE';

            reposicionar();

            jogoBloqueado = true;
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
        else if (!alien1Ativo && !alien2Ativo && !alien3Ativo) {
            clearInterval(movimentoAlien);
            setTimeout(() => {

                reposicionar();

                fase++;
                mudarFase(fase);
                criarAliens();
            }, 1000);
        }
    }, velocidade);
}

function gameOver() {
    stopCounter();
    document.querySelector("#pause").style.display = "flex";
    document.body.style.opacity = "0.5";
    document.querySelector("#pause").textContent = 'GAME OVER';
    jogoPausado = true;

}
function detectarColisao() {
    const missilTop1 = parseInt(getComputedStyle(missil1).top);
    const missilTop2 = parseInt(getComputedStyle(missil2).top);
    const missilLeft1 = parseInt(getComputedStyle(missil1).left);
    const missilLeft2 = parseInt(getComputedStyle(missil2).left);
    let container = document.getElementById("alienContainer");
    let alienTop = parseInt(getComputedStyle(container).top);

    //testes com missil 1 
    if (missilTop1 < alienTop && missilLeft1 > 550 && missilLeft1 < 640 && alien1Ativo) {
        if (alien1Ativo) {
            alien1.style.visibility = "hidden";
            missil1.style.visibility = "hidden";
            alien++;
            alien1Ativo = false;

        }
    }
    else if (missilTop1 < alienTop && missilLeft1 > 660 && missilLeft1 < 760 && alien2Ativo) {
        alien2.style.visibility = "hidden";
        missil1.style.visibility = "hidden";
        alien++;
        alien2Ativo = false;

    }
    else if (missilTop1 < alienTop && missilLeft1 > 770 && missilLeft1 < 860 && alien3Ativo) {
        alien3.style.visibility = "hidden";
        missil1.style.visibility = "hidden";
        alien++;
        alien3Ativo = false;

    }
    //testes com missil 2
    if (missilTop2 < alienTop && missilLeft2 > 550 && missilLeft2 < 640 && alien1Ativo) {
        if (alien1Ativo) {
            alien1.style.visibility = "hidden";
            missil2.style.visibility = "hidden";
            alien++;
            alien1Ativo = false;

        }
    }
    else if (missilTop2 < alienTop && missilLeft2 > 660 && missilLeft2 < 760 && alien2Ativo) {
        alien2.style.visibility = "hidden";
        missil2.style.visibility = "hidden";
        alien++;
        alien2Ativo = false;

    }
    else if (missilTop2 < alienTop && missilLeft2 > 770 && missilLeft2 < 860 && alien3Ativo) {
        alien3.style.visibility = "hidden";
        missil2.style.visibility = "hidden";
        alien++;
        alien3Ativo = false;

    }
    document.querySelector('#alienText').textContent = 'ALIENS: ' + alien;
}
function mudarFase(fase) {

    velocidade -= 50;

    if (fase == 2) {
        document.body.style.backgroundImage = "url('images/background2.jpg')";
    }
    if (fase == 3) {
        document.body.style.backgroundImage = "url('images/background3.jpg')";
    }
    if (fase == 4) {
        document.body.style.backgroundImage = "url('images/background4.jpg')";
    }
    if (fase == 5) {
        stopCounter();
        document.querySelector("#pause").style.display = "flex";
        document.body.style.opacity = "0.5";
        document.querySelector("#pause").textContent = 'YOU WIN';
        jogoBloqueado = true;
    }
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}
function reposicionar() {
    alien1Ativo = true;
    alien2Ativo = true;
    alien3Ativo = true;
    posicaoAlien = 0;
    alien1.style.visibility = "visible";
    alien2.style.visibility = "visible";
    alien3.style.visibility = "visible";
    nave.appendChild(missil1);
    missil1.style.visibility = "visible";
    missil1.style.left = "3px";
    missil1.style.bottom = "1vh";
    missil1.style.top = "";
    missil1.style.right = "";

    nave.appendChild(missil2);
    missil2.style.visibility = "visible";
    missil2.style.right = "3px";
    missil2.style.bottom = "1vh";
    missil2.style.top = "";
    missil2.style.left = "";

    flag = 0;
}