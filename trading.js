let btc = 20000 // prix du btc
let btcDwn = 10000 // prix du btc pour acheter
let btcUp = 40000  // prix du btc pour vendre
let btcSty = 18000 // somme en btc que l'on posséde
if (btc < btcDwn || btc < btcSty) {
  console.log('Btc is ' + `${btc}` + ' €. Buy as much as you can before it s too late !')
} else if (btc > btcSty || btc > btcUp) {
  console.log('Btc is ' + `${btc}` + ' €. Sell as much as you can before it s too late !')
} else {
  console.log('Btc is ' + `${btc}` + ' €. Not this time.')
}
