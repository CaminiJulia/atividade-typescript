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
// Função para somar dois números
function somar(a, b) {
    return a + b;
}
// Função para coletar os números do usuário
function coletarDados() {
    rl.question('Digite o primeiro número: ', (num1) => {
        rl.question('Digite o segundo número: ', (num2) => {
            // Convertendo as entradas para números
            const numero1 = parseFloat(num1);
            const numero2 = parseFloat(num2);
            // Verificando se as entradas são números válidos
            if (isNaN(numero1) || isNaN(numero2)) {
                console.log("Por favor, insira números válidos.");
            }
            else {
                // Chamando a função somar com os números fornecidos
                const resultado = somar(numero1, numero2);
                console.log(`O resultado da soma é: ${resultado}`);
            }
            // Fechando a interface readline
            rl.close();
        });
    });
}
// Chamando a função para coletar os dados do usuário
coletarDados();
