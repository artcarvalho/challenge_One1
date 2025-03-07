let lista_amigos = [];

function adicionarAmigo(){
    let nome = document.querySelector('#amigo').value;

    if (nome == ''){
        alert('Por favor, digite um nome válido!');
    }else{
        lista_amigos.push(nome);
        mostrarNaLista(nome, 'listaAmigos');
        document.querySelector('#amigo').value = '';
    }
    
}

function mostrarNaLista(nome, lista){
    lista = document.getElementById(lista);
    var li = document.createElement('li');
    li.innerText = nome;
    lista.appendChild(li);
}

function escolhe(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
}

function sortearAmigo(){
    if (lista_amigos.length > 0){
    numeroAleatorio = escolhe(0, lista_amigos.length)
    escolhido = lista_amigos[numeroAleatorio];
    mostrarNaLista(`O amigo secreto sorteado é: ${escolhido}`, 'resultado')
    }
    else{
        alert('Erro, nenhum amigo cadastrado!');
    }
    
    return 0;
}
