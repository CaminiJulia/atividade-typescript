// app.ts

import * as readline from 'readline';
import { somar, multiplicar } from './matematica';

// Criando a interface readline para capturar dados do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para coletar os números e realizar as operações
function coletarNumeros(): void {
  rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
      
      // Convertendo as entradas para números
      const numero1 = parseFloat(num1);
      const numero2 = parseFloat(num2);

      // Verificando se as entradas são números válidos
      if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Por favor, insira números válidos.");
      } else {
        // Realizando as operações com os números fornecidos
        const resultadoSoma = somar(numero1, numero2);
        const resultadoMultiplicacao = multiplicar(numero1, numero2);

        // Exibindo os resultados
        console.log(`Resultado da soma: ${resultadoSoma}`);
        console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);
      }

      // Fechando a interface readline
      rl.close();
    });
  });
}

// Chamando a função para coletar os números do usuário e realizar as operações
coletarNumeros();
