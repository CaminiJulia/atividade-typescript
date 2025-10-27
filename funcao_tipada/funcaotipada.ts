import * as readline from 'readline';

// Criando a interface readline para capturar dados do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para somar dois números
function somar(a: number, b: number): number {
  return a + b;
}

// Função para coletar os números do usuário
function coletarDados(): void {
  rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
      
      // Convertendo as entradas para números
      const numero1 = parseFloat(num1);
      const numero2 = parseFloat(num2);
      
      // Verificando se as entradas são números válidos
      if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Por favor, insira números válidos.");
      } else {
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
