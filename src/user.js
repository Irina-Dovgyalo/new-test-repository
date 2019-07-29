export default class User {
    constructor(name, surname, yearOfBirth) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.getFullName = function () {
            console.log(this.name + ' ' + this.surname);
        };
        this.getFullAge = function () {
            let date = new Date();
            let year = date.getFullYear();
            console.log(year - this.yearOfBirth);
        };
    }
};