function validarFormulario() {

  
    // alert("Olá eu fui clicado, top top!!");
    let Nome = document.getElementById("nome").value.trim();
    let Sobrenome = document.getElementById("sobrenome").value.trim();
     let Email = document.getElementById("email").value.trim();
    let DDI = document.getElementById("ddi").value.trim();
     let DDD = document.getElementById("ddd").value.trim();
     let Telefone = document.getElementById("telefone").value.trim();
     let Endereço = document.getElementById("endereço").value.trim();
     let CEP = document.getElementById("cep").value.trim();
    let Rua = document.getElementById("rua").value.trim();
     let Casa = document.getElementById("casa").value.trim();
     let Cidade = document.getElementById("cidade").value.trim();
    let Bairro = document.getElementById("bairro").value.trim();
     let Estado = document.getElementById("estado").value.trim();
     let Anotações = document.getElementById("Anotações").value.trim();

    let quantidadeErros = 0;


    if (Nome.length == 0) {
        forError("nome");
        quantidadeErros++;
    } else {
        reiniciaBorda("nome");
    }

    if (Sobrenome.length == 0) {
        forError("sobrenome");
    } else {
        reiniciaBorda("sobrenome");
    }
     if (Email.length == 0) {
         forError("email");
     } else {
         reiniciaBorda("email");
     }

     if (DDI.length == 0) {
         forError("ddi");
     } else {
         reiniciaBorda("ddi");
     }

     if (DDD.length == 0) {
         forError("ddd");
     } else {
         reiniciaBorda("ddd");
     }

     if (Telefone.length == 0) {
         forError("telefone");
     } else {
         reiniciaBorda("telefone");
     }

     if (Endereço.length == 0) {
         forError("endereço");
     } else {
         reiniciaBorda("endereço");
     }


     if (Rua.length == 0) {
         forError("rua");
     } else {
         reiniciaBorda("Rua");
     }

     if (CEP.length == 0) {
         forError("cep");
     } else {
         reiniciaBorda("cep");
     }


     if (Casa.length == 0) {
         forError("casa");
     } else {
         reiniciaBorda("casa");
     }

     if (Bairro.length == 0) {
         forError("bairro");
     } else {
         reiniciaBorda("bairro");
     }

     if (Estado.length == 0) {
         forError("estado");
     } else {
         reiniciaBorda("estado");
     }

     if (Cidade.length == 0) {
         forError("cidade");
     } else {
         reiniciaBorda("cidade");
     }

     if (Anotações.length == 0) {
         forError("Anotações");
     } else {
         reiniciaBorda("Anotações");
     }

   
    if (quantidadeErros != 0) {
        alert("Existem " + quantidadeErros + " campo(s) obrigatorio(s) nao preenchido(s).");
        quantidadeErros = 0;
    }

 let objetoContato = {
    Nome : Nome,
    Sobrenome : Sobrenome,
    Email : Email,
    DDI : DDI ,
    DDD : DDD,
    Telefone : Telefone,
    Endereço : Endereço,
    Rua : Rua,
    CEP : CEP,
    Casa : Casa,
    Bairro : Bairro,
    Estado : Estado,
Cidade : Cidade,
Anotações : Anotações

 };

 let cadastrado = cadastrarContato(objetoContato);
 return false;
    // console.log(`Aluno: ${ Nome} ${ Sobrenome}
    // | Email: ${ Email} `);
}

function forError(fildId) {
    document.getElementById(fildId).style.border = "1px solid red"
}
function reiniciaBorda(fildId) {
    document.getElementById(fildId).style.border = "none"
}

 async function cadastrarContato(objetoContato){
console.log(objetoContato);
      let resposta = await fetch("http://localhost:3000/contatos", {
    method: "post",
    body: JSON.stringify(objetoContato),
    headers : {
        "Content-Type" : "application/json; charset=UTF-8"
    }
  });
}
async function buscarEndereco(cep) {
    if (cep.trim().length < 8) {
        alert("CEP invalido. O CEP deve conter 8 digitos");
        return false;
    }

    try {

        agurdandoCampos();

        let retorno = await fetch(`http://viacep.com.br/ws/01001000/json/`)
       let dados = await retorno.json();
       console.log(dados)

       document.getElementById("endereço").value = dados.logradouro;
       document.getElementById("bairro").value = dados.logradouro;
       document.getElementById("cidade").value = dados.logradouro;
       document.getElementById("estado").value = dados.logradouro;
    }

    catch {
        alert("Erro ao buscar o endereço");
    }
}

function agurdandoCampos(){
    document.getElementById("endereço").value= "Agurdando...";
    document.getElementById("bairro").value= "Agurdando...";
    document.getElementById("cidade").value= "Agurdando...";
    document.getElementById("estado").value= "Agurdando...";

}