let list = document.querySelector('.check_list')
let text = '<p class="check_list-p">Você selecionou: </p>'
let listArray = []

let checkboxes = document.querySelectorAll('.checkbox')

for (let box of checkboxes) {

    box.addEventListener('click', () => {
        if (box.checked == true) {
            console.log(box.value)
            listArray.push(box.value)
            list.innerHTML = text + listArray.join(' / ')
        } else {
            listArray = listArray.filter(e => e !== box.value)
            list.innerHTML = text + listArray.join(' / ')
        }
    })
}