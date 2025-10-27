"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Criando a interface readline para capturar dados do usuário
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Função para coletar o nome e o preço do produto do usuário
function coletarDadosProduto() {
    rl.question('Digite o nome do produto: ', function (nome) {
        rl.question('Digite o preço do produto: ', function (preco) {
            // Convertendo o preço para número
            var precoNum = parseFloat(preco);
            // Verificando se o preço é um número válido
            if (isNaN(precoNum)) {
                console.log('Por favor, insira um preço válido.');
                rl.close();
                return;
            }
            // Criando a tupla [nome, preço]
            var produto = [nome, precoNum];
            // Exibindo os valores da tupla
            console.log("Produto: ".concat(produto[0]));
            console.log("Pre\u00E7o: R$ ".concat(produto[1].toFixed(2)));
            // Fechando a interface readline
            rl.close();
        });
    });
}
// Chamando a função para coletar os dados do usuário
coletarDadosProduto();
