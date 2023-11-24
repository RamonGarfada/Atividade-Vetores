/*Crie um procedimento para inverter a ordem dos elementos em um vetor de 20 elementos. */
const tamanho = 20
const v1 = [tamanho]

function executar(){
    for (let i = 0; i < tamanho; i++){
        v1[i] = Number(prompt(`Vetor 1 - ${i+1} numero:`))
    }
    v1.reverse()
    const resultado = document.getElementById("resultado")
    resultado.innerHTML = `${v1}`
    }
    
/*var myArray = ["one", "two", "three"];
myArray.reverse();

console.log(myArray)*/