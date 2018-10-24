// Object.create method


var personProto = {
    calcAge : function(){
        console.log( 2018 - this.ageofBirth);
    }
}

//First 

var john = Object.create(personProto);
john.name = 'John';
john.ageofBirth = 1980;
john.job = 'developer';

//Second

var julia = Object.create( personProto, {
        name:{value:'Julia'},
        ageofBirth: {value: 1980},
        job: {value: 'Developer'}
});
