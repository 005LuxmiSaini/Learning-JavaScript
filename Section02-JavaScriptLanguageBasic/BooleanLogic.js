var firstName = "Luxmi";
var age = 19;

 if (age < 13){
    console.log(firstName + " is a girl.");
 }else if (age >= 13 && age < 20){
    console.log(firstName + " is a teenager.");
 }else if (age > 20 && age <30){
   console.log(firstName + " is a young girl");
 }else {
    console.log(firstName + " is a woman.");
 }


 // The Ternary Operator and Switch Statements

  var firstName = "Luxmi";
  var age = 20;
//ternary Operator

  age >= 18 ? console.log(firstName + " drinks beer.")
 : console.log(firstName + " drinks Juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

//Switch Statement
var job = "Cheif";
switch (job){
   case "teacher":
   console.log(firstName + " teaches kids how to code.");
   break;
   case "driver":
   console.log(firstName + " drives an uber in India.");
   break;
   case "designer":
   console.log(firstName + " designs a beutiful websites.");
   break;
   default:
   console.log(firstName + " does something else.");
}

var age = 45;
switch(true){
   case age < 13:
      console.log(firstName + " is a girl.");
      break;
   case age >= 13 && age < 20 :
      console.log(firstName + " is a teenager.");
      break;
   case age >= 20 && age < 30:
      console.log(firstName + " is a young girl.");
      break;
   default:
      console.log(firstName + " is a woman.");
}

