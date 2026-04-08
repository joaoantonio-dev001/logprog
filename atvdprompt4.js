// Importa o prompt para ler dados do teclado
const prompt = require('prompt-sync')();

// Listas para guardar nomes e idades
let nomes = [];
let idades = [];

// Guarda a opção escolhida no menu
let opcao = 0;

// Repete o menu até o usuário escolher sair (3)
while (opcao != 3) {
    console.log("=== Menu ===");
    console.log("1 - Cadastrar");
    console.log("2 - Listar");
    console.log("3 - Sair");

    // Lê a opção digitada
    opcao = Number(prompt("Escolha uma opção: "));

    // Se escolher cadastrar
    if (opcao === 1){
        console.log("---- CADASTRAR ----");

        // Pede nome e idade
        let nome = prompt("Digite o nome: ");
        let idade = Number(prompt("Digite a idade: "));

        // Guarda os dados nas listas
        nomes.push(nome);
        idades.push(idade);

        console.log("Cadastro feito!");
    }
    // Se escolher listar
    else if (opcao === 2){
        console.log("---- LISTAR ----");

        // Se não tiver ninguém cadastrado
        if (nomes.length === 0){
            console.log("Nenhum cadastro.");
        } else {
            // Mostra todos os cadastros
            for (let i = 0; i < nomes.length; i++){
                console.log((i + 1) + " - " + nomes[i] + ", " + idades[i] + " anos");
            }
        }
    }
    // Se escolher sair
    else if (opcao === 3) {
        console.log("Saindo...");
    }
    // Se digitar algo errado
    else {
        console.log("Opção inválida!");
    }
}

// Mensagem final
console.log("=== PROGRAMA ENCERRADO ===");