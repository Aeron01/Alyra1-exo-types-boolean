// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse, venteuse, chaude ou froide
let isRainy = true
let isWindy = false
let isHoty = false
let isFrosty = false

if (isRainy || isWindy || isFrosty) {
  console.log('Mettez votre manteau')
} else {
  console.log('Nous n avez pas besoin de manteau today')
}