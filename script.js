'use strict';

function msgFoto(hora, msgHora, cor, diretorio){
    let msgText = document.querySelector('#msgText');
    let img = document.querySelector("#img");
    document.body.style.backgroundColor = cor;
    msgText.innerHTML = `Agora são <strong>${hora} da ${msgHora}</strong>`;
    img.src = diretorio;
};

function opcaoMsg(horaAtual){
    if(horaAtual >= '00:00:00' && horaAtual < '12:00:00'){
        msgFoto(horaAtual, 'MANHÃ', '#e1a17b', 'manha.jpg');
    }
    else if(horaAtual >= '12:00:00' && horaAtual < '18:00:00'){
        msgFoto(horaAtual, 'TARDE', '#5c3343', 'tarde.jpg');
    }
    else {
        msgFoto(horaAtual, 'NOITE', '#07081a', 'noite.jpg');
    };
};

function horaAtual(){
    setInterval(function(){
        let hora = new Date().toLocaleTimeString('pt-BR');
        opcaoMsg(hora);      
    }, 1000); 
};
