console.log("olá mundo");
var frase = $(".frase").text();
numPalavras = frase.split(" ").length;
console.log(numPalavras);

var tamanhoFrase =$("#tamanho-frase");
tamanhoFrase.text(numPalavras);

