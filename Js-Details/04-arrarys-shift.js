//                      0         1          2            3           4
let frutasCitricas = ["Limao", "Laranja", "Abacaxi", "Mexirica", "Acerola"];
//shift - remove o primeiro elemento e reorganiza os indices
console.log(frutasCitricas);

console.log(frutasCitricas[0]);
console.log(frutasCitricas[1]);
console.log(frutasCitricas[2]);
console.log(frutasCitricas[3]);
console.log(frutasCitricas[4]);

//remove o limao
let frutaRemovida = frutasCitricas.shift();
console.log(frutasCitricas);
console.log(`removido a fruta: ${frutaRemovida}`);


console.log(frutasCitricas[0]);
console.log(frutasCitricas[1]);
console.log(frutasCitricas[2]);
console.log(frutasCitricas[3]);
console.log(frutasCitricas[4]);