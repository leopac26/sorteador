let numerosDisponiveis = [];
let numerosSorteados = [];

const botaoSortear = document.getElementById('sortear');
const botaoResetar = document.getElementById('resetar');
const limiteInput = document.getElementById('limiteMaximo');
const resultadoDiv = document.getElementById('resultado');

function inicializarNumeros(limiteMaximo) {
    numerosDisponiveis = [];
    numerosSorteados = [];
    for (let i = 1; i <= limiteMaximo; i++) {
        numerosDisponiveis.push(i);
    }
    botaoSortear.disabled = false; // Reativa o botão ao resetar
}

botaoSortear.addEventListener('click', function() {
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
            const numeroAleatorio = Math.floor(Math.random() * limiteMaximo) + 1;
            resultadoDiv.innerHTML = 'Sorteando... <br><span style="font-size: 80px;">' + numeroAleatorio + '</span>';

            tempoDecorrido += 100;
            if (tempoDecorrido >= 5000) { // 5 segundos
                clearInterval(intervalo);

                // Sorteia realmente o número que ainda não saiu
                let numeroFinal;
                do {
                    numeroFinal = Math.floor(Math.random() * limiteMaximo) + 1;
                } while (numerosSorteados.includes(numeroFinal));

                numerosSorteados.push(numeroFinal);
                resultadoDiv.innerHTML = 'Número sorteado: <br><span style="font-size: 100px; color: green;">' + numeroFinal + '</span>';


                // Verificar se todos os números foram sorteados
                if (numerosSorteados.length === limiteMaximo) {
                    setTimeout(() => {
                        resultadoDiv.textContent = 'Todos os números foram sorteados!';
                        botaoSortear.disabled = true; // Desabilita o botão
                    }, 500);
                }
            }
        }, 100); // Troca o número a cada 100ms
    } else {
        resultadoDiv.textContent = 'Todos os números foram sorteados!';
        botaoSortear.disabled = true; // Garante que desativa
    }
});

// BOTÃO RESET
botaoResetar.addEventListener('click', function() {
    const limiteMaximo = parseInt(limiteInput.value);

    if (isNaN(limiteMaximo) || limiteMaximo < 1) {
        resultadoDiv.textContent = 'Por favor, insira um limite máximo válido (maior que zero).';
        return;
    }

    inicializarNumeros(limiteMaximo);
    resultadoDiv.textContent = 'Sorteio resetado! Pronto para recomeçar.';
});
