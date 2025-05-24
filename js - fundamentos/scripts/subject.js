const data_subjects = []

let idSubject = 1

function addSubject() {

    const formSubject = document.querySelector('#formSubject')
    const input_descricaoSubject = formSubject.querySelector('input[name="descricao"]')

    const tableSubject = document.querySelector('#table_subject')
    const lineSubject = document.createElement('tr')
    const col_idSubject = document.createElement('td')
    const col_descricaoSubject = document.createElement('td')

    col_descricaoSubject.textContent = input_descricaoSubject.value
    col_idSubject.textContent = idSubject
    idSubject++

    lineSubject.appendChild(col_idSubject)
    lineSubject.appendChild(col_descricaoSubject)

    tableSubject.appendChild(lineSubject)

    //select 

    const select = document.querySelector("#select_subject")

    const opSubject = document.createElement("option")

    opSubject.textContent = input_descricaoSubject.value

    opSubject.value = input_descricaoSubject.value

    select.appendChild(opSubject)

    formSubject.reset()

    drawChart()
}