import * as readline from 'readline';

// Criando a interface readline para capturar dados do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para coletar os dados do usuário
function coletarDadosUsuario(): void {
  rl.question('Digite seu nome: ', (nome) => {
    rl.question('Digite sua idade: ', (idade) => {
      rl.question('Você é estudante? (sim/não): ', (estudante) => {
        
        // Convertendo a idade para número e o status de estudante para booleano
        const idadeNum = parseInt(idade);
        const estudanteBool = estudante.toLowerCase() === 'sim';

        // Exibindo os dados coletados
        console.log("Nome:", nome);
        console.log("Idade:", idadeNum);
        console.log("Status de Estudante:", estudanteBool ? "Estudante" : "Não Estudante");

        // Fechando a interface readline
        rl.close();
      });
    });
  });
}

// Chamando a função para coletar os dados do usuário
coletarDadosUsuario();
