"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Criando a interface readline para capturar dados do usuário
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Criando o enum Cores com as opções Vermelho, Verde e Azul
var Cores;
(function (Cores) {
    Cores["Vermelho"] = "Vermelho";
    Cores["Verde"] = "Verde";
    Cores["Azul"] = "Azul";
})(Cores || (Cores = {}));
// Função que recebe uma cor e retorna uma mensagem
function mensagemCor(cor) {
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
function coletarCorUsuario() {
    rl.question('Digite uma cor (Vermelho, Verde, Azul): ', function (cor) {
        // Validando se a cor digitada é um valor do enum Cores
        if (Object.values(Cores).includes(cor)) {
            console.log(mensagemCor(cor));
        }
        else {
            console.log("Cor inválida! Por favor, insira uma cor válida: Vermelho, Verde ou Azul.");
        }
        // Fechando a interface readline
        rl.close();
    });
}
// Chamando a função para coletar a cor do usuário
coletarCorUsuario();
