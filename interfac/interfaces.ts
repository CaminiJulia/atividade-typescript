import * as readline from 'readline';

// Criando a interface readline para capturar dados do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definindo a interface Pessoa
interface Pessoa {
  nome: string;
  idade: number;
  profissao: string;
}

// Função para coletar os dados da pessoa
function coletarDadosPessoa(): void {
  rl.question('Digite o nome: ', (nome) => {
    rl.question('Digite a idade: ', (idade) => {
      rl.question('Digite a profissão: ', (profissao) => {
        
        // Convertendo a idade para número
        const idadeNum = parseInt(idade);

        // Verificando se a idade é válida
        if (isNaN(idadeNum)) {
          console.log("Por favor, insira uma idade válida.");
          rl.close();
          return;
        }

        // Criando o objeto Pessoa
        const pessoa: Pessoa = {
          nome: nome,
          idade: idadeNum,
          profissao: profissao
        };

        // Exibindo os dados da pessoa
        console.log("Dados da pessoa:", pessoa);

        // Fechando a interface readline
        rl.close();
      });
    });
  });
}

// Chamando a função para coletar os dados
coletarDadosPessoa();
