let x = +prompt('Введите числитель', '');
let y = +prompt('Введите знаменатель', '');
try {
    if (y !== 0){
        console.log(x / y);
    } else {
        console.log(err);
    }       
} catch(err) {
    console.log('На ноль делить нельзя!');    
}
