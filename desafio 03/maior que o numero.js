function maiorQueNum(array, num) {
  // Escreva abaixo o seu código:
  var maiores = []
  for (var index = 0; index < array.length; index++) {
    if (num < array[index]) {
      maiores.push(array[index])

    }
  }
  return maiores

}
