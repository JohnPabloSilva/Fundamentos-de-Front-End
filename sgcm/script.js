carregaProfissionais = () => {

    let url = "https://my-json-server.typicode.com/juniorlimeiras/json/profissionais";
    fetch(url).then(resposta => {
        return resposta.json();
        }).then(dados => {
            for (const item of dados){
                insertirProfissional(item);
                exclui_linha()
            }
        })
    // let xhr = new XMLHttpRequest(); //Criação de um objeto para requisição no servidor
    // xhr.open("GET", url); //Fazendo uma requisição para esta URL
    // let tabela = document.querySelector('table');
    // xhr.addEventListener('readystatechange', () => {
    //     if (xhr.readyState === 4 && xhr.status === 200){
    //         let dados = JSON.parse(xhr.responseText); //Transformando o conteúdo de JSON em uma lista chamada dados
    //         for (item of dados){ //Percorrendo a lista
    //             let linha = document.createElement('tr'); //Criação de tags dentro do HTML
    //             let id = document.createElement('td');
    //             let nome = document.createElement('td');
    //             let registro = document.createElement('td');
    //             let telefone = document.createElement('td');
    //             let email = document.createElement('td');
    //             let especialidade = document.createElement('td');
    //             let unidade = document.createElement('td');

    //             let opcoes = document.createElement('td');

    //             id.textContent = item.id; //Preenchendo os elementos td HTML
    //             nome.textContent = item.nome;
    //             registro.textContent = item.registro;
    //             telefone.textContent = item.telefone;
    //             email.textContent = item.email;
    //             especialidade.textContent = item.especialidade;
    //             unidade.textContent = item.unidade;

    //             opcoes.innerHTML = `<a class="botao" href="javascript:void(0)">Editar</a> " <a class="excluir" href="javascript:void(0)">Excluir</a>`;
    //             //Preenchendo a linha do HTML
    //             linha.appendChild(id);
    //             linha.appendChild(nome);
    //             linha.appendChild(registro);
    //             linha.appendChild(telefone);
    //             linha.appendChild(email);
    //             linha.appendChild(especialidade);
    //             linha.appendChild(unidade);
    //             linha.appendChild(opcoes);

    //             tabela.tBodies[0].appendChild(linha); //Colocando a linha dentro da tabela

    //         }
    //     }
    //     //Colocar a função que permite a exclusão da linha
    //     exclui_linha();
    // });
    // xhr.send(); // Enviando a requisição
};

carregaProfissionais();
//Carregando um profissional

let form = document.querySelector('form')
let tabela = document.querySelector('table');
//Cada formulário possui apenas um submit
form.addEventListener('submit', (evento) => {

    evento.preventDefault(); // gatante que a página não será recessefada

    objeto = {
        id: tabela.tBodies[0].rows.length + 1,
        nome: form.nome.value,//Nome se trata de um "atributo" do "objeto" form, como nome se trata de um input (também um "objeto") é necessário usar o value para pegar o valor digitado na Entry
        registro: form.registroConselho.value,
        telefone: form.telefone.value,
        email: form.email.value,
        unidade: form.unidade[form.unidade.selectedIndex].label,
        especialidade: form.especialidade[form.especialidade.selectedIndex].label
    };

    insertirProfissional(objeto);
    //Carregar a opçao que exclui uma linha
    exclui_linha();
    botaoAdicionar.classList.remove('inativo');
    div.classList.add('inativo');
    
});

//Função que recebe um objeto do tipo profissional

const insertirProfissional = (item) => {
    let linha = document.createElement('tr'); //Criação de tags dentro do HTML
    let id = document.createElement('td');
    let nome = document.createElement('td');
    let registro = document.createElement('td');
    let telefone = document.createElement('td');
    let email = document.createElement('td');
    let especialidade = document.createElement('td');
    let unidade = document.createElement('td');

    let opcoes = document.createElement('td');

    id.textContent = item.id; //Preenchendo os elementos td HTML
    nome.textContent = item.nome;
    registro.textContent = item.registro;
    telefone.textContent = item.telefone;
    email.textContent = item.email;
    especialidade.textContent = item.especialidade;
    unidade.textContent = item.unidade;

    opcoes.innerHTML = `<a class="botao" href="javascript:void(0)">Editar</a> " <a class="excluir" href="javascript:void(0)">Excluir</a>`;
    //Preenchendo a linha do HTML
    linha.appendChild(id);
    linha.appendChild(nome);
    linha.appendChild(registro);
    linha.appendChild(telefone);
    linha.appendChild(email);
    linha.appendChild(especialidade);
    linha.appendChild(unidade);
    linha.appendChild(opcoes);

    tabela.tBodies[0].appendChild(linha); //Colocando a linha dentro da tabela
}

//Botão Adicionar
//Pegar o elemento pelo id usando a seguinte maneira

let botaoAdicionar = document.querySelector('div#add');
let div = document.querySelector('div.inativo')

botaoAdicionar.addEventListener('click', () => {
    div.classList.remove('inativo');
    botaoAdicionar.classList.add('inativo')
    form.reset();
});

// Botaõ Cancelar

let botaoCancelar = document.querySelector('input[type="button"]');

botaoCancelar.addEventListener('click', () =>{
    div.classList.add('inativo');
    botaoAdicionar.classList.remove('inativo');

});

//Botão Excluir 
//const exclui_linha = () => {}
function exclui_linha() {
    //Lista de botões
    let botoesExcluir = document.querySelectorAll('a.excluir');

    for (const botao of botoesExcluir) {
        botao.addEventListener('click', () => {
            botao.parentNode.parentNode.remove();
        })
    }
    };
//Tentando fazer um sozinho antes da aula
// let id = 0;
// let tabela = document.querySelector('table');
// let botao = document.getElementById("form_profissional").addEventListener('submit', (event) => {
//     event.preventDefault();
    
//     let linha = document.createElement('tr');
//     id += 1;

//     let idCell = document.createElement('td');
//     let nome = document.createElement('td');
//     let registro = document.createElement('td');
//     let telefone = document.createElement('td');
//     let email = document.createElement('td');
//     let especialidade = document.createElement('td');
//     let unidade = document.createElement('td');

//     id.textContent = id;
//     nome.textContent = document.getElementById("nome").value;
//     registro.textContent = document.getElementById("registroConselho").value; // .value
//     telefone.textContent = document.getElementById('telefone').value; // .value
//     email.textContent = document.getElementById('email').value; // .value
//     unidade.textContent = document.getElementById('unidade').value; // .value
//     especialidade.textContent = document.getElementById('especialidade').value; 

//     opcoes.innerHTML = `<a class="botao" href="javascript:void(0)">Editar</a> " <a class="excluir" href="javascript:void(0)">Excluir</a>`;

//     linha.appendChild(idCell);
//     linha.appendChild(nome);
//     linha.appendChild(registro);
//     linha.appendChild(telefone);
//     linha.appendChild(email);
//     linha.appendChild(unidade);
//     linha.appendChild(especialidade);
//     linha.appendChild(opcoes);

//     tabela.tBodies[0].appendChild(linha);

//     document.getElementById(".form_profissional").reset();

// });
