// Lecture: let and const
/*
// ES5
var name5 = 'Jane Smith';
var age5 = 22;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 34;
name6 = 'Jane Miller';
console.log(name6);
*/
//ES5
/*function driversLicence5(passedTest){
    if (passedTest){
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;

       
    }
    console.log(firstName + ',born in ' + yearOfBirth + ' , is now of officially allowed to drive a car.');
}

driversLicence5(true);

//ES6

function driversLicence6(passedTest){
          //console.log(firstName);
         let firstName;
         const yearOfBirth = 1990;

    if (passedTest){
         firstName = 'John';  
    }
    console.log(firstName + ',born in ' + yearOfBirth + ' , is now of officially allowed to drive a car.');
}
driversLicence6(true);



var i = 23;
for (var i = 0; i < 5; i++){
    console.log(i);
}
console.log(i);
*/
/*





/// Lecture: Blocks and IIFES
// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
    console.log(a + b);
    console.log(c);
}


// ES5
(function(){
    var c = 3;
})();
//console.log(c);*/
/*





// Lecture: Strings
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
    return 2016 - year;
}

//ES5
console.log('This is ' + firstName +  ' '   + lastName +  '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6  
console.log(`This is ${firstName} ${lastName}. He  was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName} `;
console.log(n.startsWith('J'));
console.log(n.endsWith('S'));
console.log(n.includes('oh'));
console.log(`${firstName}`.repeat(5));*/
/*




// Lecture: Arrow functions

const years = [1990, 1956, 1994, 1934];

//ES5
var ages5 = years.map(function(el){
    return 2016 - el;

});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new 
    Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);*/


/*
// Lecture: Arrow  function 2

//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
       
       var self = this; 
        document.querySelector('#one').addEventListener('click', function(){
            var str = 'This is box number '+ self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
};
//box5.clickMe();



//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
       
        
        document.querySelector('#one').addEventListener('click', () => {
            var str = 'This is box number '+ this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};
box6.clickMe();


const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
       
        
        document.querySelector('#one').addEventListener('click', () => {
            var str = 'This is box number '+ this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};
box66.clickMe();

function Person(name){
    this.name = name;
}
//ES5
Person.prototype.myFrirnds5 = 
function(friends){
    var arr = friends.map(function(el)
{
    return this.name + ' is friends with ' + el;
}.bind(this));
  console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new
Person('John').myFrirnds5(friends);


function Person(name){
    this.name = name;
}


//ES6

Person.prototype.myFrirnds6= 
function(friends){
    var arr = friends.map(el =>
   ` ${this.name} is friends with ${el}`);
  console.log(arr);
}


 
new   Person('Mike').myFrirnds6(friends);    */ 

/*
//Lecture: Destructuring

//ES5
var john = ['John', 26];
var name=john[0];
var age = john[1];

//ES6
const [name, age] = ['John' , 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const{firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year){
    const age = new
    Date().getFullYear()- year;
    return[age,65- age];
}

const [age2,retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);


*/
/*
// Lecture: Arrays

const boxes =
document.querySelectorAll('.box');

//ES5

 var boxesArr5 =
 Array.prototype.slice.call(boxes);
 boxesArr5.forEach(function(cur){
    cur.style.backgroundColor =
    'dodgerblue';
 })

//ES6
const boxesArr6 = Array.from(boxes);
 Array.from(boxes).forEach(cur => 
    cur.style.backgroundColor='dodgerblue');

//ES5

for(var i = 0; i < boxesArr5.length; i++){

    if(boxesArr5[i].className === 'box blue'){
        continue;
    
    }

    boxesArr5[i].textContent = 'I changed to blue';
}

//ES6
for (const cur of boxesArr6){
    if (cur.className.includes('blue')){
        continue;
        
    }
    cur.textContent = 'I changed to blue';
}

//

var ages = [12, 17, 2, 21, 14, 11];

var full = ages.map(function(cur){
    return cur >= 18;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

*//*

// Lecture: Spread operator

function addFourAges(a, b, c, d){
    return a + b + c + d;
}

var sum1 = addFourAges(18, 23, 12, 21);
console.log(sum1);


//ES5
var ages = [18, 23, 12, 21];
var sum2 = addFourAges.apply(null,ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['Jane', 'Jane','Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);


const p = document.querySelector('p');
const boxes = document.querySelectorAll('.box');
const all = [p, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');

*/
/*
// Lecture: Rest parameters

//ES5
function isFullAge5(){
    //console.log(arguments);
    var argsArr5 =
   Array.prototype.slice.call(arguments);
   argsArr5.forEach(function(cur) {
    console.log((2016 - cur) >= 18);
    
   })
}
////isFullAge5(1990, 1999, 1965);
//isFullAge5(1190, 1999, 1965, 2016, 1987);

//ES5
function isFullAge6(...years){
  years.forEach(cur => console.log((2016 - cur) >= 18));
}
isFullAge6(1990, 1999, 1965, 2016, 1987);
*/
/*
//ES5
function isFullAge5(limit){
    console.log(arguments);
    var argsArr =
   Array.prototype.slice.call(arguments, 1);
   console.log(argsArr);

   argsArr.forEach(function(cur) {
    console.log((2016 - cur) >= limit);
    
   })
}
//isFullAge5(16, 1990, 1999, 1965);
//isFullAge5(1190, 1999, 1965, 2016, 1987);

//ES5
function isFullAge6(limit, ...years){
  years.forEach(cur => console.log((2016 - cur) >= limit));
}
isFullAge6(16, 1990, 1999, 1965, 2016, 1987);
*/

