document.getElementById('sortear').addEventListener('click', function() {
    const limiteInput = document.getElementById('limiteMaximo');
    const resultadoDiv = document.getElementById('resultado'); // Aqui está a variável resultadoDiv
    const limiteMaximo = parseInt(limiteInput.value);

    if (isNaN(limiteMaximo) || limiteMaximo < 1) {
        resultadoDiv.textContent = 'Por favor, insira um limite máximo válido (maior que zero).';
        return;
    }

    // Gera um número inteiro aleatório entre 1 e o limiteMaximo
    const numeroAleatorio = Math.floor(Math.random() * limiteMaximo) + 1;

    resultadoDiv.textContent = 'Número sorteado: ' + numeroAleatorio;
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(() => console.log('Service Worker registrado com sucesso.'))
      .catch(error => console.log('Erro ao registrar o Service Worker:', error));
  }
  