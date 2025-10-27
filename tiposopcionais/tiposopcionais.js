"use strict";
// Função para coletar dados do usuário
function coletarDadosUsuario() {
    // Função para coletar nome
    function coletarNome() {
        process.stdout.write("Digite seu nome: ");
        process.stdin.once("data", (nomeBuffer) => {
            const nome = nomeBuffer.toString().trim(); // Converte o Buffer para string e remove espaços extras
            // Verificando se o nome foi fornecido
            if (!nome) {
                console.log("O nome é obrigatório! Tente novamente.");
                coletarNome(); // Chama novamente se o nome não for fornecido
            }
            else {
                coletarEmail(nome); // Chama para coletar o email se o nome for válido
            }
        });
    }
    // Função para coletar email (opcional)
    function coletarEmail(nome) {
        process.stdout.write("Digite seu email (opcional): ");
        process.stdin.once("data", (emailBuffer) => {
            const email = emailBuffer.toString().trim(); // Converte o Buffer para string e remove espaços extras
            // Criando o objeto Usuario
            const usuario = {
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
