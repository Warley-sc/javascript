/********************** Operadores ***************/

/*
Os operadores na linguagemn de js é 
dividido em varias familias, entre elas está os 
operadores de aritméticos, atribuição, relacionais, 
lógico, ternários
*/

/************* Operadores aritméticos *************/

/*
operadores aritiméticos e nada mais nada menos que uma soma/multiplicação/subração e divisão, e claro, com essas atribuiçãoe é possível fazer divesas operações matematicas que envolve raizes, equaçoes de 2°grau, 1°grau e etc...
*/


/* ordens de procedencia dos operadores, as ordens se baseam basicamente entre */
/*
() prioridade máxima 
** prioridade secundario caso não tenha os parenteses
' * ', '/', ' % ' prioridade terceiaria caso não tenha os parenteses
'+', '-' não possui prioridade
*/


/*****Operadores aritméticos soma e subtração ******/


// var n1 = 5;  //retirar comentario
// var n2 = 5; //retirar comentario
// var soma = n1 + n2 //retirar comentario
// document.writeln(soma); //retirar comentario

// var n3 = 5; //retirar comentario 
// var n4 = 3; //retirar comentario
// var sub = n3 - n4; //retirar comentario
// document.writeln(sub);  //retirar comentario

/*****Operadores aritméticos multiplicação e divisão e resto ******/

//multiplicação
// var n1 = 10; //retirar comentario
// var n2 = 2; //retirar comentario
// var multiplicação = n1 * n2; //retirar comentario
// document.writeln(multiplicação); //retirar comentario

//divisão
// var n3 = 10; //retirar comentario
// var n4 = 2; //retirar comentario
// var divisao = n3 / n4; //retirar comentario
// document.writeln(divisao); //retirar comentario

//resto da divisão
// var n5 = 15; //retirar comentario
// var n6 = 7; //retirar comentario
// var resto = n5 % n6; //retirar comentario
//o resultado de uma divisão assim seria de 5,5,  mas como é o resto da divisão o resultado será 1 
// document.writeln(resto);  //retirar comentario

/*****Operadores aritméticos potencia ******/

// var n1 = 5; //retirar comentario
// var n2 = 2; //retirar comentario
// var potencia = n1 ** n2; //retirar comentario
// document.writeln(potencia) //retirar comentario

/*****Operadores aritméticos prioridade ******/

// var n1 = 5;  //retirar do comentario
// var n2 = 5;  //retirar do comentario
// var n3 = (n1 + n2) * 5 + 2;  //retirar do comentario
// document.writeln(n3);  //retirar do comentario


/* vamos falar de operadores relacionais, os operadores relacionais, sãoos operadores de grande parte das lingugens deprogramação, sendo eles 
 '   >    '    maior que
 '   <    '    menor que
 '   >=   '    maior ou igual
 '   <=   '    menor ou igual
 '   ==   '    igual
 '   !=   '    diferente que
 '  ===   '    denticos
 '  !==   '    diferencia tipos e valores

*/

/*****Operadores aritméticos prioridade ******/

// var x = 5;  //retirar do comentario
// var y = '5';  //retirar do comentario
// var z = x !== y;  //retirar do comentario e mudar os operadores relacionais
// document.writeln(z)

/*

operadores lógicos, basicamente são operadores que relaciona como "Not"(Negação), "And" (E) e "or"(OU), no javascript e feita da seguinte maneira essa relação

'   !    '  -> negação/Not
'   &&   '  -> E/And
'   ||   '  -> OU/Or
*/
// var x = 5; //retirar do comentario
// var y = 10; //retirar do comentario
// var z = ! x;  //retirar do comentario e mudar os operadores logicos

// document.writeln(z)


/*

operadores ternarios, são operadores que tem duas atribuiçoes e nele diz que se uma coisa aconter seguir tal caminho.
são eles :
'    ?    '  teste logico caso a 1 seja verdadeira 
'    :    '  teste logico caso a primeira de false a segunda dará verdadeira

 */

// var x = 10;
// var ret = x % 2 == 0 ? "aprovado" : "reprovado";
// window.document.writeln(ret)

