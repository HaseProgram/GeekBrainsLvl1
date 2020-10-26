const field = document.querySelector('.chess')
if (field) {
  generateField (8, field)
}

function generateField (N, place) {
  const coords = 'ABCDEFGH'

  for (let i = 0; i < N + 1; i++) {
    const row = document.createElement('div')
    row.classList.add('row')
    for (let j = 0; j < N + 1; j++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')

      if (j && !i) {
        cell.innerHTML = coords[j - 1]
      }

      if (!j && i) {
        cell.innerHTML = N + 1 - i
      }

      if (i && j) {
        cell.classList.add(i % 2 !== j % 2 ? 'black' : 'white')
      }

      row.appendChild(cell)
    }
    place.appendChild(row)
  }
}
