//The Prototype Chain in the Console

var jhon = {
    name: 'Jhon',
    yearOfBirth: 1998,
    job: 'teacher'
 };

 
 var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
   
 }

Person.prototype.calculateAge =
function() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";
 var jhon = new Person('Jhon',1998,'teacher');
var jane = new Person('Jane',1969,'designer');
var mark = new Person('Mark', 1948, 'retired');

jhon.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(jhon.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
