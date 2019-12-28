console.log("olá mundo");
var frase = $(".frase").text();
numPalavras = frase.split(" ").length;
console.log(numPalavras);

var tamanhoFrase =$("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");
campo.on("input", function() {
    var conteudo = campo.val();

    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
});

var tempoRestante = 5;
$("#tempo-digitacao").text(tempoRestante);

campo.one("focus", function() {
    console.log("focado");
    var cronometroID = setInterval(function() {
        console.log("loppando");
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);
        if (tempoRestante < 1){
            campo.attr("disabled", true);
            clearInterval(cronometroID);
        }
    },1000);
});