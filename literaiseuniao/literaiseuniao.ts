import * as readline from 'readline';

// Criando a interface readline para capturar dados do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definindo o tipo literal e união para statusPedido
type StatusPedido = "pendente" | "enviado" | "entregue";

// Função para coletar e validar o status do pedido
function coletarStatusPedido(): void {
  rl.question('Digite o status do pedido (pendente, enviado, entregue): ', (status) => {
    
    // Verificando se o status fornecido é válido
    if (status === "pendente" || status === "enviado" || status === "entregue") {
      // Atribuindo o valor ao statusPedido
      let statusPedido: StatusPedido = status;
      console.log(`O status do pedido é: ${statusPedido}`);
    } else {
      console.log('Status inválido! Por favor, insira "pendente", "enviado" ou "entregue".');
    }

    // Fechando a interface readline
    rl.close();
  });
}

// Chamando a função para coletar o status do pedido
coletarStatusPedido();
