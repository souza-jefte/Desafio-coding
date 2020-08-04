function series(prefixo, array) {
  // Escreve sua função abaixo:
  var resultado = []
  for (var i = 0; i < array.length; i++) {

    var item = prefixo + " " + array[i]
    resultado.push(item)

  }
  return resultado

}
