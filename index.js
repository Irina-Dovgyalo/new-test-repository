function sum(a, b){
    return a + b;
}

console.log(sum(5, 3));

function checkName(name){
    let userName = 'Вася';
    if(name == userName){
        console.log('Привет, ' + name);
    }
}

console.log(checkName('Вася'));

function checkTypeOfArgument(a){
    return typeof(a);
}

console.log(checkTypeOfArgument('str'));
console.log(checkTypeOfArgument(true));
console.log(checkTypeOfArgument(15));
console.log(checkTypeOfArgument([]));
console.log(checkTypeOfArgument({}));
console.log(checkTypeOfArgument(null));

function getEvenNumberFromArray(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            newArr.push(arr[i]);
        }
    } console.log(newArr);
}

let arr1 = [1, 3, 4, 2, 6, 8, 3, 7];

console.log(getEvenNumberFromArray(arr1));