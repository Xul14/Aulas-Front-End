'use strict'

class card extends HTMLElement {

    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'open' })
        this.foto = null
        this.titulo = 'Nome Produto'
        this.descricao = 'Descrição Produto'
        this.preco = 'Preço Produto'
    }

    static get observedAttributes() {
        return ['foto', 'titulo', 'descricao', 'preco']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {

        const css = document.createElement('style')
        css.textContent = `
         *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
         }
       
         .card{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            padding: 16px;
        }

        .card__image{
            width: 320px;
            height: 200px;
            object-fit: contain;
            background-image: url(${this.foto});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
        
        .card__text{
            font-size: 1.5rem;
            font-weight: 600;
        }
        
        .card__desc{
            font-size: 1rem;
        }
        
        .card__price{
            font-size: 1.75rem;
            width: 100%;
            font-weight: 900;
        }

        `
        return css
    }

    component() {

        const card = document.createElement('div')
        card.classList.add('card')

        const imagem = document.createElement('div')
        imagem.classList.add('card__image')

        const nome = document.createElement('div')
        nome.classList.add('card__text')
        nome.textContent = this.titulo

        const desc = document.createElement('div')
        desc.classList.add('card__desc')
        desc.textContent = this.descricao

        const preco = document.createElement('div')
        preco.classList.add('card__price')
        preco.textContent = this.preco

        card.append(imagem, nome, desc, preco)

        return card
    }

}

customElements.define('card-julia', card)