function cadastrarUsuario() {
    var nome = document.getElementById('exampleInputNome').value;
    var email = document.getElementById('exampleInputEmail1').value;
    var senha = document.getElementById('exampleInputPassword1').value;
    var confirmacaoSenha = document.getElementById('exampleInputPassword2').value;

    if (nome.trim() === '' || email.trim() === '' || senha.trim() === '' || confirmacaoSenha.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    if (senha !== confirmacaoSenha) {
        alert('A senha e a confirmação de senha devem ser iguais.');
        return false;
    }

    // Recupera os usuários existentes ou inicializa um array vazio
    var storedUsers = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se o email já está cadastrado
    if (storedUsers.some(user => user.email === email)) {
        alert('Este email já está cadastrado.');
        return false;
    }

    // Adiciona o novo usuário ao array
    var novoUsuario = { nome: nome, email: email, senha: senha };
    storedUsers.push(novoUsuario);

    // Armazena o array atualizado no localStorage
    localStorage.setItem('usuarios', JSON.stringify(storedUsers));

    alert('Cadastro bem-sucedido! Redirecionando para a página inicial.');

    // Simula o clique no link de redirecionamento
    document.getElementById('linkRedirecionar').click();

    return false; // Impede o envio do formulário
}