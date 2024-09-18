carregaProfissionais = () => {

    let xhr = new XMLHttpRequest(); //Criação de um objeto para requisição no servidor
    let url = "https://my-json-server.typicode.com/juniorlimeiras/json/profissionais";
    xhr.open("GET", url); //Fazendo uma requisição para esta URL
    let tabela = document.querySelector('table');
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4 && xhr.status === 200){
            let dados = JSON.parse(xhr.responseText); //Transformando o conteúdo de JSON em uma lista chamada dados
            for (item of dados){ //Percorrendo a lista
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
        }
});
        xhr.send(); // Enviando a requisição
};

carregaProfissionais();