// Boolean exercise

let res1 = (true && false) || (false && true) // résultat false
let res2 = 10 > 11 && 11 > 10 // résultat false
let res3 = (true || false) && true // résultat true
let res4 = (!true && false) || (!false && !false) // résultat true
let res5 = 'Hello' === 'Hello' && 'World' === 'Word' // résultat false
let res6 = (!(20 >= 20) && 7 === 7) || true // résultat true
let res7 = '1' === 1 && '2' === 2 && '3' === 3 // résultat false
let res8 = !res7 // résultat true
let res9 = !res8 // résultat false
let res10 = (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9) // résultat true
let Spc = ' '
console.log(`res1 = ${res1}` + Spc + `res2 = ${res2}` + Spc + `res3 = ${res3}` + Spc + `res4 = ${res4}` + Spc + `res5 = ${res5}` + Spc + `res6 = ${res6}` + Spc + `res7 = ${res7}` + Spc + `res8 = ${res8}` + Spc + `res9 = ${res9}` + Spc + `res10 = ${res10}`)