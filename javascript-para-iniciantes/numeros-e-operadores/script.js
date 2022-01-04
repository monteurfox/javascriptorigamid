// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
//R: 10 + ((5 * 2) / 2) + 20 = 35

// Crie duas expressões que retornem NaN
var expressao1 = '10s' - 5;
var expressao2 = 'Sabado' / 3;

// Somar a string '200' com o número 50 e retornar 250
var n1 = '200';
var n2 = +50;
var soma = +n1 + n2;

// Incremente o número 5 e retorne o seu valor incrementado
var numero5 = 5;
++numero5;

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
//var pesoPorDois = peso / 2; // NaN (Not a Number)

//R:
var pesoPorDois = numero / 2 + unidade; // '40kg'
