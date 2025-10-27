import * as readline from 'readline';

// Criando a interface readline para capturar dados do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definindo a interface Configuracao com propriedades somente leitura
interface Configuracao {
  readonly versao: string;
  readonly modoSeguro: boolean;
}

// Função para coletar os dados da configuração do usuário
function coletarConfiguracao(): void {
  rl.question('Digite a versão (exemplo: 1.0.0): ', (versao) => {
    rl.question('O modo seguro está ativado? (sim/não): ', (modoSeguro) => {
      
      // Convertendo o valor de "modo seguro" para booleano
      const modoSeguroBool = modoSeguro.toLowerCase() === 'sim';

      // Criando o objeto de configuração com as entradas do usuário
      const configuracao: Configuracao = {
        versao: versao,
        modoSeguro: modoSeguroBool
      };

      // Exibindo a configuração no console
      console.log('Configuração criada:', configuracao);

      // Fechando a interface readline
      rl.close();
    });
  });
}

// Chamando a função para coletar os dados do usuário
coletarConfiguracao();
