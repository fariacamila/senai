let modal = document.querySelector('.modal-container')
let tbody = document.querySelector('tbody')
let sNome = document.querySelector('.m-nome')
let sFuncao = document.querySelector('.m-funcao')
let sSalario = document.querySelector('.m-salario')
let btn_save = document.querySelector('.btn_save')

let itens
let id

function openModal(edit = false, index = 0) {
    modal.classList.add('modal_active')

    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('modal_active')
        }
    }

    if (edit) {
        sNome.value = itens[index].nome
        sFuncao.value = itens[index].funcao
        sSalario.value = itens[index].salario
        id = index
    } else {
        sNome.value = ''
        sFuncao.value = ''
        sSalario.value = ''
    }

}

function editItem(index) {

    openModal(true, index)
}

function deleteItem(index) {
    itens.splice(index, 1)
    setItensBD()
    loadItens()
}

function insertItem(item, index) {
    let tr = document.createElement('tr')

    tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.funcao}</td>
    <td>${item.salario}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><img class="img" src="img/cadastro/icons8-edit-64.png" alt="#"></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><img class="img" src="img/cadastro/icons8-excluir-50.png" alt="#"></button>
    </td>
  `
    tbody.appendChild(tr)
}

btn_save.onclick = e => {

    if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '') {
        return
    }

    e.preventDefault();

    if (id !== undefined) {
        itens[id].nome = sNome.value
        itens[id].funcao = sFuncao.value
        itens[id].salario = sSalario.value
    } else {
        itens.push({ 'nome': sNome.value, 'funcao': sFuncao.value, 'salario': sSalario.value })
    }

    setItensBD()

    modal.classList.remove('modal_active')
    loadItens()
    id = undefined
}

function loadItens() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
        insertItem(item, index)
    })

}

let getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
let setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()