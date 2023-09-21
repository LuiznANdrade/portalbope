document.getElementById('sou-caveira').addEventListener('click', function(){
    var senha = prompt("Qual é a senha?");

    if (senha === 'bope1864') {
        location.href = "home.html";
        localStorage.setItem('logadoBope', 'true'); // Define o valor como 'true' ou qualquer outro valor que você preferir
    }
});

// Função para fazer logoff
function fazerLogoff() {
    // Remove a chave 'logadoBope' do localStorage
    localStorage.removeItem('logadoBope');
    
    // Redireciona para a página index.html
    window.location.href = "index.html";
}

// Adicione um evento de clique ao elemento com o id #logoff
document.getElementById('logoff').addEventListener('click', fazerLogoff);