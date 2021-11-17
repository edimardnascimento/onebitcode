// -- sintaxe basica
// const sum = (number1,number2) => {
//   return number1 + number2
// }
// console.log(sum(1,2))

// ----------------------------------------------------------------
// const sum2 = (number1,number2) => number1 + number2
// console.log(sum2(3,2))

// ----------------------------------------------------------------

// const community = () => {
//   return 'Teste'
// }
// console.log(community())

// const community2 = () => 'Teste2'
// console.log(community2())

// ----------------------------------------------------------------

// const double = (number) => number * 2
// const double = number => number * 2
// console.log(double(15))

// ----------------------------------------------------------------

// const sum3 = (number1,number2) => number1 + number2
// console.log(sum(20,25))

// ----------------------------------------------------------------

// const getPerson = () => {
//   return {name: "Henri", eye: "blue"}
// }
// console.log(getPerson())

// const getPerson2 = () => ({name: "Henri", eye: "blue"})
// console.log(getPerson2())

// ----------------------------------------------------------------

// (() => {
//   function Person (){
//     const that = this;
//     that.year = 0;

//     setInterval(function() {
//       that.year = that.year + 1;
//       console.log('Qual that?', that);
//       console.log('Qual é a idade?', that.year)
//     }, 1000)
//   }

//   const p1 = new Person()
// })();

(() => {
  function Person (){
    this.year = 0;

    setInterval(() => {
      this.year = this.year + 1;
      console.log('Qual this?', this);
      console.log('Qual é a idade?', this.year)
    }, 1000)
  }

  const p1 = new Person()
})();










