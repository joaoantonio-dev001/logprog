const prompt = require('prompt-sync')();

// Repete 3 vezes (para 3 alunos)
for (let i = 1; i <= 3; i++) {
    // Pede o nome do aluno
    let nome = prompt("Digite o nome do aluno:");
    
    // Pede a nota e transforma em número
    let nota = Number(prompt("Digite a nota do aluno:"));

    // Se a nota for 7 ou mais
    if (nota >= 7) {
        // Mostra que o aluno passou
        console.log(nome + " - Aprovado");
    } else {
        // Senão, mostra que não passou
        console.log(nome + " - Reprovado");
    }
}