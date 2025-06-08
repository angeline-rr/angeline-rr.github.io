const boxesItems = document.querySelectorAll('.boxes-item');
const boxesContainer = document.getElementById('boxes-container');
const circulo = document.getElementById('circulo');
const quadrado = document.getElementById('quadrado');

function changeFormat(formato) {
    boxesItems.forEach(box => {
        if (formato.id === 'circulo') {
            box.style.borderRadius = '100%';
            circulo.style.border = '2px solid black';
            quadrado.style.border = 'none';
        } else if (formato.id === 'quadrado') {
            box.style.borderRadius = '0';
            circulo.style.border = 'none';
            quadrado.style.border = '2px solid black';
        }
    });
}

function changeSize() {
    const input = document.querySelector('input');
    const tamanho = input.value + 'px';

    boxesItems.forEach(box => {
        box.style.width = tamanho;
        box.style.height = tamanho;
    });
}

function changeFlexDirection(selection) {
    boxesContainer.style.flexDirection = selection.value;
}

function changeJustifyContent(selection) {
    boxesContainer.style.justifyContent = selection.value;
}

function changeAlignItems(selection) {
    if (selection.value === 'stretch') {
        boxesItems.forEach(box => {
            box.style.height = 'auto';
        });
    }
    else {
        boxesItems.forEach(box => {
            box.style.height = box.style.width;
        });
    }
    boxesContainer.style.alignItems = selection.value;
}

function changeColor(corEscolhida) {
    const cor = getComputedStyle(corEscolhida).backgroundColor;
    const colorSelection = document.querySelectorAll('.cores-item');

    colorSelection.forEach(color => {
        if(color.id === corEscolhida.id){
            color.style.border = '2px solid black';
        }
        else{
            color.style.border = 'none';
        }
    });
    boxesItems.forEach(box => {
        box.style.backgroundColor = cor;
    });

    circulo.style.backgroundColor = cor;
    quadrado.style.backgroundColor = cor;
}