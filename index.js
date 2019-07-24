const user = {};
user.name = 'Oleg';
user.age = 20;

console.log(user);

user.age = 25;
console.log(user);

user.sum = function(a, b){
    return a + b;
}
console.log(user);
console.log(user.sum(5, 6));