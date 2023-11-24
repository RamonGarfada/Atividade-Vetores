/*Crie  um  programa  que  leia  um  vetor  de  10  elementos  reais,  calcule  e  exiba  a  média 
aritmética destes elementos. */

function executar(){

    const tamanho = 10
    const v1 = [tamanho]
    let soma = 0

    for (let i = 0; i < tamanho; i++){
        v1[i] = Number(prompt(`Insira o ${i+1}ª valor :`))
    }

    for(let i = 0; i < v1.length; i++){
        soma += v1[i]
    }
        const media = soma / v1.length
        const medias = document.getElementById("media")
        medias.innerHTML = `A média é: ${media}`

}