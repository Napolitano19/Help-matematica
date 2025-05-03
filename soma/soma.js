function teste() {
    let resultado = document.querySelector('.primeira strong')
    if (resultado.innerHTML == 1) {
        alert()
    }
}
function teste2() {
    // Aqui pode ir outra lógica, se precisar
}

// Seleciona todos os botões de número
const botoes = document.querySelectorAll('input[type="button"]');

// Seleciona a tag <strong> onde o valor será exibido
const resultadoTag = document.querySelector('.primeira strong');

// Adiciona o evento de clique a cada botão
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        resultadoTag.textContent = botao.value;
    });
});
