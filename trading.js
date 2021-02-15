let btc = 5000
let btcDwn = 20
let btcUp = 40000
let btcSty = 8000
if (btc < btcDwn || btc < btcSty) {
  console.log('Btc is ' + `${btc}` + ' €. Buy as much as you can before it s too late !')
} else if (btc > btcSty || btc > btcUp) {
  console.log('Btc is ' + `${btc}` + ' €. Sell as much as you can before it s too late !')
} else {
  console.log('Btc is ' + `${btc}` + ' €. Not this time.')
}
