// Objects.Create

var  personProto = {
    calculateAge: function(){
        console.log(2016 - this.yearOfBirth); 
      }
};

var jhon = Object.create(personProto);
jhon.name = 'Jhon';
jhon.yearOfBirth =1998;
jhon.job = 'teacher';

var jane = Object.create(personProto,
    {
        name:{ value: 'Jane'},
        yearOfBirth: { value: 1969},
        job: { valuen: 'designer'}
    }
);


