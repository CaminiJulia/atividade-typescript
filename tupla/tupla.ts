import * as readline from 'readline';

// Criando a interface readline para capturar dados do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para coletar o nome e o preço do produto do usuário
function coletarDadosProduto(): void {
  rl.question('Digite o nome do produto: ', (nome) => {
    rl.question('Digite o preço do produto: ', (preco) => {

      // Convertendo o preço para número
      const precoNum = parseFloat(preco);

      // Verificando se o preço é um número válido
      if (isNaN(precoNum)) {
        console.log('Por favor, insira um preço válido.');
        rl.close();
        return;
      }

      // Criando a tupla [nome, preço]
      let produto: [string, number] = [nome, precoNum];

      // Exibindo os valores da tupla
      console.log(`Produto: ${produto[0]}`);
      console.log(`Preço: R$ ${produto[1].toFixed(2)}`);

      // Fechando a interface readline
      rl.close();
    });
  });
}

// Chamando a função para coletar os dados do usuário
coletarDadosProduto();
