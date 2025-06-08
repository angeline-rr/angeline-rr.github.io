function ex02() {
    const form02 = document.querySelector("#form02");
    const input02 = form02.querySelector('input[name="in_02"]').value;

    const argsArray02 = input02.split(" ");

    const resolve02 = (...args) => {
        let sum = 0; 
        for (i in args) { //arguments nao existe em arrow funtions
            sum += parseFloat(args[i]);
        }

        let average02 = sum / args.length

        output.textContent = "Média: " + average02.toFixed(2)
    }

    resolve02(...argsArray02)
}



