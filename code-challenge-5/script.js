/*
This time, John and his family went to 5 different restaurants. 
The bills were 124, 48, 268, 180 and 42.
John likes to tip 20% of the bill when the bill is less
than 50, 15% when the bill is between 50 and 200, and 10% 
if the bill is more than 200.

Implement a tip calculator using objects and loops:
1.Create an object with an array for the bill values
2.Add a method to calculate the tip
3.This method should include a loop to iterate over all the paid 
bills and do the tip calculations
4.As an output, create 1) a new array containing all tips, and
 2) an array containing final paid amounts (bill+tip). 
HINT Start with two empty arrays as properties and then fill them up in the loop.
*/


var John = {
    fullName: 'John Smith',
    bills:[124, 48, 268, 180, 42],
    
    calcTips: function(){
        this.tips = [];
        this.finalPay = [];
        for (var i = 0; i<this.bills.length; i++){
            var persantage;
            var bill = this.bills[i];
            if ( bill < 50) {
                persantage = .2;
            } else if ( bill >=50 && bill<200){
                persantage = 1.5;
            } else {
                persantage = .1;
            }

            this.tips[i] = bill * persantage;
            this.finalPay[i] = bill + bill * persantage;
        }

    }
}

John.calcTips();
console.log(John);





var matt = {
    name: 'Matt Potter',
    age: 23,
    bills: [150, 59, 120, 190, 400 ],
    calcTips: function(){
        this.tips = []
        this.finalpays = []
        for (i=0; i<this.bills.length; i++ ){
            if (this.bills[i]<50){
                persantage = 0.2;
            } else if(this.bills[i]>50 && this.bills<100){
                persantage = 0.15;
            } else  {
                persantage = 0.5;
            }
            
            this.tips[i]=this.bills[i] + persantage;
            this.finalpays[i]=this.bills[i]+this.tips[i];
    }
}

}

matt.calcTips();
console.log(matt);


calcAverage = function () {
    sum = 0
    for (i = 0; i<finalpays.length; i++){
      var  sum = 0
        sum = sum + finalpays[i]
    }
}
John.calcAverage();
