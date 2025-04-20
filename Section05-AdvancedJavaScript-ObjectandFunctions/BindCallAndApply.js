var jhon = {
    name: 'Jhon',
    age: 26,
    job: 'teacher',
     presentation: function(style,timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +
            this.name + ', I\'m a' +
            this.job + 'and I\'m ' +
            this.age + ' years old.' 
            );
        }else if (style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + 'I\'m ' +
                this.name + ', I\'m a' +
                this.job + 'and I\'m ' +
                this.age + ' years old. Have a nice ' + timeOfDay + '.'
                );
        }
     }
};

var emily = {
    name: 'Emily',
    age:45,
    job:'deigner'
};

jhon.presentation('formal','morning');

jhon.presentation.call(emily,'friendly','afternoon');

/*
jhon.presentation.apply(emily,['friendly','afternoon']);
*/

var jhonfriendly = jhon.presentation.bind(jhon,'friendly');

jhonfriendly('morning');
jhonfriendly('night');

var emilyFormal = jhon.presentation.bind(emily,'formal');
emilyFormal('afternoon');



var years = [1999, 1995, 1978,2006,1994];

function arrayCalc(arr, fn){
     var arrRes = [];
     for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
     }
     return arrRes;
}

function calculateAge(el){
    return 2025 - el;
}
function isFulAge(el,limit){
    return el >= limit;
}

var ages = arrayCalc(years,calculateAge);

var fullJapan = arrayCalc(ages,isFulAge.bind(this,20));
console.log(ages);
console.log(fullJapan);