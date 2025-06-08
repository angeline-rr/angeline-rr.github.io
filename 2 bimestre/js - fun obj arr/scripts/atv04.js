
function ex04() {

    const form04 = document.querySelector('#form04')
    const input04 = form04.querySelector('input[name="in_04"]').value

    const argsArray04 = input04.split(" ");

    resolve04(...argsArray04)
}

function resolve04(...args) {
    const perfectNums = args
        .map(function (item) {
            return parseInt(item);
        })
        .filter(function (val) {
            return filter_perfeito(val);
        });

    output.textContent = perfectNums.join(" ");
}
function filter_perfeito(val) {
    let dividers = []
    let i = val - 1
    let sum = 0
    for (i; i >= 1; i--) {
        if (val % i == 0) {
            dividers.push(i)
        }
    }
    for (j in dividers) {
        sum += dividers[j]
    }
    if (sum == val) {
        return val
    }
}