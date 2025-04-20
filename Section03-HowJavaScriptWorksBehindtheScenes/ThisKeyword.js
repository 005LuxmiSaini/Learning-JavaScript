 // The this keyword

 //console.log(this);

 /*calculateAge(2006);

 function calculateAge(year){
    console.log(2025 - year);
    console.log(this);
 }
 */
 var jhon = {
    name:'Jhon',
    yearOfBirth: 2006,
    calculateAge: function(){
        console.log(this);
        console.log(2025 - this.yearOfBirth);
/*
        function innerFunction(){
            console.log(this);
        }
        innerFunction();*/
    }
 }

 jhon.calculateAge();

  var mike = {
    name: 'Mike',
    yearOfBirth: 1998
  };

  mike.calculateAge = jhon.calculateAge;
  mike.calculateAge();