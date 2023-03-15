/* 
Objetivo - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

1 - pegar elemento HTML dos botões

2 - identificar o clique do usuario n botão

3 - desmarcar botão selecionado anterior

4 - marcar o botão clicando como se estivecesse selecionada

5 - esconder a imagem fundo anterior

6 - fazer aparecer a imagem de fundo correspondente ao botão clicado 
*/

// Passo 1 pegar elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// 2 - identificar o clique do usuario n botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {    
        // 3 - desmarcar botão selecionado anterior
        desativarBotaoSelecionado();

        // 4 - marcar o botão clicando como se estivecesse selecionada
        selecionalBotaoCarrossel(botao);

        // 5 - esconder a imagem fundo anterior
        esconderImagemativa();

        //6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostrarImagemDeFundo(indice);
    })
});

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionalBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemativa() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
