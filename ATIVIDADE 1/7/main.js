/*Crie uma função que exiba separadamente os elementos pares e impares de um vetor de 10 
elementos */

function executar(){

    const tamanho = 10
    const v1 = [tamanho]
  

    for (let i = 0; i < tamanho; i++){
        v1[i] = Number(prompt(`Insira o ${i+1}ª valor :`))
    }

    const pares = v1.filter(function(valor){
        return valor % 2 === 0
    })

    const numPares = document.getElementById("pares")
    numPares.innerHTML = `Os numeros pares é: ${pares}`

    const impares = v1.filter(function(valor){
        return valor % 2 !==0
    })

    const numImpares = document.getElementById("impars")
    numImpares.innerHTML = `Os numeros impares é: ${impares}`


}