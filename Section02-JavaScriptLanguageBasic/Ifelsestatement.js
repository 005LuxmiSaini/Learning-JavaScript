var firstName = "Luxmi";
var civilStatus = "single";

if (civilStatus === "married") {
    console.log(firstName + " is married");
} else {
    console.log(firstName + " will hopefully marry soon");
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + " is married");
} else {
    console.log(firstName + " will hopefully marry soon");
}


var massMark = 85;//kg
var heightMark = 1.59;//meters

var massJohn = 90;
var heightjhon = 1.98;

var BMIMark = massMark/(heightMark * heightMark);
var BMIJohn = massJohn/(heightjhon * heightjhon);

if (BMIMark > BMIJohn){
    console.log("Mark\s Bmi is higher than John\s.");
}else {
    console.log("john\'BMI is higher than Marks\s\'s.");
}
