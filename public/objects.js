
/**
 * (Objetos)
 * Objetos fisicos e abstratos
 * Carro (Fisico) 
 * Credito (abstrato)
 * As caracteristicas do meu objeto eu vou chamar de propriedades
 * E as funcoes do objeto nos chamamos de metodos
 */
// const carro = {
//   placa: "abc-1234",
//   cor: "Branco",
//   combustivel: "Gasolina",
//   potencia: 1.4,
//   andarParaFrente: () => {
//     console.log("Andou para frente!")
//   },
//   andarParaTraz: function() {
//     console.log("Andou para traz")
//   }
// }

// const credito = {
//   limite: 10000,
//   maxDeParcelas: 30,
//   usouCredito: (valor = 0) => {
//     console.log(credito.limite - valor)
//   }
// }

// credito.usouCredito(1000)

// console.log("Combustivel: " + carro.combustivel)
// console.log("Cor: " + carro["cor"])
// carro.andarParaFrente()
// carro.andarParaTraz()
// carro["andarParaFrente"]()

// const person = { 
//   firstName: "Daniel", 
//   lastName: "Vaz", 
//   age: 30,
//   getFullName: () => {
//     return person.firstName + " " + person.lastName
//   }
// }

// // Acessar propriedades
// console.log(person.getFullName())

// Array ou Vetor
// Todo array tem um indice (index ou i)
// Todo array tem um length (quantidade total de itens do array)
// const numbers = [1, 2, 3, 4, 5] // lenght = 5

// const arr = [1, "Daniel", { number: 3}, true, numbers]

// Como acessar valores do array
// console.log(arr[3])

// Interacao de array (Laco de repeticao)
// for(let i = 0; i < arr.length; i = i + 1) {
//   console.log(arr[i])
// }

// Verifica e executa
// let i = 0
// while(i < numbers.length) {
//   console.log(numbers[i]);

//   i = i + 1;
// }

// Executa e verifica
// do {
//   console.log(numbers[i]);

//   i = i + 1;
// } while(i < numbers.length);