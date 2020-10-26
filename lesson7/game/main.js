// Cell
// Field
// Snake
// Game

class Cell {
  snake = false
  food = false

  constructor () {
    // ...
  }

  render (placeToRender) {
    const cellHTML = document.createElement('div')
    cellHTML.classList.add('cell')
    placeToRender.appendChild(cellHTML)
  }
}

class Field {
  n = 0
  m = 0
  field = []

  constructor (n, m) {
    this.n = n
    this.m = m

    this._createField()
    console.log(this.field)
  }

  _createField () {
    const { n, m } = this
    for (let i = 0; i < n; i++) {
      const row = []
      for (let j = 0; j < m; j++) {
        row.push(new Cell())
      }
      this.field.push(row)
    }
  }

  render () {
    const placeToRender = document.querySelector('main')
    this.field.forEach(row => {
      const rowHTML = document.createElement('div')
      rowHTML.classList.add('row')

      row.forEach(cell => {
        cell.render(rowHTML)
      })

      placeToRender.appendChild(rowHTML)
    })
  }
}

class Snake {
  // змея
}

class Game {
  Field = null
  Snake = null
  scores = 0

  constructor (n, m) {
    /**
     * 1) Сгенерировать поле
     * 2) Создать змею
     * 3) Разместить змею по центру экрана
     * 4) Запустить движение и так далее
     */

     this.Field = new Field(n, m)
     this.Field.render()
     this.Snake = new Snake()
  }

  start () {

  }
}

const MyGame = new Game(10, 15)
MyGame.start()
