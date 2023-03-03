// criando um array vazio para guatdar os items
let cadastrados = [{nome:'Juca'},{nome:'Jorge'}];

let txtInputNome = document.getElementById('txtInputNome');
let txtInputNascimento = document.getElementById('txtInputNascimento');
let btnCadastrar = document.getElementById('btnCadastrar');

btnCadastrar.onclick = function () {
    cadastrados.push({
        nome: txtInputNome.value,
        dataNascimento: txtInputNascimento.value,
    });
    txtInputNome.value = null;
    txtInputNascimento.value = null;
    atualizaListaHtml();
}

function atualizaListaHtml() {

    if (cadastrados.length > 0) {
        let htmlLista = '';
        cadastrados.forEach(i => {
            const index = cadastrados.indexOf(i);
            htmlLista += `<li>${i.nome} (${i.dataNascimento}) <button onclick="excluir(${index})">excluir</button> </li>`;
        })
        document.getElementById('lista').innerHTML = htmlLista;
    } else {
        document.getElementById('lista').innerHTML = 'nenhum cadastrado'
    }
}

function excluir(index) {
    console.log(index);
    if(cadastrados.length > -1){
        cadastrados.splice(index, 1);
    }
    console.log(cadastrados);
    atualizaListaHtml();
}

atualizaListaHtml();