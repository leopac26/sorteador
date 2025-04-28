let numerosDisponiveis = [];

function inicializarNumeros(limiteMaximo) {
    numerosDisponiveis = [];
    for (let i = 1; i <= limiteMaximo; i++) {
        numerosDisponiveis.push(i);
    }
}

document.getElementById('sortear').addEventListener('click', function() {
    const limiteInput = document.getElementById('limiteMaximo');
    const resultadoDiv = document.getElementById('resultado');
    const limiteMaximo = parseInt(limiteInput.value);

    if (isNaN(limiteMaximo) || limiteMaximo < 1) {
        resultadoDiv.textContent = 'Por favor, insira um limite máximo válido (maior que zero).';
        return;
    }

    if (numerosDisponiveis.length === 0) {
        inicializarNumeros(limiteMaximo);
    }

    if (numerosDisponiveis.length > 0) {
        const indice = Math.floor(Math.random() * numerosDisponiveis.length);
        const numeroAleatorio = numerosDisponiveis.splice(indice, 1)[0];

        resultadoDiv.textContent = 'Número sorteado: ' + numeroAleatorio;

        if (numerosDisponiveis.length === 0) {
            setTimeout(() => {
                alert('Todos os números foram sorteados!');
            }, 300);
        }
    }
});

// BOTÃO RESET
document.getElementById('resetar').addEventListener('click', function() {
    const limiteInput = document.getElementById('limiteMaximo');
    const limiteMaximo = parseInt(limiteInput.value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(limiteMaximo) || limiteMaximo < 1) {
        resultadoDiv.textContent = 'Por favor, insira um limite máximo válido (maior que zero).';
        return;
    }

    inicializarNumeros(limiteMaximo);
    resultadoDiv.textContent = 'Sorteio resetado! Pronto para recomeçar.';
});
