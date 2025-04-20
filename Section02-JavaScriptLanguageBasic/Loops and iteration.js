

//Loops and iteration

//for loop
var i = 0;
for (i = 0; i < 20; i+= 2){
    console.log(i);
}

var jhon = [ 'Jhon','Smith', 1985, 'designer',false,'design'];
for (var i = 0; i < 3; i++){
    console.log(jhon[i]);
}

//while loop
var i = 0;
while (i < jhon.length){
    console.log(jhon[i]);
     i++;  
}

//Continue and break statements
var jhon = [ 'Jhon','Smith', 1985, 'designer',false,'design'];
for (var i = 0; i < jhon.length; i++){
    if (typeof jhon[i] !== 'string')continue;
    console.log(jhon[i]);
}

for (var i = 0; i < jhon.length; i++){
    if (typeof jhon[i] !== 'string')break;
    console.log(jhon[i]);
}

//Looping backwards
for (var i = jhon.length - 1; i >= 0; i--){
    console.log(jhon[i]);
}
