function declensionsServings(number) {
  if (number % 10 === 1 && number % 100 !== 11) return 'порция'
  else if (number % 10 === 2 && number % 100 !== 12) return 'порции'
  else if (number % 10 === 3 && number % 100 !== 13) return 'порции'
  else if (number % 10 === 4 && number % 100 !== 14) return 'порции'
  else return 'порций'
}

export default declensionsServings