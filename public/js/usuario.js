document.addEventListener('DOMContentLoaded', function () {
    // Recupera as informações dos usuários do localStorage
    var storedUsers = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se há informações de usuários
    if (storedUsers.length > 0) {
        // Cria um elemento de div para conter as informações dos usuários
        var userInfoContainer = document.getElementById('userInfo');

        // Itera sobre os usuários armazenados
        storedUsers.forEach(function (storedUser) {
            var userDiv = document.createElement('div');
            userDiv.classList.add('user-info-box');

            // Cria elementos de parágrafo para cada informação do usuário
            var nameParagraph = document.createElement('p');
            var emailParagraph = document.createElement('p');
            var passwordParagraph = document.createElement('p');

            // Adiciona as informações ao texto dos parágrafos
            nameParagraph.textContent = 'Nome: ' + storedUser.nome;
            emailParagraph.textContent = 'Email: ' + storedUser.email;
            passwordParagraph.textContent = 'Senha: ' + storedUser.senha;

            // Adiciona os parágrafos à div do usuário
            userDiv.appendChild(nameParagraph);
            userDiv.appendChild(emailParagraph);
            userDiv.appendChild(passwordParagraph);

            // Cria um botão de excluir
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.addEventListener('click', function () {
                // Remove as informações do usuário do localStorage
                storedUsers = storedUsers.filter(function (user) {
                    return user.email !== storedUser.email;
                });

                localStorage.setItem('usuarios', JSON.stringify(storedUsers));

                // Recarrega a página para refletir as alterações
                window.location.reload();
            });

            // Adiciona o botão de excluir à div do usuário
            userDiv.appendChild(deleteButton);

            // Adiciona a div do usuário ao container de informações do usuário
            userInfoContainer.appendChild(userDiv);
        });
    }

    // Adiciona o botão "Adicionar Usuário"
    var btnAdicionarUsuario = document.createElement('button');
    btnAdicionarUsuario.textContent = 'Adicionar Usuário';

    // Adiciona o botão "Adicionar Usuário" abaixo das informações do usuário
    document.body.appendChild(btnAdicionarUsuario);

    // Adiciona o manipulador de eventos para o botão "Adicionar Usuário"
    btnAdicionarUsuario.addEventListener('click', function () {
        // Redireciona para a página de cadastro
        window.location.href = 'http://localhost:8000/cadastro';
    });
});