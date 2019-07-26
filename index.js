function User(name, surname, yearOfBirth){
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;

    this.getFullName = function(){
        console.log(this.name + ' ' + this.surname);
    }

    this.getFullAge = function(){
        let date = new Date();
        let year = date.getFullYear();
        console.log(year - this.yearOfBirth);
    }
}

function Student(name, surname, yearOfBirth, group){
    User.call(this, name, surname, yearOfBirth);
    this.group = group;

    this.getStudentInfo = function(){
        console.log(this.name + ' ' + this.surname + ', group: ' + this.group);
    }
}

let user = new User('Oleg', 'Ivanov', 1990);
console.log(user.getFullName());
console.log(user.getFullAge());

let student = new Student('Ivan', 'Petrov', 1995, 'A-111');
console.log(student.getFullName());
console.log(student.getFullAge());
console.log(student.getStudentInfo());
