// script_pagina2.js

$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault();

        var usuario = $('#usuario').val();
        var senha = $('#senha').val();

        if (usuario.trim() !== '' && senha.trim() !== '') {
            var credenciais = {
                usuario: usuario,
                senha: senha
            };

            var validado = validarUsuario(credenciais);

            if (validado) {
                // Redirecionar para a página administrativa ou executar a lógica desejada
                alert('Login bem-sucedido! Redirecionando...');
            } else {
                alert('Login ou senha inválidos. Tente novamente.');
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
