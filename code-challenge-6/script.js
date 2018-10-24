/*
John and his family  went on a holiday and went on 3 different restaurants. The bills were  124£, 48£, 268£.
To tip the waiter a fair amount , John created a simple tip calculator (function). 
-He likes to tip 20% of the bill with less than 50£
-15% when is between 50£ and 200£
-10% when is more than 200£.

Create 2 arrays:
-containing all 3 tips(one for each bill)
-containing all 3 final paid amounts(bill+tip)

*/ 


var calcuLator = function(bill, Perce) {

switch (true){
    case bill < 50 : 
    Percenew = Perce / 100 ;
    tip1 = bill * Percenew;  
    finalPay1 = bill + tip1;  

break;
    case bill > 50 && bill < 200 :
    Persenew = Perce / 100 ;
    tip2 = bill * Persenew;
    finalPay2 = bill + tip2;
break;
    case bill > 200 :
    Persenew = Perce / 100 ;
    tip3 = bill * Persenew;
    finalPay3 = bill + tip3;
break;



}




}

calcuLator(124, 15);
calcuLator(48, 20);
calcuLator(268, 10);




var tips = [tip1, tip2, tip3]
var finalPays = [finalPay1, finalPay2, finalPay3]
console.log(tips, finalPays);
