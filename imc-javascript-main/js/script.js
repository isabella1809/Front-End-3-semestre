function calcular(){
    // alert("função calcuar rodando!!")
    //pagar os valores dos campos

    const Nome = document.getElementById("Nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    
    // console.log(Nome);
   console.log(altura);
   console.log(peso);
    
       if (Nome.trim().length == 0 || isNaN(altura) == 0 || isNaN(peso) == 0) {
            alert("preencha todos os campos: Nome,Altura e Peso");
            return false;
           }
const IMC =calcuarImc(altura, peso);
const textoSituacao = gerarTextoIMC(IMC);

console.log(Nome);
console.log(altura);
console.log(peso);
console.log(IMC);
console.log(textoSituacao);





           function calcuarImc(altura, peso){
            return peso /(altura * altura);
           }

           function gerarTextoIMC(IMC){
if (IMC < 16) {
    return "magreza grave";
} else if (IMC < 17) {
    return "magreza moderada"; 
    
}else if (IMC < 18.5) {
    return "magreza leve";
}else if (IMC < 25) {
    return "Saudável";
}else if (IMC < 30) {
    return "Sobrepeso";
}else if (IMC < 35) {
    return "obesidade grau 1";
}else if (IMC < 40) {
    return "obesidade grau 2";
}else  {
    return "obesidade grau 3";
}
 }

}