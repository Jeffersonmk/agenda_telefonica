const form = document.getElementById('form-phone-book');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputNumeroAgenda = document.getElementById('numero-agenda');

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

