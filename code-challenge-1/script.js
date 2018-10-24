Compare the BMI of John and Mark.

var massMark = 60
var massJohn = 65
var heightMark = 1.85
var heightJohn = 1.90
var BMIMark
var BMIJohn

BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);

BMIJohn = massJohn / heightJohn^2;
console.log(BMIJohn);

var highterBMI = BMIMark > BMIJohn ;


console.log( 'Does Mark has higher BMI than John does?' + highterBMI);
