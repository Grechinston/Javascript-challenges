//Constructor Function

var Person = function(name, yearofBirth, job) {
    this.name = name;
    this.yearofBirth = yearofBirth;
    this.job = job;

}
//Constructor prototype


Person.prototype.calcAge = function(){
    console.log( 2017 - this.yearofBirth );

}

Person.prototype.lastName = 'Ivarson' ;

var John = new Person ('John', 1950, 'Developer');
var Julia = new Person('Julia', 1945, 'Doctor');



John.calcAge();
Julia.calcAge();

console.log(John.name, John.lastName);
console.log(Julia.name, Julia.lastName);
