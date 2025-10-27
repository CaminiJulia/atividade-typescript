import * as readline from 'readline';

// Criando a interface readline para capturar dados do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular a média das notas
function calcularMedia(notas: number[]): number {
  const soma = notas.reduce((acc, nota) => acc + nota, 0); // Soma todas as notas
  return soma / notas.length; // Divide a soma pelo número de elementos (notas)
}

// Função para coletar as notas do usuário
function coletarNotas(): void {
  const notas: number[] = [];

  // Função recursiva para coletar várias notas do usuário
  function obterNota(): void {
    rl.question('Digite uma nota (ou pressione Enter para terminar): ', (nota) => {
      if (nota === '') {
        // Se o usuário pressionar Enter sem digitar nada, encerra a coleta
        if (notas.length === 0) {
          console.log("Você precisa inserir pelo menos uma nota.");
          obterNota(); // Pede novamente se nenhuma nota foi fornecida
        } else {
          // Se houver notas, calcula a média
          const media = calcularMedia(notas);
          console.log(`A média das notas é: ${media}`);
          rl.close(); // Fecha a interface readline
        }
      } else {
        // Caso contrário, converte a entrada para número e adiciona ao array de notas
        const notaNumero = parseFloat(nota);
        if (!isNaN(notaNumero)) {
          notas.push(notaNumero);
          obterNota(); // Chama a função novamente para coletar mais notas
        } else {
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
