/* ************************** recebendo dados e uma var  ******************** */

/*
 para fazer essa manipulação, devemos ter em mente que uma variavel é responsavel poe quardar valores, isso é ela vai receber os valores descritos e vai amarzena-las de acordo com o quer for descrito 
 */

/* ************************** veja o Exemplo a baixo  ******************** */


// var nome = window.prompt('Qual o seu nome?'); // retire do cometario
// window.alert('O seu nome é ' + nome); // retire do cometario


/*

Vamos entender o que aconteceu aqui! como descrito a cima, para receber um dado, esse dado deve estar em uma var/cont/let, essas medidas garatem que os dados fiquem salvos então a var(que foi a escolha para esse exemplo) recebe a palavra 'nome' como chamado e esse 'nome' vai receber um valor do prompt(No caso o  usuario vai escrever o que o prompt pede) e o valor ficará armazenado no chamado 'nome' -> dando o alert, será exibido o valor que o usuario digitou

*/

/* 
exemplos par anumeros, quamdo tratamops de receber valores do usuario de forma de prompt, devmos sempre lembrar que tudo que é digitado pelo usuario tem o valor de string, ou seja um texto, sempre que tentamos fazer uma coisa relacionada a soma de valores de prompt , devemos tratar s dados para number caso ao contratio, ocorrerá um erro igual no exemplo a baixo.
*/

/* *********** veja o Exemplo errado de receber dados number  *************** */

//var n1 = window.prompt('digite um valor.'); // retire do cometario
//var n2 = window.prompt('digite um valor.'); // retire do cometario
//var soma = n1 + n2 ; // retire do cometario
//alert('O valor das somas é : ' + soma) // retire do cometario

/*
 perceba que o valor vai ser a junção dos numeros de n1 + n2 e não a soma, se o usuario por exemplo coloccar qu n1 = 5 e n2 = 5, obviamente o que esperando é que a var somar, tenha o resultado de 10, mas não é isso que aconteece, a variavel somar no retorbnará o valor '55', que que o prompt tem a natureza de converter tudo para string
 */

 /* *********** fazendo a conversão de string para number  *************** */

// var n1 = Number.parseInt(window.prompt('digite um valor.')); // retire do cometario
// var n2 = Number.parseInt(window.prompt('digite um valor.')); // retire do cometario
// var soma = n1 + n2 ; // retire do cometario
// alert('O valor das somas é : ' + soma) // retire do cometario

/*
veja que o código teve algumas modificaçãoes, em uma analise percebemos que a utilização do comando "Number.parseInt()" conseguimos fazer aquela manipulação dos dados recebidos, e conseguimos fazer a conversão de valores recebidos pelo prompt, assim se o valor de n1 for 5 e valor de n2 for 5 ,  o resultado da soma não será mas 55, mas sim 10, que era o resultado esperado.
*/

 /* *********** outras formas de receber valores *************** */

// var n1 = Number.parseFloat(window.prompt('digite um valor.')); // retire do cometario
// var n2 = Number.parseFloat(window.prompt('digite um valor.')); // retire do cometario
// var soma = n1 + n2 ; // retire do cometario
// alert('O valor das somas é : ' + soma) // retire do cometario

/* 

aqui vamos receber apenas valores com numeros reais, como 1.0, 1.1, 1.2.....

*/

// var n1 = Number(window.prompt('digite um valor.'));
// var n2 = Number(window.prompt('digite um valor.'));
// var soma = n1 + n2 ;
// alert('O valor das somas é : ' + soma)

/*
 aqui vamos receber qualquer dado de entradada numeriaca, seja Int ou Float
*/

 /* *********** fazendo a conversão de number par a string *************** */

// var n1 = Number(window.prompt('digite um valor.'));
// var n2 = Number(window.prompt('digite um valor.'));
// var s1 = String(n1);
// var s2 = String(n2);
// var soma = s1 + s2;
// alert('O valor das somas é : ' + soma)

/*
pereceba que usando o comando em s1 e s2 "String()" ocorre uma conversão novamente para String/texto, o que aconteceu? var n1 e n2 recebeu um valor string que foi convertida para number/numero se somassemos os 2 daria o valor de uma soma normalmente, mas logo em seguida criamos mais 2 variaveis que recebe os valores n1 e n2 e converteuos valores em string novamente, qunado somados, o valores se tornaram um a junção então se n1= 5 e n2 = 5 o resulrtado não será mais 10 e sim 55 ja que vai juntar o n1 e n2 e não somar n1 + n2 */

 /* *********** outra forma de fazer a comversão para string *************** */
 
var n1 = Number(window.prompt('digite um valor.'));
var n2 = Number(window.prompt('digite um valor.'));
var s1 = n1.toString();
var s2 = n2.toString();
var soma = s1 + s2;
alert('O valor das somas é : ' + soma)

/*
O "toString()" faz a mesma coisa de converter para string o que muda é a sintax
*/