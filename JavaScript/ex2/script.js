function verificar(){
    
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    
    if (fano.value.lenght == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente!');
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