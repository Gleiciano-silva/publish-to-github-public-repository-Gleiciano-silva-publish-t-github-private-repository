document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;
    
    if (nome && email && mensagem) {
        alert('Obrigado, ' + nome + '! Sua mensagem foi enviada com sucesso.');
        document.getElementById('formContato').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});