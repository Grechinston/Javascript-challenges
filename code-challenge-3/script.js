
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




var billList = [ 124, 48, 268, 180, 42 ];

for ( i=0 ; i < billList.length; i++) {
    console.log(billList[i] + ' is the bill payed for one of the restaurants. ');
}

for ( i = 0; i < billList.length; i++ ) {
    if ( billList[i] < 50 ) {
        tip = 0.2 * billList[i]
    } else if ( billList[i] > 50 && billList[i] < 200 ) {
        tip = 0.15 * billList[i]
    } else if( billList[i] > 200 ) {
        tip = 0.1 * billList[i]
        
    }
    
    
}

var tips = [18.59, 9.6, 26.8, 27, 8.4];

for ( i = 0; i < tips.length; i++) {
    console.log(tips[i] + ' is the amount of the tip for one of the restaurants');
    
}

for (  i = 0; i < billList.length && i < tips.length; i++  ) {
    finalPay = billList[i] + tips[i]
    
}

var finalPay = [142.59, 57.6, 294.8, 207, 50.4];

for ( i = 0;  i < finalPay.length ; i++ ) {
    console.log(finalPay[i] + ' is the final pay for one of the restaurants. ');

}
