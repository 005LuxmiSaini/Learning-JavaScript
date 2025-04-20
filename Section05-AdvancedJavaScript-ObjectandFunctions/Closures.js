// Closures

function retirement(retirementAge){
    var a = 'years left until retirement.';
    return function(yearOfBirth){
        var age = 2025 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIndia = retirement(60);

retirementUS(2006);
retirementIndia(2006);
retirementGermany(2006);



//retirement(66)(2005);
function interviewQuestion(job){
    return function(name){
        if (job === 'designer'){
            console.log(name + ', can you please explain what Ux design is?');
        }else if (job === 'teacher'){
            console.log('What subject do you teach,' + name + '?');
        }else{
            console.log('Hello ' + name + ',what do you do?');
        }
    }
}

interviewQuestion('teacher')('jhon');