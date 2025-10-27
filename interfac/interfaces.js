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
// Função para coletar os dados da pessoa
function coletarDadosPessoa() {
    rl.question('Digite o nome: ', (nome) => {
        rl.question('Digite a idade: ', (idade) => {
            rl.question('Digite a profissão: ', (profissao) => {
                // Convertendo a idade para número
                const idadeNum = parseInt(idade);
                // Verificando se a idade é válida
                if (isNaN(idadeNum)) {
                    console.log("Por favor, insira uma idade válida.");
                    rl.close();
                    return;
                }
                // Criando o objeto Pessoa
                const pessoa = {
                    nome: nome,
                    idade: idadeNum,
                    profissao: profissao
                };
                // Exibindo os dados da pessoa
                console.log("Dados da pessoa:", pessoa);
                // Fechando a interface readline
                rl.close();
            });
        });
    });
}
// Chamando a função para coletar os dados
coletarDadosPessoa();
