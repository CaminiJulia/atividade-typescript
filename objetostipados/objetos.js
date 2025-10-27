"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
// Criando a interface readline para capturar dados do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Função para verificar a disponibilidade
function verificarDisponibilidade(disponivel) {
    return disponivel ? "Disponível" : "Indisponível";
}
// Função para coletar os dados do produto
function coletarDadosProduto() {
    rl.question('Digite o nome do produto: ', (nome) => {
        rl.question('Digite o preço do produto: ', (preco) => {
            rl.question('O produto está disponível? (sim/não): ', (disponivel) => {
                // Convertendo o preço para número
                const precoNum = parseFloat(preco);
                // Verificando se a entrada de preço é válida
                if (isNaN(precoNum)) {
                    console.log('Por favor, insira um preço válido.');
                    rl.close();
                    return;
                }
                // Convertendo a resposta de disponibilidade para booleano
                const disponivelBool = disponivel.toLowerCase() === 'sim';
                // Criando o objeto Produto
                const produto = {
                    nome: nome,
                    preco: precoNum,
                    disponivel: disponivelBool
                };
                // Exibindo os dados do produto
                console.log({
                    nome: produto.nome,
                    preco: produto.preco,
                    disponivel: verificarDisponibilidade(produto.disponivel)
                });
                // Fechando a interface readline
                rl.close();
            });
        });
    });
}
// Chamando a função para coletar os dados do produto
coletarDadosProduto();
