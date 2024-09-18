let botao = document.querySelector('button') 
botao.onclick = () => { //Ao clicar no botão deve abrir uma caixa de alerta com a mensagem do parâmetro
    alert('Forma externa de JS');
}

// Manipuladores de eventos
botao.addEventListener('click', mensagem) //O addEventListener adiciona mais uma função ao clicar no botão
botao.addEventListener('click', alteraTitulo)

//Funções que podem ser chamadas no acontecer de um evento
function mensagem() {
    alert('Forma com manipulador de evento JS');
}

function alteraTitulo() {
    let titulo = document.querySelector('h1'); //Queryselector selecione uma tag e let pega essa tag (document se trata do arquivo em HTML)
    titulo.innerHTML = 'Web Academy'; //innerHTML altera o conteúdo de uma tag
    titulo.style.color = 'red';
}