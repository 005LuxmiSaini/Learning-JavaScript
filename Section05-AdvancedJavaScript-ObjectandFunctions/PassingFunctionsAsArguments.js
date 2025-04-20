// Lectures: Passing functions as arguments 

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
function isFulAge(el){
    return el >= 18;
}
function maxHeartRate(el){
    if (el >= 18 && el <= 81){
        return Math.round(206.9 -(0.67 * el));
    } else {
        return -1;
    }
}




var ages =arrayCalc(years,calculateAge);
var fullAge = arrayCalc(ages,isFulAge);
var rates = arrayCalc(ages,maxHeartRate);

console.log(ages);
console.log(rates);