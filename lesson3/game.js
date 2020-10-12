/**
 * 1) Сгенерировать число (уникальное!)
 * 2) Пригласить на ввод
 * 3) Для каждой цифры из числа пользователя - ищем ее в загаднном числе
 * 4) Если Число есть, но позиция не совпала - засчитываяем 1 корову
 * 5) Если число есть, и позиция совпала, то засчитываем 1 быка
 * 6) Вывордим их
 */

 function generateNumber () {
   const arr = []
   while (arr.length < 4) {
     const d = Math.floor(Math.random() * 10)
     if (arr.indexOf(d) < 0) {
       arr.push(d)
     }
   }

   return arr.join('')
 }

function game () {
  const N = generateNumber()
  console.log(N)

  let tryCounter = 1

  while (true) {
    const myAns = prompt('Введите четырехзначное число:')

    if (myAns === N) {
      break
    }
  
    let cow = 0
    let bull = 0
  
    for (let i = 0; i < myAns.length; i++) {
      const digit = myAns[i]
      const found = N.indexOf(digit)
      if (found >= 0) {
        if (found === i) {
          bull++
        } else {
          cow++
        }
      }
    }

    console.log(`У вас ${cow} коров и ${bull} быков`)

    tryCounter++
  }

  alert(`Вы угадали за ${tryCounter} попыток`)
}

game()
