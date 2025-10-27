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
// Função para calcular a média das notas
function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0); // Soma todas as notas
    return soma / notas.length; // Divide a soma pelo número de elementos (notas)
}
// Função para coletar as notas do usuário
function coletarNotas() {
    const notas = [];
    // Função recursiva para coletar várias notas do usuário
    function obterNota() {
        rl.question('Digite uma nota (ou pressione Enter para terminar): ', (nota) => {
            if (nota === '') {
                // Se o usuário pressionar Enter sem digitar nada, encerra a coleta
                if (notas.length === 0) {
                    console.log("Você precisa inserir pelo menos uma nota.");
                    obterNota(); // Pede novamente se nenhuma nota foi fornecida
                }
                else {
                    // Se houver notas, calcula a média
                    const media = calcularMedia(notas);
                    console.log(`A média das notas é: ${media}`);
                    rl.close(); // Fecha a interface readline
                }
            }
            else {
                // Caso contrário, converte a entrada para número e adiciona ao array de notas
                const notaNumero = parseFloat(nota);
                if (!isNaN(notaNumero)) {
                    notas.push(notaNumero);
                    obterNota(); // Chama a função novamente para coletar mais notas
                }
                else {
                    console.log("Por favor, insira um número válido.");
                    obterNota(); // Repete o processo se a entrada não for válida
                }
            }
        });
    }
    obterNota(); // Inicia a coleta de notas
}
// Chamando a função para coletar as notas
coletarNotas();
