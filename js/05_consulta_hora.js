let selected = document.querySelector('.time_selected')
let optionContainer = document.querySelector('.time_content')

let optionsList = document.querySelectorAll('.time_option')

selected.addEventListener('click', () => {
    optionContainer.classList.toggle('active')
})

optionsList.forEach(o => {
    o.addEventListener('click', () => {
        selected.innerHTML = o.querySelector('label').innerHTML
        optionContainer.classList.remove('active')
    })
})