// script_pagina3.js

$(document).ready(function() {
    // Função para carregar e exibir as mensagens na tabela
    function carregarMensagens() {
        var mensagens = obterMensagens();

        if (mensagens.length > 0) {
            var tabela = '<table border="1"><tr><th>ID</th><th>Mensagem</th></tr>';

            for (var i = 0; i < mensagens.length; i++) {
                tabela += '<tr><td>' + mensagens[i].id + '</td><td>' + mensagens[i].mensagem + '</td></tr>';
            }

            tabela += '</table>';
            $('#tabelaMensagens').html(tabela);
        } else {
            $('#tabelaMensagens').html('<p>Nenhuma mensagem disponível.</p>');
        }
    }

    // Chamar a função para carregar mensagens ao carregar a página
    carregarMensagens();
});
