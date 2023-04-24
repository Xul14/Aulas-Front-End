'use strict'

import { produtos } from "./produtos.js"
import './main.js'

const criarCard = (produto) => {
    const card = document.createElement('card-julia')
    card.classList.add('card')

    const foto = document.createElement('img')
    foto.classList.add('card__image')
    card.foto = `./img/${produto.image}`

    const titulo = document.createElement('h5')
    titulo.classList.add('card__title')
    card.titulo = produto.name

    const descricao = document.createElement('p')
    descricao.classList.add('card__description')
    card.descricao = produto.description

    const preco = document.createElement('span')
    preco.classList.add('card__price')
    card.preco = `R$ ${produto.price}`

    card.append(foto, titulo, descricao, preco)

    return card

}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)

}

carregarProdutos()