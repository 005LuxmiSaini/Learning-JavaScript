// Primitive VS Objects

//Primitive
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'Jhon',
    age: 23
};
var obj2 = obj1;
obj1.age = 35;
console.log(obj1.age);
console.log(obj2.age);

// Functions

var age = 47;
var obj = {
    name: "Jonas",
    city: "Lisbon"
};

function change(a, b){
    a = 20;
    b.city = "faridabad";
}

change(age,obj);

console.log(age);
console.log(obj.city);