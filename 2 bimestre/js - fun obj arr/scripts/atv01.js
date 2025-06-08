function ex01() {
  const form01 = document.querySelector("#form01");
  const input01 = form01.querySelector('input[name="in_01"]').value;
  const output = document.querySelector("#div_output")

  const argsArray01 = input01.split(" ");

  resolve01(...argsArray01); //spread operator
}

function resolve01(...args) { //rest parameter
  let sum = 0;
  let size = arguments.length
  for (i in arguments) {
    sum += parseFloat(arguments[i]);
  }

  let average01 = sum / size

  output.textContent = "Média: " + average01.toFixed(2)
}
