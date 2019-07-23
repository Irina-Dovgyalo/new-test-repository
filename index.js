let numberOne = 123;
let numberTwo = 12.35;
let numberThree = 0;

let strOne = 'string';
let strTwo = '15';
let strThree = '55';
let strEmpty = '';

let checkedTrue = true; //1
let checkedFalse = false; //0

let number = null; 

let x = undefined;

let user = { 
    name: "Вася",
    age: 20
};

console.log(numberOne + numberTwo); //135.35
console.log(numberOne + strOne); //'123string'
console.log(numberOne + strTwo); //'12315'
console.log(numberOne + strEmpty); //'123'
console.log(strTwo + strThree); //'1555'
console.log(numberThree + checkedFalse); //0
console.log(numberThree + checkedTrue); //1
console.log(checkedTrue + checkedTrue); //2
console.log(checkedTrue + checkedFalse); //1
console.log(numberOne + user.age); //143
console.log(numberOne + number); //123

console.log(numberOne - numberTwo); //110.65
console.log(numberOne - strTwo); //108
console.log(numberOne - strOne); //NaN
console.log(numberOne - user.age); //103
console.log(numberThree - checkedTrue); //-1
console.log(number - checkedTrue); //-1
console.log(numberOne - x); //NaN
console.log(strTwo - strThree); //-40

console.log((numberOne / numberTwo).toFixed(2)); //'9.96'
console.log(numberOne / numberTwo); //9.959514170040487
console.log(numberOne / strTwo); //8.2
console.log(numberOne / number); //Infinity
console.log(numberOne / numberThree); //Infinity
console.log(numberTwo / checkedTrue); //12.35
console.log(numberTwo / checkedFalse); //Infinity
console.log(strTwo / strThree); //0.2727272727272727

console.log(numberOne * numberTwo); //1519.05
console.log(numberOne * x); //NaN
console.log(x * x); //NaN
console.log(x * number); //NaN
console.log(strTwo * strThree); //825
console.log(checkedTrue * checkedFalse); //0
console.log(numberOne * user.age); //2460

console.log('' + 5); // === '5'
console.log(+ '5'); // === 5
console.log(!!''); // === false
console.log(!!'0'); // === true
console.log(!!'-1'); // === true
console.log(!!true); // === true
console.log(Number('5') * Number('10')); //50
console.log(Number('0011')); //11
console.log(String(5) * String(10)); //50


