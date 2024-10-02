
function verificar (){
    var velocidade = parseFloat(window.document.getElementById('vel').value);
    var brs = parseFloat(window.document.getElementById('br1').value);
    var resul = window.document.getElementById("resultado")

    if(velocidade >= 51 && brs === 120){
        resul.innerHTML = `A velocidade permitida de via é de 50km/h, o motorista passou a ${velocidade}, mororista Multado`;

    }
    else if(velocidade >= 81 && brs != 120){
        resul.innerHTML = `A velocidade permitida de via é de 80km/h, o motorista passou a ${velocidade}, mororista Multado`;
    }
    else{
        resul.innerHTML = `O motorista passou dentro dos padrões, dirija com cuidado e segurança!`;
    }
};

