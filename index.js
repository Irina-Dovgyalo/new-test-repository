for(let a = 20; a >= 10; a--){
	console.log(a);
}

let j = 0;
while (++j < 5) console.log( j ); //1; 2; 3; 4

let k = 0;
while (k++ < 5) console.log( k ); //1; 2; 3; 4; 5

for (let i = 0; i < 5; i++) console.log( i ); //0; 1; 2; 3; 4
for (let m = 0; m < 5; ++m) console.log( m ); //0; 1; 2; 3; 4

for(let n = 1; n <= 10; n++){
    if(n % 2 == 0){
        console.log(n);
    }
}

let p = 0;
while(p < 3){
    alert( "номер " + p + "!" );
    p++;
}

let value;

do {
    value = +prompt('Введите число больше 100', 0);        
} while (value <= 100 && value != null);

