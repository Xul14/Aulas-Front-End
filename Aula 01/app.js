'use strict'

const calcular = document.getElementById('calcular')

function somar() {
   const numero1 = parseInt(document.getElementById('numero1').value)
   const numero2 = parseInt(document.getElementById('numero2').value)
   const formulario = document.getElementById('formulario')
   const aprovado = 'APROVADO!!!!'
   const reprovado = 'REPROVADO!!!!'

   const media = (numero1 + numero2) / 2
   document.getElementById('resultado').value = resultado

   if (media >= 7) {
      resultado.value = aprovado
      formulario.classList.add('aprovado')
      formulario.classList.remove('reprovado')

   } else {
      resultado.value = reprovado
      formulario.classList.add('reprovado')
      formulario.classList.remove('aprovado')
   }

}

calcular.addEventListener('click', somar)