"use strict";
// app.ts
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var matematica_1 = require("./matematica");
// Criando a interface readline para capturar dados do usuário
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Função para coletar os números e realizar as operações
function coletarNumeros() {
    rl.question('Digite o primeiro número: ', function (num1) {
        rl.question('Digite o segundo número: ', function (num2) {
            // Convertendo as entradas para números
            var numero1 = parseFloat(num1);
            var numero2 = parseFloat(num2);
            // Verificando se as entradas são números válidos
            if (isNaN(numero1) || isNaN(numero2)) {
                console.log("Por favor, insira números válidos.");
            }
            else {
                // Realizando as operações com os números fornecidos
                var resultadoSoma = (0, matematica_1.somar)(numero1, numero2);
                var resultadoMultiplicacao = (0, matematica_1.multiplicar)(numero1, numero2);
                // Exibindo os resultados
                console.log("Resultado da soma: ".concat(resultadoSoma));
                console.log("Resultado da multiplica\u00E7\u00E3o: ".concat(resultadoMultiplicacao));
            }
            // Fechando a interface readline
            rl.close();
        });
    });
}
// Chamando a função para coletar os números do usuário e realizar as operações
coletarNumeros();
