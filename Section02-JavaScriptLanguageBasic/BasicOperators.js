//Basic Operators
var year, yearLuxmi, yearMuskan;
var now = 2025;
ageLuxmi = 19;
ageMuskan = 18;
//Math Operators
var yearLuxmi = now - ageLuxmi;
var yearMuskan = now - ageMuskan;
console.log(yearLuxmi);

console.log(now + 2);
console.log(now + 2);
console.log(now / 2);

//Logical Operators
var luxmiOlder = ageLuxmi > ageMuskan;
console.log(luxmiOlder);

//type of operator
console.log(typeof luxmiOlder);
console.log(typeof ageLuxmi);
console.log(typeof "Muskan is older the Luxmi");
var x;
console.log(typeof x);

// operator precedence
var now = 2025;
var yearLuxmi = 2006;
var fullAge = 19;
//Multiple operator
var isFullAge = now - yearLuxmi >= fullAge;//true
console.log(isFullAge);

//Grouping operator
var ageLuxmi = now - yearLuxmi;
var ageMuskan = 18;
var average = (ageLuxmi + ageMuskan) / 2;

console.log(ageLuxmi);
console.log(average);

//Multiple assignments
var x,y;
x = y = (5 + 5 ) * 4 - 5;//10 * 4 -5//40-5 //35
console.log(x,y);
console.log(typeof x,y);

// More operators
x *= 2;
console.log(x);
x -= 10; 
console.log(x); 
x++;
console.log(x);
x--;
console.log(x);
