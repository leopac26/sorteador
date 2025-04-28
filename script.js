let numerosDisponiveis = [];

document.getElementById('sortear').addEventListener('click', function() {
    const limiteInput = document.getElementById('limiteMaximo');
    const resultadoDiv = document.getElementById('resultado');
    const limiteMaximo = parseInt(limiteInput.value);

    if (isNaN(limiteMaximo) || limiteMaximo < 1) {
        resultadoDiv.textContent = 'Por favor, insira um limite máximo válido (maior que zero).';
        return;
    }

    // Preenche o array com os números disponíveis de 1 até o limite máximo
    if (numerosDisponiveis.length === 0) {
        for (let i = 1; i <= limiteMaximo; i++) {
            numerosDisponiveis.push(i);
        }
    }

    // Verifica se ainda há números disponíveis
    if (numerosDisponiveis.length === 0) {
        resultadoDiv.textContent = 'Todos os números foram sorteados!';
        return;
    }

    // Sorteia um número aleatório dos números disponíveis
    const indice = Math.floor(Math.random() * numerosDisponiveis.length);
    const numeroAleatorio = numerosDisponiveis.splice(indice, 1)[0]; // Remove o número sorteado

    resultadoDiv.textContent = 'Número sorteado: ' + numeroAleatorio;
});
