const cinema = document.getElementById("cinema");
const poltronasVaziasSpan = document.getElementById("poltronasVazias");
const poltronasOcupadasSpan = document.getElementById("poltronasOcupadas");
const reservarButton = document.getElementById("reservar");

const filas = ["A", "B", "C", "D"];
const numPoltronas = 20;
let poltronasOcupadas = 0;
let poltronasVazias = filas.length * numPoltronas;

reservarButton.addEventListener("click", reservarPoltrona);

function criarPoltrona(fileira, numero) {
    const poltrona = document.createElement("div");
    poltrona.classList.add("poltrona");
    poltrona.dataset.fileira = fileira;
    poltrona.dataset.numero = numero;
    poltrona.textContent = fileira + numero;

    poltrona.addEventListener("click", () => {
        if (!poltrona.classList.contains("ocupada")) {
            reservarPoltrona(fileira, numero);
        }
    });

    cinema.appendChild(poltrona);
}

function atualizarPoltronas() {
    cinema.innerHTML = ""; // Limpa o conteúdo atual

    for (const fileira of filas) {
        for (let numero = 1; numero <= numPoltronas; numero++) {
            criarPoltrona(fileira, numero);
        }
    }
}

function reservarPoltrona(fileira, numero) {
    const poltrona = document.querySelector(`.poltrona[data-fileira="${fileira}"][data-numero="${numero}"]`);

    if (poltrona && !poltrona.classList.contains("ocupada")) {
        poltrona.classList.add("ocupada");
        poltronasOcupadas++;
        poltronasVazias--;

        poltronasVaziasSpan.textContent = poltronasVazias;
        poltronasOcupadasSpan.textContent = poltronasOcupadas;
    }
}

atualizarPoltronas();