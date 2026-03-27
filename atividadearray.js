let vendas = [80, 150, 200, 50, 120, 90, 300]; 

let totalVendido = 0;
let diasAcimaCem = 0;
let maiorValor = vendas[0];

for (let i = 0; i < vendas.length; i++) {
    
    totalVendido += vendas[i];


    if (vendas[i] > 100) {
        diasAcimaCem++;
    }

    
    if (vendas[i] > maiorValor) {
        maiorValor = vendas[i];
    }
}

let mediaDiaria = totalVendido / vendas.length;

console.log("Total vendido: R$ " + totalVendido.toFixed(2));
console.log("Média diária: R$ " + mediaDiaria.toFixed(2));
console.log("Dias acima de R$100: " + diasAcimaCem);
console.log("Maior valor: R$ " + maiorValor.toFixed(2));