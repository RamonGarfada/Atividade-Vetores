/*Crie  um  programa  que  leia  24  temperaturas,  em  graus  celsius,  considerando  que  cada 
posição de leitura é o horário da temperatura, registrada ao longe do dia. Ao final exiba ao 
usuário a maior e menor temperatura, bem como o horário de sua ocorrência, e a média das 
temperaturas registradas.*/

function executar(){

    const tamanho = 24
    const v1 = [tamanho]
    let soma = 0

    for (let i = 0; i < tamanho; i++){
        v1[i] = Number(prompt(`Insira a ${i+1}ª temperatura em graus Celsius:`))
    }
    
    const v1Min = Math.min(...v1)
    const Menor = document.getElementById("menor")
    Menor.innerHTML = `A menor temperatura é: ${v1Min}`

    const v1Max = Math.max(...v1)
    const maior = document.getElementById("maior")
    maior.innerHTML = `A maior temperatura é: ${v1Max}`

    for(let i = 0; i < v1.length; i++){
        soma += v1[i]
    }
        const media = soma / v1.length
        const medias = document.getElementById("media")
        medias.innerHTML = `A média das temperaturas registradas é: ${media}`

}