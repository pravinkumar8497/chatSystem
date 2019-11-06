let number = 1;
console.log(new Date().getTime());
for (let init = 2; init <= 50000; init++) {
     number = number * init;
}
console.log(number);
console.log(new Date().getTime());
let number2 = findFactorial(50000);
console.log(number2);
console.log(new Date().getTime());
function findFactorial(num) {
     if(num === 1) {
         return 1;
     } else {
         num = num * findFactorial(num-1);
     }
     return num;
}
console.log(new Date().getTime());
