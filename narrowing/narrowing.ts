import * as readline from 'readline';

// Criando a interface readline para capturar dados do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função que recebe um parâmetro id, que pode ser string ou number
function mostrarId(id: string | number): void {
  // Refinando o tipo de id para string
  if (typeof id === 'string') {
    console.log(`O ID é uma string: ${id}`);
  } 
  // Refinando o tipo de id para number
  else if (typeof id === 'number') {
    console.log(`O ID é um número: ${id}`);
  }
}

// Função para coletar o valor do id do usuário
function coletarId(): void {
  rl.question('Digite um ID (pode ser um número ou uma string): ', (input) => {
    // Tentando converter a entrada para número
    const idNumero = parseFloat(input);

    // Se o id for um número válido, chamamos a função passando o número
    if (!isNaN(idNumero)) {
      mostrarId(idNumero);
    } else {
      // Caso contrário, passamos o valor como uma string
      mostrarId(input);
    }

    // Fechando a interface readline
    rl.close();
  });
}

// Chamando a função para coletar o valor do id do usuário
coletarId();
