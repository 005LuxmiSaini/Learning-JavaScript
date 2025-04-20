//Arrays

//Initialize new array
var names = [ "Luxmi", "Muskan","Isha"];
var years = new Array(2006, 2005, 1999);

console.log(names);
console.log(names.length);

//Mutate array data
names[1] = "Ben";
names[names.length] = "Mary";
console.log(names);

//Different data types
var jhon = [ 'Jhon','Smith', 1985, 'designer',false,'design'];
jhon.push('blue');
jhon.unshift("Mr.");
console.log(jhon);

jhon.pop();
jhon.pop();
jhon.shift();
    console.log(jhon);

console.log(jhon.indexOf('design'));

var isDesigner = jhon.indexOf("designer") === -1?
'Jhon is NOT a designer': 'Jhon IS a desiger';
console.log(isDesigner);