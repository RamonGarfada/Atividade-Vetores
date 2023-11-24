function calcularNotas() {
    const gabarito = document.getElementById('gabaritoInput').value;
    const numAlunos = parseInt(document.getElementById('numAlunosInput').value);
    const respostasAlunos = document.getElementById('respostasAlunosInput').value.split('\n');

    const resultados = [];

    for (let i = 0; i < numAlunos; i++) {
        const linhaRespostas = respostasAlunos[i].trim();
        const numeroAluno = linhaRespostas.slice(0, 3);
        const respostas = linhaRespostas.slice(3);

        let acertos = 0;
        for (let j = 0; j < gabarito.length; j++) {
            if (gabarito[j] === respostas[j]) {
                acertos++;
            }
        }

        resultados.push(`Aluno ${numeroAluno}: ${acertos} acertos`);
    }

    const resultadosLista = document.getElementById('resultados');
    resultadosLista.innerHTML = '';

    resultados.forEach((resultado) => {
        const item = document.createElement('li');
        item.textContent = resultado;
        resultadosLista.appendChild(item);
    });
}