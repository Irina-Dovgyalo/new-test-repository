function Person(name, age){
	this.name = name;
	let localAge = age;
	this.getAge = function(){
		return localAge;
	}
	this.setAge = function(age){
		if(typeof age === 'number'){
			localAge = age;
		} else {
			console.log('Enter a number, please!');
		}
	}
}

let mat = new Person('Mat', 16);
console.log(mat.localAge); // undefined
console.log(mat.name); // Mat
console.log(mat.getAge()); // 16
console.log(mat.setAge(25));
console.log(mat.getAge()); // 25