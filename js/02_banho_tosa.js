let cards = document.querySelector('.bath_cards')

console.log(cards)

let cardItemsData = [
    {
        id: 'banho_padao',
        name: 'Banho padrão',
        price: 30.00,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        img: 'img/banho_tosa/banho.png',
    },
    {
        id: 'banho_bebe',
        name: 'Banho bebe',
        price: 80.00,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        img: 'img/banho_tosa/tosa_bebe.png',
    },
    {
        id: 'tosa_completa',
        name: 'Tosa completa',
        price: 100.00,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        img: 'img/banho_tosa/tosa_completa.png',
    },
    {
        id: 'promocoes',
        name: 'Promoções',
        price: 130.00,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        img: 'img/banho_tosa/promocoes.png',
    },
]

let generationCards = () => {
    return (cards.innerHTML = cardItemsData.map((x) => {
        let { id, name, price, desc, img } = x
        return `
        <div class="bath_cards">
            <div class="bath_card">
                <div class="bath_img">
                    <img src=${img} alt="">
                </div>
                <div class="bath_content">
                    <h2>${name}</h2>
                    <p>${desc}</p>
                </div>
                <p class="bath_price">R$${price}</p>
                <a class="bath_button" href="#">Adquirir produto</a>
            </div>
        </div>
        `
    }).join(''))
}

generationCards()