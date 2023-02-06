'use strict'

// const calcular = document.getElementById('calcular')

// function somar() {
//     const numero1 = parseInt(document.getElementById('numero1').value)
//     const numero2 = parseInt(document.getElementById('numero2').value)
//     const formulario = document.getElementById('formulario')

//     const resultado = numero1 + numero2
//     document.getElementById('resultado').value = resultado

//     formulario.classList.add('sombreamento')

// }

// calcular.addEventListener('click', somar)

const calcular = document.getElementById('calcular')

function somarNotas(){
    const nota1 = (document.getElementById('nota1').value)
    const nota2 = (document.getElementById('nota2').value)
    const situacao = document.getElementById('situacao')
    const formulario = document.getElementById('formulario')

    const media = (parseFloat(nota1) + parseFloat(nota2))/2

    const aprovado = 'APROVADO!!!!'
    const reprovado = 'REPROVADO!!!!' 
    
    if(media >= 7){
       situacao.value = aprovado
       formulario.classList.add('aprovado')

    }else{
       situacao.value = reprovado
       formulario.classList.add('reprovado')
    }

}

calcular.addEventListener('click', somarNotas)