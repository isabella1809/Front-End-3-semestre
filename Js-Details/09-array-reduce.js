//utilizado para filtrar um elemento dentro de um array. retorna apenas o encontrato 

const numeros = [5,10,14];

const encontrato = numeros.filter ((n) => {
    return n == 10;
});

console.log(encontrato);

const produto = [
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

//reduz p array a um unoco elemento. no caso um somatoripo, po exemplo:

let  totCamisetasEmEstoque  = estoque.reduce((total, produto)=>{
      return total + produto.quantidade;
}, 0);

console.log(`total de camisetas em estoque : ${totCamisetasEmEstoque}`);
