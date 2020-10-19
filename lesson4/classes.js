class Computer {
  name = ''
  power = false
  _cores = 16

  constructor (name) {
    this.name = name
    this._cores = 0
  }

  start () {
    this.power = true
  }

  _mymethod () {

  }
}

const MyComputer = new Computer('Asus')
const MyComputer1 = new Computer('Dell')
const MyComputer2 = new Computer('Apple')
console.log(MyComputer)
console.log(MyComputer1)
console.log(MyComputer2)

console.log(Computer)
MyComputer.start()
MyComputer.power = false
MyComputer._cores // error

// Инкапсуляция

class Pet2 {
  pet2 = "Wow!"
}

class Pet extends Pet2 {
  name = 'My name'

  constructor (name) {
    super()
    this.name = name
  }
  
  voice () {
    console.log('Say something!')
  }

  eat () {
    console.log('Creature gonna eat!')
  }
}

class Cat extends Pet {
  tailLength = 10

  constructor (name) {
    super(name)
    console.log(this.tailLength)
  }

  voice () {
    console.log('Meow!')
  }
}

class Dog extends Pet {
  tailLength = 10

  constructor (name) {
    super(name)
    console.log(this.tailLength)
  }

  voice () {
    console.log('Bow!')
  }
}

const MyCat = new Cat('Alice');
console.log(MyCat)
const MyDog = new Dog('Sharik')

const MyPets = [MyCat, MyDog];

MyPets.forEach(pet => {
  pet.voice()
})


