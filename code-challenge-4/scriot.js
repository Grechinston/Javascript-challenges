/*
Mark's family also went on a holiday, going to 4 different restaurants. The bills
were 77, 375, 110, 45.
Mark likes to tip 20% of the bill when the bill is less than 100, 10% when the bill 
is between 100 and 300 and 25% if the bill is more than 300.

-Implement the same fuctionality as before this time usin Mark's tipping rules
-Create a function(not a method) to calculate average of given array, and in each iteration
store the current sum in a variable(starting from o ). After you have the sum of the 
array, divide it by the number of elements in it(that's how ou calculate the average).
-Calculate the average tip for each family
-Log to the console which family paid the highest tips on average.
*/

var markBills = [77, 375, 110, 45];

for ( i = 0 ; i < markBills.length; i++) {
    if (markBills[i] < 100) {
       tip = 0.2 * markBills[i]
    }  else if ( markBills[i] > 100 && markBills[i] < 300) {
       tip = 0.1 * markBills[i]
    } else if ( markBills[i] > 300) {
       tip = 0.25 * markBills[i]
    }
    console.log(tip);
}

var tipList = [15.4, 93.75, 11, 9];
var averagePay = 0;
var calcTip = function() {
    
       averagePay = ( tipList[0] + tipList [1] + tipList[2] + tipList[3]) / 4
       console.log(averagePay);
}
