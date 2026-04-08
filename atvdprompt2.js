const prompt = require('prompt-sync')();

// Lista que vai guardar os valores digitados
let numeros = [];
let soma = 0;

// Repetição para solicitar 5 números ao usuário
for (let i = 0; i < 5; i++) {
    // Recebe o valor digitado e transforma em número
    let num = Number(prompt(`Informe o ${i + 1}º número: `));
    
    // Adiciona o valor à soma acumulada
    soma += num;
}

// Exibe o resultado final da soma
console.log("Resultado da soma:", soma);