/*let imputNumber = Number(prompt('Введіть число'));
if (imputNumber === 10) {
    console.log('Вірно');
} else if (imputNumber !== 10) {
    console.log('Невірно') } */




/*const test = true
   if (test) {
console.log('Вірно');
} else {
  console.log('Невірно');
}*/



/*const test = true
   if (test != true) {
console.log('Вірно');
} else {
  console.log('Невірно');
}*/


let sum = Number(prompt('Введіть суму:'));
let res = null;
if (sum >= 500) {
res = sum - (sum / 100 * 3);
console.log(res);
} else if (sum >= 800) {
res = sum - (sum / 100 * 5 + sum);
console.log(res);
} else if (sum <= 499) {
console.log(sum);
}
