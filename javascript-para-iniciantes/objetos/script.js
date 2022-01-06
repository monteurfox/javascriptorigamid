// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const meusDados = {
  nome: "Matheus",
  idade: 26,
  Estado: "RJ",
};
// Crie um método no objeto anterior, que mostre o seu nome completo
const meusDados2 = {
  nome: "Matheus",
  sobrenome: "Monteiro",
  idade: 26,
  Estado: "RJ",

  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const cachorro = {
  cor: "Preto",
  raca: "Labrador",
  idade: 10,

  latir(e) {
    return e === ("homem" || "Homem") ? "Latindo" : "Quieto";
  },
};
