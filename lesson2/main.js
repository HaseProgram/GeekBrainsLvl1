// const a = 1
// function example1 () {
//   console.log(a)
// }x
// example1()

// const b = 2
// function example2(b) {
//   console.log(b)
// }
// example2(0)
// console.log(b)


// const c = 3
// function example3 () {
//   const c = 0
//   console.log(c)
// }
// example3()
// console.log(c)

// function example4() {
//   console.log(d)
// }
// const d = 4
// example4()

// let x = 1
// function example5() {
//   x++
//   console.log(x)
// }
// example5()
// console.log(x)

// let y = 1
// function example6(y) {
//   y++
//   console.log(y)
// }
// example6(y)
// console.log(y)

// if (true) {
//   let a = 1
//   var b = 2
// }

// console.log(b)
// console.log(a)

// 0 1 1 2 3 5 8

// function fibb (n) {
//   if (n <= 1) {
//     return n
//   }
//   return fibb(n - 1) + fibb(n - 2)
// }

// console.log(fibb(3))

let N = 0

function guess (tC) {
  if (tC === 1) {
    N = Math.round(Math.random() * 10)
    console.log(N)
  }

  const myAnswer = +prompt('Введите число')
  parseInt(prompt('Введите число'), 10)
  if (myAnswer === N) {
    alert(`Вы выиграли за ${tC} попыток!`)
    guess(1)
  } else {
    guess(tC++)
  }
}

guess(1)
