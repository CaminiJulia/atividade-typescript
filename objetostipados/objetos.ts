import * as readline from 'readline';

// Criando a interface readline para capturar dados do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definindo a interface Produto com nome, preço e disponibilidade
interface Produto {
  nome: string;
  preco: number;
  disponivel: boolean;
}

// Função para verificar a disponibilidade
function verificarDisponibilidade(disponivel: boolean): string {
  return disponivel ? "Disponível" : "Indisponível";
}

// Função para coletar os dados do produto
function coletarDadosProduto(): void {
  rl.question('Digite o nome do produto: ', (nome) => {
    rl.question('Digite o preço do produto: ', (preco) => {
      rl.question('O produto está disponível? (sim/não): ', (disponivel) => {
        
        // Convertendo o preço para número
        const precoNum = parseFloat(preco);
        
        // Verificando se a entrada de preço é válida
        if (isNaN(precoNum)) {
          console.log('Por favor, insira um preço válido.');
          rl.close();
          return;
        }

        // Convertendo a resposta de disponibilidade para booleano
        const disponivelBool = disponivel.toLowerCase() === 'sim';

        // Criando o objeto Produto
        const produto: Produto = {
          nome: nome,
          preco: precoNum,
          disponivel: disponivelBool
        };

        // Exibindo os dados do produto
        console.log({
          nome: produto.nome,
          preco: produto.preco,
          disponivel: verificarDisponibilidade(produto.disponivel)
        });

        // Fechando a interface readline
        rl.close();
      });
    });
  });
}

// Chamando a função para coletar os dados do produto
coletarDadosProduto();
