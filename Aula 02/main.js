'use strict'

const adicionar = document.getElementById('adicionar')

const adicionarCard = (nome,nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    const nomeAluno = nome
    const notaAluno = nota

    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = (`<h2 class="aluno_nome">${nomeAluno}</h2>
                      <span class="aluno_nota">${notaAluno}</span>`)

     if(notaAluno == '' || nomeAluno == ''){
         alert('ERRO: Preencha todas as informações')
     }else if(notaAluno < 0 || notaAluno > 10){
         alert('ERRO: Digite uma nota de 0 á 10')
     }else if(isNaN(notaAluno)){
         alert('ERRO: A nota deve ser um número')
     }else{

        if(notaAluno <= 5){
            novaDiv.classList.add('nota_vermelha')
        }else{
            novaDiv.classList.add('nota_verde') 
        }    

        container.appendChild(novaDiv)

     }
                    
}


const handleClick = () => {

    const nome = prompt('Digite o nome do aluno: ')
    const nota = prompt('Digite a nota ')

    adicionarCard(nome, nota)

}

adicionar.addEventListener('click', handleClick)