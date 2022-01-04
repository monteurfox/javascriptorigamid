// var cor = 'Vermelho';

// switch (cor) {
//   case (cor = 'Verde'):
//     console.log('Palmeiras');
//     break;
//   case (cor = 'Vermelho'):
//     console.log('Flamengo');
//     break;
//   default:
//     console.log('Sem time.');
// }

// E X E R C Í C I O S  P R O P O S T O S

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 26;
var idadeIrmao = 21;

if (minhaIdade > idadeIrmao) {
  console.log('É maior');
} else if (minhaIdade === idadeIrmao) {
  console.log('É igual');
} else {
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2;
//R: 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //Truthy
var idade = 28; //Truthy
var possuiDoutorado = false; //Falsy
var empregoFuturo; //Falsy
var dinheiroNaConta = 0; //Falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

brasil = `${brasil}e6`;
china = `${china}e6`;

var comparaPais = china - brasil;

// O que irá aparecer no console?
if ('Gato' === 'gato' && 5 > 2) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

//R: Falso

// O que irá aparecer no console?
if ('Gato' === 'gato' || 5 > 2) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

//R: 'Cão'
