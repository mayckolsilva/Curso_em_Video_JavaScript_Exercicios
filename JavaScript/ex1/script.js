function carregar(){
    /* Criando os dois objetos */
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >=0 && hora < 12){
        img.src = '../imagens/manha_redimensionado.jpg';
        document.body.style.background = '#FFFF00';
    }
    else if (hora >= 12 && hora < 18){
        img.src = '../imagens/tarde_redimensionada.jpg';
        document.body.style.background = '#b9846f';
    }
    else{
        img.src = '../imagens/noite_redimensionado.jpg';
        document.body.style.background = '#515154';
    }
}