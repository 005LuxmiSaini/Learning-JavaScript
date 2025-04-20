// Functions


function calculateAge(birthYear){
    return 2025 - birthYear;
}
 
var ageLuxmi = calculateAge(2006);
var ageLux = calculateAge(2005);
var ageman = calculateAge(1958);
var ageaman = calculateAge(2000);
console.log(ageLuxmi, ageLux, ageman, ageaman);


function yearUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0){
        console.log(firstName + " retires in " + retirement + " years.");
    } else {
        console.log(firstName + " is already retired.");
    }
    
}

yearUntilRetirement(2006, "Luxmi");
yearUntilRetirement(2005, "Lux");
yearUntilRetirement(1958, "man");
yearUntilRetirement(2000, "aman");

function myFunction(){
    console.log("welcome to apna college");
    console.log("we are learning JS");
}

myFunction();
myFunction();

