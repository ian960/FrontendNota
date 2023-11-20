
$(document).ready(function() {
    $('#mensagemForm').submit(function(event) {
        event.preventDefault();

        var mensagem = $('#mensagem').val();

        if (mensagem.trim() !== '') {
            inserirMensagem({ mensagem: mensagem });
            $('#mensagem').val('');
            alert('Mensagem enviada com sucesso!');
        } else {
            alert('Por favor, insira uma mensagem antes de enviar.');
        }
    });
});