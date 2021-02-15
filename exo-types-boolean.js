// Exercice 1
let T1 = 'Data type'
let T1S1 = 'Primitive type'
let T1S2 = 'Undefined type'
let T1S3 = 'Null type'
let T1S4 = 'Boolean type'
let interligne = '========================================================'

//--------------------------------------------------

console.log('')
console.log(interligne)
console.log('')
console.log(T1)
3 + 5 // addition de 2 numbers
'Hello' + ' world' // concaténation de 2 strings
17 - 5 // soustraction de 2 numbers
'Bonjour HardFork' - 'HardFork' // l'opérateur '-' n'est pas implementé pour des strings
console.log('')
console.log(interligne)
console.log('')
console.log(T1S1)
let x = 10
++x // ici on ne modifie pas 10, on réasigne à x une nouvelle valeur qui est 11

const increment = (n) => {
  n = n + 1
  return n
}

const addMovie = (list, elem) => {
  list.push(elem)
}

// n is immutable
let n = 10
increment(n)
console.log(n) // output: 10

// movies is mutable
let movies = ['The Prestige', 'Batman', 'Incepetion', 'Interstellar']
addMovie(movies, 'Tenet')
console.log(movies) // output: [ 'The Prestige', 'Batman', 'Incepetion', 'Interstellar', 'Tenet' ]
console.log('')
console.log(interligne)
console.log('')
console.log(T1S2)
console.log('let x1 // x1 n est pas initialisé, il est de type undefined et à pour valeur undefined...')
console.log('console.log (typeof x1) // undefined')
console.log('en rajoutant la commande console.log (x1) et en lancant un run, il nous dira que la commande est bien undefined')
console.log('')
console.log(interligne)
console.log('')
console.log(T1S3)
console.log('les données de type null sont des variable à qui ont a intentionellement pas mis de valeur. A éviter si possible !')
console.log('')
console.log(interligne)
console.log('')
console.log(T1S4)
let isOpen = false
if (isOpen) {
  console.log("Entrer")
} else {
  console.log('Faire demi tour')
}

console.log('')
// Message d'acceuil
console.log('Welcome to my game')

// Le jeu commence avec gameOver à false
let gameOver = false
let boucle = 0
// La boucle suivante est executé 60 fois par seconde, 60 FPS.
// Tant qu'il n'y a pas game over continuer le jeu

while (!gameOver) {
  // Récupérer les inputs du joueur: clavier, souris, pad
  console.log('getPlayerJoystickInput() (Fonction non définie dans l exemple)')

  // En fonction des inputs récupérés mettre à jour les données du jeu: sauter, gagner, perdre
  // Si une perte est detectée set gameOver à true
  console.log('updateGameLogic() (Fonction non définie dans l exemple)')
  gameOver = true
  // Dessiner à l'écran en fonction de la logique du jeu
  console.log('drawOnScreen() (Fonction non définie dans l exemple)')
}
console.log('Game over')


console.log('')
// Booleans definissants la météo actuelle
let isAcSunny = true
let isAcCloudy = false
let isAcRainy = true

// L'expression isAcCloudy && isAcRainy est égale à false alors passe à la suivante
if (isAcCloudy && isAcRainy) {
  console.log('Please take an umbrella.')
  // L'expression isAcSunny && isAcCloudy est aussi égale à false, donc suivant
} else if (isAcSunny && isAcCloudy) {
  console.log('There is a danger of sunburn.')
  // L'expression isAcSunny && isAcRainy est égale à true, alors il affiche 'double rainbow'
} else if (isAcSunny && isAcRainy) {
  console.log('Double rainbow!!')
  // Default case, si aucune des conditions dessus ne match alors...
} else {
  console.log('i do not have an opinion on this kind of weather.')
}

console.log('')
// Programme pour vérifier si un user a les capacités de dev un smart contract
let isDev = false
let hasSoliditySkill = false
let hasIndomitableWill = true

/*
  L'expression suivante retourne un boolean:
  isDev && hasSoliditySkill || hasIndomitableWill
  On peut donc utiliser cette expression ou un boolean est attendu
*/
if ((isDev && hasSoliditySkill) || hasIndomitableWill) {
  console.log('You will be a great blockchain developper')
} else {
  console.log('Sorry, but you miss something... Try harder')
}

console.log('')

// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse ou venteuse
let isRainy = true
let isWindy = false

if (isRainy || isWindy) {
  console.log('Mettez votre manteau')
} else {
  console.log('Nous n avez pas besoin de manteau today')
}

console.log('')

// Programme pour vérifier si on peut voter en France
// Pour voter il faut être majeur, de nationalité francaise
// et être sur le sol francais
let age = 20
let nationality = 'french'
let isResident = false // résident sur le sol francais ?

if (age >= 18 && nationality === 'french' && isResident) {
  console.log('Vous pouvez voter en France')
} else if (age >= 18 && nationality === 'french' && !isResident) {
  console.log('Vous pouvez voter mais à l etranger. Contactez votre consulat.')
} else {
  console.log('Un des paramêtres n est pas valide')
}
console.log('')
console.log('Fin de l exercice 1')
console.log(interligne)
console.log('')
