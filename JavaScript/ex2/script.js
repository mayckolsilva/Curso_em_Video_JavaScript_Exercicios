function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    
    if (fano.value.lenght == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente!');
    }
    else{
        var fsex = document.getElementsByName('radSex');
        var idade = ano - Number(fano.value)
        var genero = '';

        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', '../imagens/homem-crianca.jpg');
            }
            else if (idade < 21){
                img.setAttribute('src', '../imagens/homem-jovem.jpg');
            }
            else if (idade < 50){
                img.setAttribute('src', '../imagens/homem-adulto.jpg');
            }
            else{
                img.setAttribute('src', '../imagens/homem-idoso.jpg');
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', '../imagens/mulher-crianca.jpg');
            }
            else if (idade < 21){
                img.setAttribute('src', '../imagens/mulher-jovem.jpg');
            }
            else if (idade < 50){
                img.setAttribute('src', '../imagens/mulher-adulta.jpg');
            }
            else{
                img.setAttribute('src', '../imagens/mulher-idosa.jpg');
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}