let temperatura = [33, 44, 55, 77, 83, 92, 120]
let total = 0;
for(let i = 0; i < temperatura.length; i++){
total += temperatura[i]
if (temperatura[i] >= 80 ){
console.log("temperatura maior que 80", temperatura[i]);
}
if(temperatura[i] >= 90){
console.log("ALERTA CRÍTICO DE TEMPERATURA" , temperatura[i]);
}
}
let media = total / temperatura.length
console.log("Média das temperaturas =" + media + "°C")