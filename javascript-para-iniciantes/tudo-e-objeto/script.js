// nomeie 3 propriedades ou métodos de strings
const nome = "Matheus";

// nome.charAt
// nome.length
// nome.slice

// nomeie 5 propriedades ou métodos de elementos do DOM
const botao = document.querySelector(".btn");

// botao.append
// botao.innerHTML
// botao.classList
// botao.contains
// botao.getAttribute

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

const copiaTexto = function () {
  const copyText = document.getElementById("txtBox");

  navigator.clipboard.writeText(copyText.value);
  alert("Texto copiado!");
  //alert("Copied the text: " + copyText.value);
};
