
// option 1
let arrOne = ["Apple", "Orange", "Pear", "Lemon"];
arrOne.map(i => console.log(i));

// option 2
let arrTwo = ["Apple", "Orange", "Pear", "Lemon"];
for(let i = 0; i < arrTwo.length; i++){
    console.log(arrTwo[i]);
}

let str = 'string';
let arrFromStr = str.split('');
console.log(arrFromStr);
let newStr = arrFromStr.join('');
console.log(newStr);

let arr = ["John", "Oleg", "Masha", "Den"];
arr.map(i => console.log('Hello, ' + i));

let arrNumbers = [-1, 0, 15, -20, 25];
let newArr = [];
for(let i = 0; i < arrNumbers.length; i++){
    newArr.push(Boolean(arrNumbers[i]));
}
console.log(newArr);
