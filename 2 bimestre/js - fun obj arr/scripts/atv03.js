function ex03() {
    const form03 = document.querySelector("#form03");
    const input03 = form03.querySelector('input[name="in_03"]').value;

    const argsArray03 = input03.split(" ");

    resolve03(...argsArray03)
}

function resolve03(...args) {

    const evenOrNot = args.map(function (item) {
        return isEven(parseInt(item))
    });

   output.innerHTML = evenOrNot.join("<br>")
}

function isEven(val) {
    if (val % 2 == 0) {
        return "PAR"
    } else {
        return "ÍMPAR"
    }
}


