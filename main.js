const form = document.getElementById('form-phone-book');
let linhas = '';

function validarTelefone(input) {
    // Verifica se o campo não está vazio
    if (input.value.trim() === '') {
        input.setCustomValidity('Por favor, insira um número de telefone');
        return false;
    }

    // Expressão regular para o formato (XX) XXXXX-XXXX
    var regex = /^\(\d{2}\) \d{5}-\d{4}$/;

    // Testa se o valor do input corresponde à expressão regular
    if (regex.test(input.value)) {
        input.setCustomValidity('');
        return true;
    } else {
        input.setCustomValidity('Por favor, insira um número de telefone válido no formato (XX) XXXXX-XXXX');
        return false;
    }
}

function validarNome(input) {
    // Verifica se o campo não está vazio
    if (input.value.trim() === '') {
        input.setCustomValidity('Por favor, insira um nome na agenda');
        return false;
    }

    // Expressão regular para aceitar apenas letras e espaços
    var regex = /^[a-zA-Z\s]+$/;

    // Testa se o valor do input corresponde à expressão regular
    if (regex.test(input.value)) {
        input.setCustomValidity('');
        return true;
    } else {
        input.setCustomValidity('Por favor, insira um nome válido');
        return false;
    }
}

// Adicionando evento de input para revalidar o campo nome-agenda
document.getElementById('nome-agenda').addEventListener('input', function() {
    this.setCustomValidity('');
});

// Adicionando evento de input para revalidar o campo numero-agenda
document.getElementById('numero-agenda').addEventListener('input', function() {
    this.setCustomValidity('');
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputNumeroAgenda = document.getElementById('numero-agenda');

    // Validar número de telefone e nome antes de enviar o formulário
    if (!validarNome(inputNomeAgenda) || !validarTelefone(inputNumeroAgenda)) {
        alert('Por favor, corrija os campos antes de enviar o formulário.');
        return;
    }

    let linha = '<tr>';
    linha += `<td>${inputNomeAgenda.value}</td>`;
    linha += `<td>${inputNumeroAgenda.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAgenda.value = '';
    inputNumeroAgenda.value = '';
});


