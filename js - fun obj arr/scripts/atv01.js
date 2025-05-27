function ex01() {
  const form = document.querySelector("#form01");
  const input = form.querySelector('input[name="in_01"]').value;
  form.reset();

  const argsArray = input.split(" ");

  resolve01(...argsArray);
}

function resolve01(...args) {
  let sum = 0;
  let size = arguments.length
  for (i in arguments) {
    sum += arguments[i];
  }
 
  alert(sum)
}
