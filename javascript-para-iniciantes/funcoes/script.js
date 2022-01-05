// Crie uma função para verificar se um valor é Truthy
const verifyTruthy = (dado) => (!!dado === true ? 'É True' : 'É false');

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
const perimetroQuadrado = (perimetro) => {
  return perimetro * 4;
};
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
const nomeCompleto = (nome, sobrenome) => {
  return `${nome} ${sobrenome}`;
};
// Crie uma função que verifica se um número é par
const verificaPar = (numero) => (numero % 2 === 0 ? 'É par' : 'É impar');
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
const tipoDado = (dado) => typeof dado;
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', () => console.log('Matheus Monteiro'));

// Corrija o erro abaixo
// function precisoVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }
// precisoVisitar(20);
// jaVisitei(20);

//R:
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
