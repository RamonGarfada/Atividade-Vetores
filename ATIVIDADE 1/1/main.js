/*Crie  um  procedimento  para  exibir  a  soma  dos  elementos  de  um  vetor  de  15  elementos 
inteiros */

const tamanho = 15
const v1 = [tamanho]

function executar(){
    for (let i = 0; i < tamanho; i++){
        v1[i] = Number(prompt(`Vetor 1 - ${i+1} numero:`))
    }
    const total = v1.reduce(function(acumulador, valor){
        acumulador += valor
        return acumulador
    })
    const resultado = document.getElementById("resultado")
    resultado.innerHTML = total
}

