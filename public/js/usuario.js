document.addEventListener('DOMContentLoaded', function () {
    
    var storedUsers = JSON.parse(localStorage.getItem('usuarios')) || [];

   
    if (storedUsers.length > 0) {
        var userInfoContainer = document.getElementById('userInfo');

        // Itera sobre os usuários armazenados
        storedUsers.forEach(function (storedUser) {
            var userDiv = document.createElement('div');
            userDiv.classList.add('user-info-box');

            
            var nameParagraph = document.createElement('p');
            var emailParagraph = document.createElement('p');
            var passwordParagraph = document.createElement('p');

           
            nameParagraph.textContent = 'Nome: ' + storedUser.nome;
            emailParagraph.textContent = 'Email: ' + storedUser.email;
            passwordParagraph.textContent = 'Senha: ' + storedUser.senha;

           
            userDiv.appendChild(nameParagraph);
            userDiv.appendChild(emailParagraph);
            userDiv.appendChild(passwordParagraph);

          
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.addEventListener('click', function () {
                // Remove as informações do usuário do localStorage
                storedUsers = storedUsers.filter(function (user) {
                    return user.email !== storedUser.email;
                });

                localStorage.setItem('usuarios', JSON.stringify(storedUsers));

                window.location.reload();
            });

           
            userDiv.appendChild(deleteButton);

           
            userInfoContainer.appendChild(userDiv);
        });
    }

   
    var btnAdicionarUsuario = document.createElement('button');
    btnAdicionarUsuario.textContent = 'Adicionar Usuário';

  
    document.body.appendChild(btnAdicionarUsuario);

    // Adiciona o manipulador de eventos para o botão "Adicionar Usuário"
    btnAdicionarUsuario.addEventListener('click', function () {
        // Redireciona para a página de cadastro
        window.location.href = 'http://localhost:8000/cadastro';
    });
});
