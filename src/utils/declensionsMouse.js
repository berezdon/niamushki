function declensionsMouse(number) {
  if (number % 10 === 1 && number % 100 !== 11) return 'мышь'
  else if (number % 10 === 2 && number % 100 !== 12) return 'мыши'
  else if (number % 10 === 3 && number % 100 !== 13) return 'мыши'
  else if (number % 10 === 4 && number % 100 !== 14) return 'мыши'
  else return 'мышей'
}

export default declensionsMouse