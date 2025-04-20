/// Object and properties


//Object litrel
var jhon = {
    firstName: 'Jhon',
    lastName: 'Smith',
    birthYear:'1996',
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(jhon.firstName);
console.log(jhon['lastName']);
var x = "birthYear";
console.log(jhon[x]);

jhon.job = "designer";
jhon["isMarried"] = true;
console.log(jhon);

//new object syntex
var jane = new Object();
jane.firstName = "Jane";
jane.lastName = "Smith";
jane.birthYear = "1968";
console.log(jane);