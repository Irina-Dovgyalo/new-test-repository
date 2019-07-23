alert( null || 2 || undefined ); // 2 
alert( alert(1) || 2 || alert(3) ); // 1; 2 
alert( 1 && null && 2 ); //null
alert( alert(1) && alert(2) ); //1; undefined
alert( null || 2 && 3 || 4 ); //3

// Проверка if внутри диапазона
let age = +prompt('Введите число ', '');
if(age >= 14 && age <= 90){
    console.log(age);
}

// Проверка if вне диапазона
let ageOne = +prompt('Введите число ', '');
if(!(age >= 14 && age <= 90)){
    console.log(ageOne);
}

// Проверка if вне диапазона без '!'
let ageTwo = +prompt('Введите число ', '');
if(ageTwo < 14 || ageTwo > 90){
    console.log(ageTwo);
}

if (-1 || 0) alert( 'первое' ); // 'первое'; -1
if (-1 && 0) alert( 'второе' ); // false - не выполнится
if (null || -1 && 1) alert( 'третье' ); //'третье'; 1
