"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Criando a interface readline para capturar dados do usuário
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Função que retorna "sucesso" ou "erro" com base em um número aleatório
function gerarResultado() {
    var numeroAleatorio = Math.random(); // Gera um número aleatório entre 0 e 1
    // Se o número for menor que 0.5, retorna "sucesso", senão "erro"
    return numeroAleatorio < 0.5 ? "sucesso" : "erro";
}
// Função para capturar a resposta do usuário
function coletarRespostaUsuario() {
    rl.question('Deseja gerar um resultado? (sim/não): ', function (resposta) {
        if (resposta.toLowerCase() === 'sim') {
            var resultado = gerarResultado();
            console.log("O resultado gerado \u00E9: ".concat(resultado));
        }
        else if (resposta.toLowerCase() === 'não') {
            console.log('Você escolheu não gerar um resultado.');
        }
        else {
            console.log('Resposta inválida! Por favor, digite "sim" ou "não".');
        }
        // Fechando a interface readline
        rl.close();
    });
}
// Chamando a função para coletar a resposta do usuário
coletarRespostaUsuario();
