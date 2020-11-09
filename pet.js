// codar o sistema de um petshop onde eu tenha uma função
// petshop que receba por callback as ações para executar.
// Quais ações: vacinarPet, castrarPet, adicionarPet, darBanhoPet, listarPet
​
function vacinarPet(pet, vacina) {
  // ela vai adicionar uma nova vacina (cheque como é a estrutura do atributo vacinas)
  // cada vacina deve ser um objeto que contem atributos nome e data
  // não vá apagar as vacinas anteriores!
}
​
function castrarPet(pet) {
  // se o pet não for castrado castre o pet
  // se o pet for castrado mande uma mensagem de
  // "esse pet já é castrado, não posso castra-lo de novo"
}
​
function adicionarPet(nome, raca, peso, idade, cor, etc)
function adicionarPet(pet) {
  // você pode tanto passar um objeto inteiro do pet
  // ou construir o objeto na função
  // ele vai receber um objeto pet para ser adicionado
  // seguindo a estrutura dos pets dentro do array pets
  // não vá apagar os pets já existentes!
}
​
function darBanhoPet(pet) {
  // retorna a mensagem "o NomeDoPet tomou banho hoje"
}
​
function listarPets(pets){
  // recebe um array de pets e listas todos os pets do sistema (com nome, raca e dono)
}
​
let pets = [
  {
    nome: "Stark",
    raca: "SRD",
    peso: 13,
    idade: 10,
    cor: "Caramelo",
    porte: "Médio",
    sexo: "m",
    dono: "Thor Odinson",
    alergias: ["Corante Vermelho", "Frutos do mar"],
    castrado: false,
    vacinas: [
      { nome: "Antirrábica", data: "10/11/2015" },
      { nome: "BC500", data: "10/12/2015" },
    ],
  },
  {
    nome: "Ted",
    raca: "Chiahuahua",
    peso: 15,
    idade: 7,
    cor: "Creme",
    porte: "Pequeno",
    sexo: "m",
    dono: "Gabas",
    alergias: ["AAS", "AntiInflamatório"],
    castrado: true,
    vacinas: [{ nome: "BC500", data: "10/12/2015" }],
  },
];