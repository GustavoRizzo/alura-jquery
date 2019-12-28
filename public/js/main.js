var tempoInicial = 5;
var campo = $(".campo-digitacao");
$("#botao-reiniciar").click(reiniciaJogo);

$(function(){
    console.log("página carregou!");

    

    atualizaTamanhoFrase();
    iniciaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
});


function atualizaTamanhoFrase (){
    var frase = $(".frase").text();
    numPalavras = frase.split(" ").length;
    console.log(numPalavras);

    var tamanhoFrase =$("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function iniciaContadores (){
    campo.on("input", function() {
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometro (){
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
}

function reiniciaJogo(){
    campo.attr("disabled",false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
}

