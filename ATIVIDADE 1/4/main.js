/*Ler um vetor com 20 números inteiros e apresentar o resultado da multiplicação dos valores 
pelos seus índices */

const tamanho = 20
let v1 = [tamanho]

function executar(){
    for (let i = 0; i < tamanho; i++){
        v1[i] = Number(prompt(`Vetor 1 - ${i+1} numero:`))
    }
    const total = v1.reduce(function(valor, indice){
        return indice * valor
    })
    const vetor = document.getElementById("vetor")
    vetor.innerHTML = ` Vetor: ${v1}`
    const resultado = document.getElementById("resultado")
    resultado.innerHTML = ` Resultado = ${total}`
}