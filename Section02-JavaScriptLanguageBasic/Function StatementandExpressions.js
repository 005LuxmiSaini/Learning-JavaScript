//Function Statement and Expressions

//Function declaration 
// function whatDoYouDo(job, firstName){}

// Function expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case "teacher":
          return firstName + " teaches kids how to code ";
        case "driver":
            return firstName + " drives a cab in India.";
        case "designer":
            return firstName + " designs beautiful websites.";
        default:
            return firstName + " anything else.";
    }
}

console.log(whatDoYouDo("designer", "Jhon"));
console.log(whatDoYouDo("teacher", "Mark"));
console.log(whatDoYouDo("driver", "Luxmi"));

//these are function expression
