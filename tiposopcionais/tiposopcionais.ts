// Definindo a interface Usuario com email opcional
interface Usuario {
  nome: string;
  email?: string;
}

// Função para coletar dados do usuário
function coletarDadosUsuario(): void {
  // Função para coletar nome
  function coletarNome(): void {
    process.stdout.write("Digite seu nome: ");
    
    process.stdin.once("data", (nomeBuffer) => {
      const nome = nomeBuffer.toString().trim();  // Converte o Buffer para string e remove espaços extras

      // Verificando se o nome foi fornecido
      if (!nome) {
        console.log("O nome é obrigatório! Tente novamente.");
        coletarNome(); // Chama novamente se o nome não for fornecido
      } else {
        coletarEmail(nome); // Chama para coletar o email se o nome for válido
      }
    });
  }

  // Função para coletar email (opcional)
  function coletarEmail(nome: string): void {
    process.stdout.write("Digite seu email (opcional): ");
    
    process.stdin.once("data", (emailBuffer) => {
      const email = emailBuffer.toString().trim();  // Converte o Buffer para string e remove espaços extras

      // Criando o objeto Usuario
      const usuario: Usuario = {
        nome: nome,
        email: email || undefined, // Se o email for vazio, é undefined
      };

      console.log("Dados do usuário:", usuario);

      // Fechando o stream de entrada
      process.stdin.pause();
    });
  }

  coletarNome(); // Inicia a coleta de dados
}

// Chamando a função para coletar os dados
coletarDadosUsuario();
