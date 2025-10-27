import * as readline from 'readline';

// Criando a interface readline para capturar dados do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Criando um tipo personalizado para Resultado
type Resultado = "sucesso" | "erro";

// Função que retorna "sucesso" ou "erro" com base em um número aleatório
function gerarResultado(): Resultado {
  const numeroAleatorio = Math.random(); // Gera um número aleatório entre 0 e 1

  // Se o número for menor que 0.5, retorna "sucesso", senão "erro"
  return numeroAleatorio < 0.5 ? "sucesso" : "erro";
}

// Função para capturar a resposta do usuário
function coletarRespostaUsuario(): void {
  rl.question('Deseja gerar um resultado? (sim/não): ', (resposta) => {
    if (resposta.toLowerCase() === 'sim') {
      const resultado = gerarResultado();
      console.log(`O resultado gerado é: ${resultado}`);
    } else if (resposta.toLowerCase() === 'não') {
      console.log('Você escolheu não gerar um resultado.');
    } else {
      console.log('Resposta inválida! Por favor, digite "sim" ou "não".');
    }

    // Fechando a interface readline
    rl.close();
  });
}

// Chamando a função para coletar a resposta do usuário
coletarRespostaUsuario();
