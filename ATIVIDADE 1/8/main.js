function operacaoAritmetica(operador, num1, num2) {
    if (operador === '+') {
        return num1 + num2;
    } else if (operador === '-') {
        return num1 - num2;
    } else if (operador === '*') {
        return num1 * num2;
    } else if (operador === '/') {
        if (num2 === 0) {
            return "Divisão por zero";
        } else {
            return num1 / num2;
        }
    } else {
        return "Operador inválido";
    }
}

function calcularResultados() {
    const tamanho = 20;
    const vetor1 = new Array(tamanho);
    const vetor2 = new Array(tamanho);
    const operadores = new Array(tamanho);
    const resultado = new Array(tamanho);

    for (let i = 0; i < tamanho; i++) {
        vetor1[i] = parseInt(document.getElementById(`valor1_${i}`).value);
        vetor2[i] = parseInt(document.getElementById(`valor2_${i}`).value);
        operadores[i] = document.getElementById(`operador_${i}`).value;
        resultado[i] = operacaoAritmetica(operadores[i], vetor1[i], vetor2[i]);
        document.getElementById(`resultado_${i}`).innerHTML = `${vetor1[i]} ${operadores[i]} ${vetor2[i]} = ${resultado[i]}`;
    }
}