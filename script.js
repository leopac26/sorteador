let numerosDisponiveis = [];
let numerosSorteados = [];

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
        let intervalo;
        let tempoDecorrido = 0;

        intervalo = setInterval(() => {
            // Enquanto estiver sorteando, mostra números aleatórios
            const numeroAleatorio = Math.floor(Math.random() * limiteMaximo) + 1;
            resultadoDiv.textContent = 'Sorteando... ' + numeroAleatorio;
            tempoDecorrido += 100;
            if (tempoDecorrido >= 5000) { // 5 segundos
                clearInterval(intervalo);

                // Sorteia realmente o número que ainda não saiu
                let numeroFinal;
                do {
                    numeroFinal = Math.floor(Math.random() * limiteMaximo) + 1;
                } while (numerosSorteados.includes(numeroFinal));

                numerosSorteados.push(numeroFinal);
                resultadoDiv.textContent = 'Número sorteado: ' + numeroFinal;

                // Verificar se todos os números foram sorteados
                if (numerosSorteados.length === limiteMaximo) {
                    setTimeout(() => {
                        resultadoDiv.textContent = 'Todos os números foram sorteados!';
                    }, 500);
                }
            }
        }, 100); // Troca o número a cada 100ms
    } else {
        resultadoDiv.textContent = 'Todos os números foram sorteados!';
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
