function calcular() {
    event.preventDefault();
    //entrada
    let n1 = parseFloat( document.getElementById('n1').value ) ;
    let n2 = parseFloat( document.getElementById("n2").value );
    let op = document.getElementById("operacao").value;//soma
    let resultado = null;

    //chamei
    console.log(n1);
    console.log(n2);
    
    // recado 
    if( isNaN(n1) || isNaN(n2) ){
           alert("preencha todos os campos: n1 e n2");
        return false;
    }


    //processamento
    if(op == 'soma'){
        resultado = somar(n1, n2)
        resultado = resultado.toFixed(2);

    } else if(op == 'subtracao') {
        resultado = subtrair(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'multiplicacao'){
        resultado = multiplicar(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'divisao'){

        if(n2 == 0) {
            resultado = 'Não é um número';
        } else {
            resultado = dividir(n1, n2);
            resultado = resultado.toFixed(2);
        }
            
    } else {
        resultado = "Operação Inválida";
    }
const ObjetoR = {
    n1 : n1,
    n2: n2,
}
    //saída
    // console.log(`Resultado da operação: ${resultado}`);
    document.getElementById('resultado').innerHTML = resultado;

    const objCal = {
        n1 :n2,
        n2 :n2,
        op : op,
        resultado : resultado
    }
 const retorno = CadastrarNaAPI(objCal);

  if (retorno) {
    buscarCal();

            
            document.getElementById("n1").value = "";
            document.getElementById("n2").value = "";
           alert(` Primeiro numero: ${nome} 
                Segundo numero: ${nome}
                 soma: ${op}
                  resultado: ${resultado}
                  `);   
    } else {
        alert("Não foi possivel cadastrar");
    }

}

/**
 * Função somar recebe 2 valores e retorna a soma dos 
 * dois valores
 */
 function somar(valor1, valor2) {
    return valor1 + valor2;
}


function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    if(valor2 == 0) {
        return 'Não é um número';
    }
    
    return valor1 / valor2;
}

 async function CadastrarNaAPI(objCal) {

    try {
        let resposta = await fetch("http://localhost:3000/calculadora", {
            method: "post",
            body: JSON.stringify(objCal),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }


        });
        return true;

    } catch (error) {

        console.log(error);
        return false;

    }
}

async function buscarCal() {
    try {
        const retorno = await fetch("http://localhost:3000/calculadora");
        const dadosRetornados = await retorno.json();



        console.log(dadosRetornados);
        const tabela = document.getElementById("cadastro");
let template = "";
        for (let i = 0; i < dadosRetornados.length; i++) {
           template += `<article class="data__card-result">
                    <span>${dadosRetornados[i].n1}</span>
                    <span>${dadosRetornados[i].n2}</span>
                    <span>${dadosRetornados[i].op}</span>
                    <span>${dadosRetornados[i].resultado}</span>
                </article>`;

        }

      tabela.innerHTML = template;  
    } catch (error) {
        console.log(error);

    }
}

