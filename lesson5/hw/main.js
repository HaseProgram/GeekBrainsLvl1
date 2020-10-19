function ex1 () {
  let i = 0
  while (i < 100) {
    let j = 2
    while (j <i ) {
      if (i % j === 0) {
        break
      }
      j++
    }
    if (j === i) {
      console.log(i)
    }
    i++
  }
}

function ex2 () {
  function numToObj (n) {
    const obj = {}
    if (n >= 0 && n <= 999) {
      const splitted = []
  
      for (let i = 0; i <= 2; i++) {
        splitted.push(n % 10)
        n = Math.trunc(n / 10)
      }
  
      // obj.units = splitted[0]
      // obj.dozens = splitted[1]
      // obj.hundreds = splitted[2]
      [obj.units, obj.dozens, obj.hundreds] = splitted
    }
  
    return obj
  }
  
  const result = numToObj(123)
  console.log(result)
  
  const options = {
    title: 'Menu',
    width: 100,
    height: 50
  }
  
  const { title, width, height } = options
  console.log(title, width, height)
}

function ex3 () {

  class Cart {
    _cart = []
  
    constructor (...items) {
      console.log(items)
      console.log(...items)
      this._cart.push(...items)
    }
  
    addItem (item) {
      this._cart.push(item)
    }
  
    calcTotalPrice () {
      return this._cart.reduce((result, curItem) => {
        return result + curItem.price
      }, 0)
    }
  }
  
  class Item {
    _name = ''
    _price = 0
  
    get price () {
      return this._price
    }
  
    set name (n) {
      this._name = n
    }
  
    constructor (name, price) {
      this._name = name
      this._price = price
    }
  }
  
  const CartInstance = new Cart(new Item('Computer', 1000), new Item('TV', 300))
  let totalPrice = CartInstance.calcTotalPrice()
  console.log(totalPrice)
  CartInstance.addItem(new Item('Apple', 5))
  CartInstance.addItem(new Item('1', 532))
  CartInstance.addItem(new Item('2', 511))
  
  totalPrice = CartInstance.calcTotalPrice()
  console.log(totalPrice)

  const MyItem = new Item('name', 100)
  console.log(MyItem.price)
  MyItem.price = 0
  console.log(MyItem.price)
}

// forEach, reduce, filter, map

const arr = [
  { price: 100, },
  { price: 200, },
  { price: -300, },
  { price: 400, },
  { price: 500, }
]

arr.reduce((result, curItem) => {
  if (curItem.price > 0) {
    return result + curItem.price
  }
  return result
}, 0)

const positive = arr.filter((cur) => {
  if (cur.price >= 0) {
    return cur
  }
})

const arr2 = [1,1,1,2,2,2,3,3,3,4,4,4,5]
const uniq = arr2.filter((item, index, arr2) => arr2.indexOf(item) === index)

arr.map((cur) => {
  cur.discount = -10
  return cur
})

console.log(arr)


