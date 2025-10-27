"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Criando a interface readline para capturar dados do usuário
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Função genérica que exibe um valor de qualquer tipo
function exibirElemento(valor) {
    console.log("Valor inserido:", valor);
}
// Função para coletar o valor do usuário
function coletarValor() {
    rl.question('Digite um valor para exibir: ', function (valor) {
        // Tenta converter o valor para número. Se não for possível, mantém como string
        var numero = parseFloat(valor);
        // Se for um número válido, chama a função passando o número
        if (!isNaN(numero)) {
            exibirElemento(numero);
        }
        else {
            // Caso contrário, passa o valor como uma string
            exibirElemento(valor);
        }
        // Fechando a interface readline
        rl.close();
    });
}
// Chamando a função para coletar o valor do usuário
coletarValor();
