// getElementByID
// getElementByClassName
// getElementByTagName

// querySelector
// querySelectorAll
// const nav = document.querySelector('nav')

// const newElement = document.createElement('a')
// newElement.innerText = 'Моя новая ссылка'

// nav.insertBefore(newElement, nav.children[2])

// nav.removeChild(newElement)


// const input = document.querySelector('input')
// console.log(input.value)
// console.log(input.placeholder)

// input.setAttribute('title', 'MYTITILE')


// const link = document.querySelector('a')

// link.style.color = 'yellow'

// setInterval(() => {
//   link.classList.toggle('link_green')
// }, 1000)

const menu = ['Home', 'About', 'Feedback']

const nav = document.querySelector('nav')

menu.forEach(link => {
  const linkElement = document.createElement('a')
  linkElement.innerText = link
  linkElement.setAttribute('href', `/${link.toLowerCase()}/`)
  linkElement.classList.add('link')
  nav.appendChild(linkElement)
})


