const prompt = require('prompt-sync')();

// Inicia uma lista vazia para armazenar os nomes digitados
let nomes = [];

// Estrutura de repetição que executa 5 vezes
for (let i = 0; i < 5; i++) {
    // Solicita ao usuário que informe um nome
    let nome = prompt(`Informe o ${i + 1}º nome: `);
    
    // Insere o nome informado dentro do array
    nomes.push(nome); 
}

// Exibe um cabeçalho no console
console.log("Lista de nomes registrados:");

// Percorre a lista e imprime cada item
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// Mostra todos os nomes armazenados de uma vez
console.log(nomes);