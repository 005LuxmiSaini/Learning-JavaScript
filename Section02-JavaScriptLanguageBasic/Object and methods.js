

/// Object and methods

var jhon = {
    firstName: 'Jhon',
    lastName: 'Smith',
    birthYear:'2009',
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
         this.age = 2025 - this.birthYear;
    }
};
var age = jhon.calcAge();
console.log(jhon);