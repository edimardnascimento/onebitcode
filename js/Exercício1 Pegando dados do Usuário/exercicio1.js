alert("Bem-vindo! A seguir pediremos que informe alguns dados");

let name = prompt("Qual seu nome?");
let age = prompt("Quantos anos você tem?");
let city = prompt("Qual sua cidade?");

let ageConfirmation = confirm("Sua idade é " + age + " e seu nome é " + name + "?");

alert("Nome: " + name + " \nIdade: " + age + " anos \nCidade: " + city);