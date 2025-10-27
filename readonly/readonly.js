"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Criando a interface readline para capturar dados do usuário
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Função para coletar os dados da configuração do usuário
function coletarConfiguracao() {
    rl.question('Digite a versão (exemplo: 1.0.0): ', function (versao) {
        rl.question('O modo seguro está ativado? (sim/não): ', function (modoSeguro) {
            // Convertendo o valor de "modo seguro" para booleano
            var modoSeguroBool = modoSeguro.toLowerCase() === 'sim';
            // Criando o objeto de configuração com as entradas do usuário
            var configuracao = {
                versao: versao,
                modoSeguro: modoSeguroBool
            };
            // Exibindo a configuração no console
            console.log('Configuração criada:', configuracao);
            // Fechando a interface readline
            rl.close();
        });
    });
}
// Chamando a função para coletar os dados do usuário
coletarConfiguracao();
