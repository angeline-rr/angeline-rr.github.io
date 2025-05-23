const data_reports = []

let idReport = 1

function addReport() {

    const formReport = document.querySelector('#formReport')
    const input_data = formReport.querySelector('input[name="data"]')

    const tableReport = document.querySelector('#table_report')
    const lineReport = document.createElement('tr')
    const col_idReport = document.createElement('td')
    const col_data = document.createElement('td')
    const col_assunto = document.createElement('td')
    const col_agente = document.createElement('td')

    col_data.textContent = input_data.value
    col_idReport.textContent = idReport
    col_assunto.textContent = document.querySelector("#select_subject").value
    col_agente.textContent = document.querySelector("#select_agent").value


    if(col_assunto.textContent == "Assunto" || col_agente.textContent == "Agente") {
        alert("Preencha todos os campos")
        return false
    }
    idReport++

    lineReport.appendChild(col_idReport)
    lineReport.appendChild(col_data)
    lineReport.appendChild(col_assunto)
    lineReport.appendChild(col_agente)

    tableReport.appendChild(lineReport)

    formReport.reset()
}