// Lecture: Default parameters
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality){

     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
     nationality === undefined ? nationality = 'India' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;

}
*//*/
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american'){

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;


}

var john = new SmithPerson('John',1990);
var emily = new SmithPerson('Emily',1998, 'Diaz','american');
*/
/*

// Lecture: Maps

 const question = new Map();
 question.set('question','What is the official name of the lateste major JavaScript version?');
 question.set(1, 'ES5');
 question.set(2, 'ES6');
 question.set(3,'ES2015');
 question.set(4,'ES7');
 question.set('correct', 3);
 question.set(true, 'Correct answer :0');
 question.set(false, 'Wrong, please try again!');

 console.log(question.get('question'));
 
// console.log(question.size);
 
 
 if(question.has(4)){
   // question.delete(4);
   console.log('Answer 4 is here');

 }

 //question.clear();

 //question.forEach((value, key)=> 
   //      console.log(`This is ${key}, and it's set to ${value}`));

 for (let [key, value] of 
    question.entries()){
       if (typeof(key) === 'number'){
            console.log(`Answer ${key}: ${value}`);
        }

    }
 
    const ans = parseInt(prompt('Write the correct answer'));
   console.log(question.get(ans === question.get('correct')));
*/
/*

// Lecture: Classes


//ES5
var Person5 = function(name,yearOfBirth, job){
    this.name = name
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear -
    this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');


//ES6
class Person6 {
    constructor (name, yearOfBirth, job){
        this.name = name
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear -
        this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        console.log('Hey there!');
    }
}


const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();*/


/*


//Lectures: Classes and Subclasses

//ES5
var Person5 = function(name,yearOfBirth, job){
    this.name = name
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear()-
    this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype =
Object.create(Person5.prototype);



Athlete5.prototype.wonMedal =
function(){
    this.medals++;
    console.log(this.medals);
}


var johnAthelete5 = new 
Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthelete5.calculateAge();
johnAthelete5.wonMedal();

*/
//ES6
/*

class Person6 {
    constructor (name, yearOfBirth, job){
        this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    }

    calculateAge(){
        const age = new Date().getFullYear() -
        this.yearOfBirth;
        console.log(age);
    }

  }

  class Athelete6 extends Person6{
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;    
    }
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
  }
  const johnAthelete6 = new Athelete6('John', 1990, 'swimmer', 3, 10);

  johnAthelete6.wonMedal();
  johnAthelete6.calculateAge();
  


*/
  // Coding Challenge

  class Element {
    constructor(name,buildYear){
        this.name = name;
        this.name = buildYear;
    }
  }

  class Park extends Element {
    constructor (name, buildYear, area, numTrees){
         super(name, buildYear);
         this.area = area;
         this.numTrees = numTrees;
    }

    
    treeDensity(){
        const density = this.numTrees /
        this.area;
        console.log(`${this.name} has a tree 
            density of ${density} trees per square km. `);
    }
  }


    class Street extends Element {
        constructor(name, buildYear, lenght, size){
            super(name, buildYear, );
            this.lenght = lenght;
            this.size = size;
        }
    

        classifyStreet (){
            const classification = new Map();
            classification.set(1, 'tiny');
            classification.set(2, 'small');
            classification.set(3, 'noemal');
            classification.set(4, 'big');
            classification.set(5, 'huge');
            console.log(`${this.name}, buld in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
        }
    }

    const allParks = [new Park ('Green Park', 1987, 0.2, 215),
        new Park('National Park', 1894, 2.8, 3541),
        new Park('Oak Paark', 1990, 0.4, 994)
   ];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.5),
    new Street('Sunset Boulevard', 1982,0.4, 445)
];

function calcAge(arr){
    const sum = arr.reduce((prev, cur, index) => prev + current, 0);
    //[3,5,6]
    return [sum, sum / arr.lenght];

}





function reportParks(p){
     console.log('-----PARKS REPORT-----');

     //Density
     p.forEach(el => el.treeDensity());

     //Average age 
     const ages = p.map(el => new Date().getFullYear() - el.buildYear);
     const [totalAge, avgAge] = calc(ages);
     console.log(`Our ${p.lenght} parks have an average of ${avgAge} years.`);


     // Which park has more than 1000 trees
     const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
     console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s){
console.log('-----STREETS REPORT-----');

//Total and average length of the town's streets
const [totalLength, avgLength] =
calc(s.map(el => el.lenght));
console.log(`Our ${s.lenght} streets have a total length of ${totalLength}
    km, with an average of ${avgLength} km.`);

//Classify sizes



s.forEach(st => st.classifyStreet());


}

reportParks(allParks);
reportStreets(allStreets);
   

  