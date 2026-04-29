const hobbies = [
    "Jogar basquete ", 
    "Conversar muito",
    "Ouvir música",
    "Jogar video game",
    "Fazer brownie",
    "Cozinhar",
    "Academia"
];

//  Array map é um metopo da classe array que itera sobre o array
//  retornando um novo array, compondo um novo resultado para cada indice
//  antigo, veja:

 const novosHobbys = hobbies.map((hobby) => {
return `<p> ${hobby} </p>`;
});

console.log(novosHobbys);
