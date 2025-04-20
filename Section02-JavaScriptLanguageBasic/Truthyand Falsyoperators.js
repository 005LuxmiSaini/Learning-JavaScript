// Truthy and Falsy values and Equality operators

// falsy values; undefined, null, 0,'', NaN
// truthy values; Not falsy values

var height;//undefined

height = 23;// defined
 
if (height || height == 0){
    console.log("Variable is defined");
} else { 
    console.log("Variable has not been defined");
}

//Equality operators
if (height === '23'){
    console.log("The == operator does type coercion!");
}