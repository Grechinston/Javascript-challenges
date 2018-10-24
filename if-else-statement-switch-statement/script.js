var averJohnteam;
var averMiketeam;


averJohnteam = (89 + 120 + 103) / 3 ;
averMiketeam = (116 + 94 + 123) / 3 ;
averMaryteam = (97 + 134 + 105) / 3 ;


console.log(averJohnteam);
console.log(averMiketeam);
console.log(averMaryteam);
 
// if / else
 
if (averJohnteam > averMiketeam && averJohnteam > averMaryteam ) {
    console.log('John\' team is better ');

}
else if(averMiketeam > averJohnteam && averMiketeam > averMaryteam) {
    console.log ('Mikes\' team is better ' );
}
else {
    console.log ('Mary is the champion');
}

//Switch statements

switch (true) {
        case averJohnteam > averMiketeam && averJohnteam > averMaryteam :
        console.log('John has a better team');
        break;
        case averJohnteam < averMiketeam && averMiketeam > averMaryteam :
        console.log('Mike has a better team');
        break;
        case averMaryteam > averJohnteam && averMaryteam > averMiketeam :
        console.log('Mary is the winner');
        break;
        default:
        console.log('its a draw');
} 



