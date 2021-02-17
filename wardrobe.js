let isRainy = false
let isWindy = true
let isHail = false
let is20KmAstFall = false
let temperature = 10
let weather = ''
let clothes = ''

console.log('Alexa, what will the weather be like and what do you advise me for clothes to wear ?')

while (!is20KmAstFall) { // condition false "chute d'un astéroide de 20 km de diametre"
  // condition true "pluie"
  if (isRainy) {
    weather = 'rainy'
    clothes += 'an umbrella, '
  }
  // condition true "vent"
  if (isWindy) {
    weather = 'windy'
    clothes += 'an windbreaker, '
  }
  if (temperature < 15) {
    clothes += 'an coat, '
  } else if (temperature >= 15 && temperature <= 20) {
    clothes += 'an sweater, '
  } else if (temperature >= 20 && temperature <= 35) {
    clothes += 'an Tank top, '
  } else if (temperature >= 38 && temperature <= 50) {
    clothes += 'Nothing, but a 50+ protective cream is essential to not look like a grilled sausage, '
  } else if (temperature >= 50 && temperature <= 100) {
    clothes += 'an thermal protection suit, '
  } else {
    clothes += 'an t-shirt, '
  }

  // condition true "grêle"
  if (isHail) {
    weather = 'hail'
    clothes += 'a hemlet and a shield ! I m joking. Because of the hail, i advise you to stay at home, '
  }

  console.log(`The weather is ` + `${weather}` + `. I recommend that you wear: ${clothes}`)
  break
}
// condition true "chute d'un astéroide de 20 km de diametre"
while (is20KmAstFall) {
  console.log('An asteroid with a size of 20 Km will crash into Earth in 30 mn. I recommend you to go to another planet, if you have a spaceship, of course. Otherwise, you are doomed !')
  break
}