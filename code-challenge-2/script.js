var John = {
    fullName: 'Smith',
    mass: 85,
    height: 1.80,
    calcBMIJ: function(){
        this.BMIj = this.mass / this.height^2;
    }
};

var Mark = {
    fullName: 'Ivarson',
    mass: 120,
    height: 1.98,
    calcBMIM: function(){
        this.BMIm = this.mass / this.height^2
    }
};


John.calcBMIJ()


Mark.calcBMIM()

console.log(John);
console.log(Mark);

if ( John.BMIj > Mark.BMIm ) {
    console.log('John has the bigger BMI than Mark');
} else {
    console.log('Mark has bigger BMI than John.');
};
