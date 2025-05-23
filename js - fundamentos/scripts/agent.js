const data_agents = []

let idAgent = 1

function addAgent() {

    const formAgent = document.querySelector('#formAgent')
    const input_nome = formAgent.querySelector('input[name="nome"]')

    const tableAgent = document.querySelector('#table_agent')
    const lineAgent = document.createElement('tr')
    const col_idAgent = document.createElement('td')
    const col_nome = document.createElement('td')
    const col_regional = document.createElement('td')

    col_nome.textContent = input_nome.value
    col_idAgent.textContent = idAgent
    col_regional.textContent = document.querySelector("#select_regional").value

    if(col_regional.textContent == "Regional") {
        alert("Selecione uma regional")
        return false
    }
    idAgent++

    lineAgent.appendChild(col_idAgent)
    lineAgent.appendChild(col_nome)
    lineAgent.appendChild(col_regional)

    tableAgent.appendChild(lineAgent)

    //select 

    const select = document.querySelector("#select_agent")

    const opAgent = document.createElement("option")

    opAgent.textContent = input_nome.value

    opAgent.value = input_nome.value

    select.appendChild(opAgent)

    formAgent.reset()
}