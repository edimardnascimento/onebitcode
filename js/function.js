// function greetPilot(name, message = "Olá") {
//   // alert(message + ", " + name)
//   return(message + " " + name)
// }
// alert(greetPilot("Edimar"))

// ----------------------------------------------------------------


// funcao anonima
// let doubleSpeed = function(velocity){
//   return velocity * 2
// }
// let newVelocity = doubleSpeed(40)
// console.log(newVelocity)

// Arrow function

// const doubleVelocity = (velocity) => {
//   return velocity * 2
// }
// console.log(doubleVelocity(60))

// const doubleVelocity = (velocity) => velocity * 2
// console.log(doubleVelocity(60))

// const doubleVelocity = velocity => velocity * 2
// console.log(doubleVelocity(60))

// High Order Function - 1 
// function doubleVelocity(velocity, printer) {
//   console.log("Entrei em doubleVelocity")
//   let newVelocity = velocity * 2
//   printer(newVelocity)
//   return newVelocity
// }
// let printVelocity = velocity => {
//   console.log("Nova velocidade " + velocity + "km/s")
// }
// let newVelocity = doubleVelocity(80, printVelocity)
// console.log(newVelocity)

// High Order Function - 2
// function doubleVelocity(velocity, printer) {
//   console.log("Entrei em doubleVelocity")
//   let newVelocity = velocity * 2
//   printer(newVelocity)
//   return newVelocity
// }
// let anotherVelocity = doubleVelocity(50, velocity => {
//   console.log("Outra velocidade: " + velocity)
// })

// High Order Function - 3 - Exercicio
function slowDown(velocity, printer) {
  let deceleration = 20

  while(velocity > 0) {
    printer(velocity)
    velocity -= deceleration
  }

  alert("Nave parada, as comportas podem ser abertas.")
}
let spaceshipVelocity = 150
slowDown(spaceshipVelocity, function(velocity) {
  console.log("Velocidade atual: " + velocity)
})