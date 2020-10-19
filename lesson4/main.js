// Human
//   name 
//   walk()
//   talk()

// Cat
//   tailLength
//   eat ()

const computer = {
  name: 'Asus',
  cores: 16,
  power: false,
  start: function () {
    console.log('Power on!')
    this.power = true
    this.off()
  },
  off: function () {
    console.log('Off')
  }
}

console.log(computer)

computer.keyboard = 'RU'
console.log(computer)

delete computer.cores;
console.log(computer)


// let b = 0;
// function changeB (b) {
//   b++;
//   console.log(b)
// }
// changeB(b)
// console.log(b)

let b = { status: false }
function changeB (b) {
   b.status = true
   console.log(b)
}
changeB(b)
console.log(b)

console.log(computer)
computer.start()
console.log(computer)



