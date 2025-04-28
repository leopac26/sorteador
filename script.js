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


document.getElementById('sortear').addEventListener('click', function() {
  const limiteInput = document.getElementById('limiteMaximo');
  const resultadoDiv = document.getElementById('resultado');
  const limiteMaximo = parseInt(limiteInput.value);

  if (isNaN(limiteMaximo) || limiteMaximo < 1) {
      resultadoDiv.textContent = 'Por favor, insira um limite máximo válido (maior que zero).';
      return;
  }

  if (numerosSorteados.length >= limiteMaximo) {
      resultadoDiv.textContent = 'Todos os números já foram sorteados.';
      return;
  }

  let intervalo;
  let tempoDecorrido = 0;

  intervalo = setInterval(() => {
      // Enquanto estiver sorteando, mostra números aleatórios
      const numeroAleatorio = Math.floor(Math.random() * limiteMaximo) + 1;
      resultadoDiv.textContent = 'Sorteando... ' + numeroAleatorio;
      tempoDecorrido += 100;
      if (tempoDecorrido >= 2000) { // 2 segundos
          clearInterval(intervalo);

          // Sorteia realmente o número que ainda não saiu
          let numeroFinal;
          do {
              numeroFinal = Math.floor(Math.random() * limiteMaximo) + 1;
          } while (numerosSorteados.includes(numeroFinal));

          numerosSorteados.push(numeroFinal);
          resultadoDiv.textContent = 'Número sorteado: ' + numeroFinal;
      }
  }, 100); // Troca o número a cada 100ms
});
