// let hitchedSpacheships = ["Supernova", "Elemental", "Helmet", 5, true ]

// console.log(hitchedSpacheships)
// console.log(hitchedSpacheships[1], hitchedSpacheships[4])


// let hitchedSpacheships = new Array("Supernova", "Elemental", "Helmet")
// console.log(hitchedSpacheships)

// let getNumbers = new Array(1, 2, 3, 4)
// console.log(getNumbers)



// let hitchedSpacheships = ["Colossus", "Elemental", "Helmet"]
// console.log(hitchedSpacheships)

// hitchedSpacheships.push("Supernova")
// console.log(hitchedSpacheships)

// remove última posicao
// let removedSpacheship = hitchedSpacheships.pop()
// console.log(hitchedSpacheships, removedSpacheship)

// remove primeira posicao
// let removedSpacheship = hitchedSpacheships.shift()
// console.log(hitchedSpacheships, removedSpacheship)

// adicionar como primeira elemento
// hitchedSpacheships.unshift("Fenix")
// console.log(hitchedSpacheships)

// tamanho Array
// console.log(hitchedSpacheships.length)

// pegar posicao do elemento
// let elementalPos = hitchedSpacheships.indexOf("Elemental")
// console.log("Posicao item existente: " + elementalPos)
// let elementalPos = hitchedSpacheships.indexOf("Golias")
// console.log("Posicao item que nao existe: " + elementalPos) // retorna -1 quando nao encontra

// // exercicio
// let spaceships = [["Colossus", 40], ["Elemental", 20], "Golias", "Helmet"]
// console.log(spaceships[2][1])

// exercicio - 2
// let discoverySpaceships = ["Elemental", "Darwin", "Ártemis"]
// let battleSpaceships = ["Fenix", "Golias", "Helmet"]
// let extractionSpaceships = ["Deméter", "Puller"]
// let randomSpaceships = [
//  discoverySpaceships.indexOf("Elemental"), 
//  battleSpaceships.indexOf("Helmet"), 
//  extractionSpaceships.indexOf("Puller")
// ]
// console.log(randomSpaceships)

// exercicio - 3
// let spaceshipsList = ["Colossus", "Helmet", ["Fenix", "Revivor"], "Supernova"]
// spaceshipsList.pop()
// spaceshipsList.pop()
// spaceshipsList.push("Elemental")
// spaceshipsList.unshift("Eagle")
// spaceshipsList.shift()
// spaceshipsList.unshift("")
// console.log(spaceshipsList)


// splice - remove item da posicao informada até o segundo parametro informado, adicionando demais parametros no lugar
// let spaceshipsNames = ["Colossus", "Helmet", "Supernova", "Fenix"]
// console.log(spaceshipsNames)//['Colossus', 'Helmet', 'Supernova', 'Fenix']
// let removedSpacheships = spaceshipsNames.splice(1,2,"Demeter", "Puller", "Golias")
// console.log(spaceshipsNames) // ['Colossus', 'Demeter', 'Puller', 'Golias', 'Fenix']
// console.log(removedSpacheships) // ['Helmet', 'Supernova']

// slice - retorna novo array com valores desejados
// let spaceshipsNames = ["Colossus", "Helmet", "Supernova", "Fenix"]
// let extracterNames = spaceshipsNames.slice(1,3)
// console.log(spaceshipsNames) // ['Colossus', 'Helmet', 'Supernova', 'Fenix']
// console.log(extracterNames) // ['Helmet', 'Supernova']


// iteracoes em arrays
// let hitchedSpacheships = ["Demeter", "Darwin", "Supernova", "Fenix", "Puller"]
// hitchedSpacheships.forEach(function(currentSpaceship, index) {
//   console.log("Nave: " + currentSpaceship + "\nIndice: " + index)
// })
  
// map - gera novo array alterando para novos valores (sem alterar array original)
// let hitchedSpacheships = ["Demeter", "Darwin", "Supernova", "Fenix", "Puller"]
// let upcasedSpaceship = hitchedSpacheships.map(function(currentSpaceship, index) {
//   let upcased = currentSpaceship.toUpperCase()
//   return upcased
// })
// console.log(upcasedSpaceship)

// filter - aguarda retorno booleano do callback para saber se elemento passou no filtro ou nao
// let hitchedSpacheships = ["Demeter", "Darwin", "Supernova", "Fenix", "Puller"]
// let with7Chars = hitchedSpacheships.filter(element => {return element.length >= 7 })
// console.log(with7Chars) // ['Demeter', 'Supernova']

// find - retorna o primeiro elemento encontrado no filtro
// let hitchedSpacheships = ["Demeter", "Darwin", "Supernova", "Fenix", "Puller"]
// let with7Chars = hitchedSpacheships.find(element => {return element.length >= 7 })
// console.log(with7Chars) // Demeter


// Exercicio - Praticando Arrays
// [Nome da Nave, quantidade de tripulantes, engate ja concluido ou nao]
// Plataforma de engate = indice da nave no array + 1
// Fazer: - Filtrar naves com > 9 tripulantes
//        - Numero da plataforma em que está a primeira nave com engate pendente (findIndex)
//        - Destacar o nome de todas as naves em caixa alt
//        - alerta com todas as informações pedidas
const hitchedSpacheships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false]
]
let morethen9 = []
let firstEngage = null
hitchedSpacheships.forEach(function(currentSpacheships, index) {
  if (currentSpacheships[1] > 9) {
    morethen9.push(currentSpacheships[0])
  }
  if (!firstEngage) {
    if (currentSpacheships[2] == false) {
      firstEngage = index
    }
  }
})
console.log(morethen9, firstEngage)

// Exercicio - Praticando Arrays
const hitchedSpacheships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false]
]
let crewGreaterThan9 = hitchedSpacheships.filter(spaceship => {
  return spaceship[1] > 9
}).map(spaceship => {
  return spaceship[0]
})

let ongoingHitchPlatform = hitchedSpacheships.findIndex(spaceship => {
  return spaceship[2] == false
})

let highlightedSpaceships = hitchedSpacheships.map(spaceship => {
  return spaceship[0].toUpperCase()
})

let message = "Espaconaves com mais de 9 tripulates: " + crewGreaterThan9.join(", ")
message += "\nPlataforma com processo de engate: " + (ongoingHitchPlatform + 1)
message += "\nEspaçonaves destacadas: " + highlightedSpaceships.join(", ")
alert(message)