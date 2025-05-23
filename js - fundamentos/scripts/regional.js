const data_regionals = []
let idRegional = 1

function addRegional(){

    const formRegional = document.querySelector('#formRegional')
    const input_sigla = formRegional.querySelector('input[name="sigla"]')
    const input_cidade = formRegional.querySelector('input[name="cidade"]')


    const tableRegional = document.querySelector('#table_regional')
    const lineRegional = document.createElement('tr')
    const col_idRegional = document.createElement('td')
    const col_sigla = document.createElement('td')
    const col_cidade = document.createElement('td')


    col_sigla.textContent = input_sigla.value
    col_cidade.textContent = input_cidade.value
    col_idRegional.textContent = idRegional
    idRegional++

    lineRegional.appendChild(col_idRegional)
    lineRegional.appendChild(col_sigla)
    lineRegional.appendChild(col_cidade)

    tableRegional.appendChild(lineRegional)

    //select 

    const select = document.querySelector("#select_regional")

    const op = document.createElement("option")

    op.textContent = input_sigla.value

    op.value = input_sigla.value

    select.appendChild(op)

    formRegional.reset()
}