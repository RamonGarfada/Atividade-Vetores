function realizarLancamentos() {
    const resultado = document.getElementById('resultados');
    resultado.innerHTML = '';

    const lancamentos = [];
    const faces = 6; 

    for (let i = 0; i < 50; i++) {
        const lancamento = Math.floor(Math.random() * faces) + 1; 
        lancamentos.push(lancamento);
    }

    const contagemFaces = new Array(faces).fill(0);

    for (const lancamento of lancamentos) {
        contagemFaces[lancamento - 1]++;
    }

    for (let i = 0; i < faces; i++) {
        const percentagem = (contagemFaces[i] / 50) * 100;
        resultado.innerHTML += `<li>Face ${i + 1}: ${contagemFaces[i]} ocorrências (${percentagem.toFixed(2)}%)</li>`;
    }
}