import * as readline from 'readline';

// Criando a interface readline para capturar dados do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Criando o enum Cores com as opções Vermelho, Verde e Azul
enum Cores {
  Vermelho = "Vermelho",
  Verde = "Verde",
  Azul = "Azul"
}

// Função que recebe uma cor e retorna uma mensagem
function mensagemCor(cor: Cores): string {
  switch (cor) {
    case Cores.Vermelho:
      return "Você escolheu a cor Vermelho! Ela representa paixão e energia.";
    case Cores.Verde:
      return "Você escolheu a cor Verde! Ela representa tranquilidade e natureza.";
    case Cores.Azul:
      return "Você escolheu a cor Azul! Ela representa calma e serenidade.";
    default:
      return "Cor não reconhecida.";
  }
}

// Função para capturar a resposta do usuário
function coletarCorUsuario(): void {
  rl.question('Digite uma cor (Vermelho, Verde, Azul): ', (cor) => {
    
    // Validando se a cor digitada é um valor do enum Cores
    if (Object.values(Cores).includes(cor as Cores)) {
      console.log(mensagemCor(cor as Cores));
    } else {
      console.log("Cor inválida! Por favor, insira uma cor válida: Vermelho, Verde ou Azul.");
    }

    // Fechando a interface readline
    rl.close();
  });
}

// Chamando a função para coletar a cor do usuário
coletarCorUsuario();
