// 1.Escopo de funções
// 2.Escopo de blocos 
// 3.Escopo léxico

// Escopo de funções

// message é acessível apenas dentro da função getMessage

// function myFunc(){
//   let cat = 'Cleiton'
//   const age = 10
//   const color = 'Branco'
//   console.log(age)
// }

// function myFunc2(){
//   const age = 18
//   const color = 'Preto'
//   console.log(age)
// }
// myFunc()
// myFunc2()

// As variáveis e constantes que eu declaro dentro de uma função são acessados somente dentro desse função, eu não consigo manipular e acessar esses valores fora do escopo da função.


// const dog = 'Pastor-Alemão'

// function dogWatch(){
//   const dog = 'Dogo Argentino'
//   console.log(dog)
// }

// dogWatch()

// console.log(dog)

// Variáveis de mesmo nome podem estar em escopos diferentes



// Escopo de bloco

// if(true){
//   var dragon = 'Balerion'
//   console.log(dragon)
// }
// console.log(dragon)

// let e const tem regras diferentes de escopo da var, antes do S6 a única forma de prender uma var em um escopo era declarando ela dentro de uma função, caso contrário se eu declarasse uma var em um if ou for loop ela pode ser acessada fora do bloco onde ela foi declarada


// Escopo léxico


const external = () => {
  const book = 'Sapiens'

  const internal = () => {
    // const book = 'Testamento'
  
    const extraInternal = () => {
      console.log(book.toUpperCase())
    }
    extraInternal() 
  }
  internal()
}

// A função external declarou uma const book, declarou uma função internal e invocou essa função internal, a função internal exibe o valor da book com letras maiúsculas mesmo que a book não seja declarado na função internal, porque isso é possível?, quando eu uso uma variável dentro de uma função se essa variável não foi declarada dentro da função, essa variável vai ser buscada no escopo acima.

// o escopo léxico são funções aninhadas que estão sujeitas a buscar variáveis em um escopo acima delas, essa relação tem só um fluxo que é de fora para dentro