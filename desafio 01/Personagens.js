function filme(personagens, filmes, lancamentos, id) {
  // Escreva abaixo o seu código:
  var index = id - 1

  if (id < 1 || id > personagens.length) {
    return "Essa não é uma opção válida."

  } else {
    return personagens[index] + " é um personagem do filme " + filmes[index] + " que estreou no cinema em " + lancamentos[index] + "."
  }

}

var personagens = ["Hermione", "Trinity", "Leia"]
var filmes = ["Harry Potter", "Matrix", "Star wars"]
var lancamentos = [2001, 1999, 1977]
var id = 2

console.log(filme(personagens, filmes, lancamentos, id))
