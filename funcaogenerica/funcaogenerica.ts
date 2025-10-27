import * as readline from 'readline';

// Criando a interface readline para capturar dados do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função genérica que exibe um valor de qualquer tipo
function exibirElemento<T>(valor: T): void {
  console.log("Valor inserido:", valor);
}

// Função para coletar o valor do usuário
function coletarValor(): void {
  rl.question('Digite um valor para exibir: ', (valor) => {
    // Tenta converter o valor para número. Se não for possível, mantém como string
    const numero = parseFloat(valor);

    // Se for um número válido, chama a função passando o número
    if (!isNaN(numero)) {
      exibirElemento(numero);
    } else {
      // Caso contrário, passa o valor como uma string
      exibirElemento(valor);
    }

    // Fechando a interface readline
    rl.close();
  });
}

// Chamando a função para coletar o valor do usuário
coletarValor();
