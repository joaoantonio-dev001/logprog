// Importa a biblioteca para ler dados do usuário no terminal
const prompt = require('prompt-sync')();

// Cria um array vazio para guardar os pedidos
let pedidos = [];

// Variável que controla a opção do menu
let opcao = 0;

// Loop principal do sistema (roda até o usuário escolher sair)
while (opcao != 5) {

    // Exibe o menu
    console.log("---- Sistema de Engenharia de Dados ----");
    console.log("1 - Cadastrar Pedidos");
    console.log("2 - Listar Pedidos");
    console.log("3 - Gerar Relatorio Parcial");
    console.log("4 - Console de Listagem Operacional");
    console.log("5 - Sair e Gerar Relatorio Final");

    // Pede para o usuário escolher uma opção
    opcao = Number(prompt("Escolha uma opcao: "));

    // OPÇÃO 1 - Cadastrar pedido
    if (opcao === 1){
        console.log("---- CADASTRAR PEDIDO ----");

        // Coleta os dados do pedido
        let codigo = prompt(("Código do Pedido ex:(PED001): "));
        let produto = prompt("Nome do produto: ");
        let quantidade = Number(prompt("Quantidade: "));
        let setor = prompt("Setor (Montagem/Solda/Pintura): ");
        let prazo = Number(prompt("Prazo em dias: "));

        // Define a prioridade baseada no prazo
        let prioridade;
        if (prazo <= 2){
            prioridade = "Urgente";
        } else if (prazo <= 5){
            prioridade = "Alta";
        } else if (prazo <= 9){
            prioridade = "Média";
        } else {
            prioridade = "Baixa";
        }

        // Adiciona o pedido no array
        pedidos.push({
            codigo: codigo,
            produto: produto,
            quantidade: quantidade,
            setor: setor,
            prazo: prazo,
            prioridade: prioridade,
        });

        // Mensagem de confirmação
        console.log("Pedido " + codigo + " cadastrado com sucesso! Prioridade: " + prioridade);
    }

    // OPÇÃO 2 - Listar pedidos
    else if (opcao === 2){
        console.log("---- LISTAR PEDIDOS ----")

        // Verifica se existem pedidos
        if(pedidos.length === 0){
            console.log("Nenhum pedido cadastrado.");
        } else {
            // Percorre o array e mostra cada pedido
            for (let i = 0; i < pedidos.length; i++){
                let p = pedidos[i];
                console.log((i + 1) + ". " + p.codigo + " | " + p.produto + " | Qtde: " + p.quantidade + " | " + p.setor + " | Prazo: " + p.prazo + " dias | " + p.prioridade);
            }
        }
    }

    // OPÇÃO 3 - Relatório parcial
    else if (opcao === 3){
        console.log("---- RELATORIO PARCIAL ----")

        if (pedidos.length === 0){
            console.log("Nenhum pedido cadastrado. ");
        } else {
            // Variáveis para controle
            let totalItens = 0;
            let urgentes = 0;
            let altas = 0;
            let medias = 0;
            let baixas = 0;

            // Percorre todos os pedidos
            for (let i = 0; i < pedidos.length; i++){
                totalItens += pedidos[i].quantidade;

                // Conta por prioridade
                if (pedidos[i].prioridade === "Urgente"){
                    urgentes++;
                } else if (pedidos[i].prioridade === "Alta"){
                    altas++;
                } else if (pedidos[i].prioridade === "Média"){
                    medias++;
                } else if (pedidos[i].prioridade === "Baixa"){
                    baixas++;
                }
            }

            // Mostra os resultados
            console.log("Pedidos: " + pedidos.length + " | Total Itens: " + totalItens);
            console.log("Urgentes: " + urgentes + " | Altas: " + altas + " | Médias: " + medias + " | Baixas: " + baixas);
        }
    }

    // OPÇÃO 4 - Listagem operacional (formato tabela)
    else if (opcao === 4) {
        console.log("---- CONSOLE DE LISTAGEM OPERACIONAL ----");

        if (pedidos.length === 0) {
            console.log("NENHUM PEDIDO ENCONTRADO - Sistema vazio");
        } else {
            // Cabeçalho da tabela
            console.log("Codigo | Produto | Quantidade | Setor | Prazo | Prioridade");
            console.log("--------------------------------------------------------");

            // Mostra todos os pedidos em formato de tabela
            for (let i = 0; i < pedidos.length; i++) {
                let p = pedidos[i];
                console.log(p.codigo + " | " + p.produto + " | " + p.quantidade +
                    " | " + p.setor + " | " + p.prazo + " dias | " + p.prioridade);
            }
        }
    }

    // OPÇÃO 5 - Encerrar sistema e mostrar relatório final
    else if (opcao === 5) {
        console.log("---- RELATORIO FINAL ----")

        if (pedidos.length === 0) {
            console.log("Nenhum pedido foi registrado.");
        } else {
            // Soma total de itens
            let totalItens = 0;
            for (let i = 0; i < pedidos.length; i++) {
                totalItens += pedidos[i].quantidade;
            }

            console.log("Total de pedidos: " + pedidos.length);
            console.log("Total de itens: " + totalItens);
            console.log("-------------------------")
        }

        console.log("Encerrando o sistema. Obrigado!");
    }

    // Caso o usuário digite uma opção inválida
    else {
        console.log("Opção digitada inválida. Tente novamente por favor!");
    }
}