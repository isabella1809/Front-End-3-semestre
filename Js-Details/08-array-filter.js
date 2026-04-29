//utilizado para filtrar um elemento dentro de um array. retorna apenas o encontrato 

// const numeros = [5,10,14];

// const encontrato = numeros.filter ((n) => {
//     return n == 10;
// });

// console.log(encontrato);

const camiseta = [
{
    descricao : "camisa polo",
cor : "verde",
perfil : "m",
quantidade : 10

},
{
    descricao : "camisa polo",
cor : "verde",
perfil : "m",
quantidade : 30

},
{
    descricao : "camisa polo",
cor : "Amarela",
perfil : "f",
quantidade : 10

},
{
    descricao : "camisa polo",
cor : "Azul",
perfil : "m",
quantidade : 30

},
{
    descricao : "camisa polo",
cor : "roxo",
perfil : "f",
quantidade : 30

}

];

const camisetasfemininas = estoque.filter((camiseta)=> {
return camiseta.perfil == "f";
 });

 console.log(camisetasfemininas);
 console.log("camisetas polo femininas em estoque:");
 console.log();
camisetasFemininas.forEach((item) => {
 console.log(`${item.cor} : ${item.quantidade}unidades(s)`);
}); 
 
 
 