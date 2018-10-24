// How to pass a function as an argument


var years = [ 1993, 2004, 1995, 1980, 2010 ];


var calcArray = function(arr, fn){
    var arrRess = [];
    for ( i=0; i<years.length; i++){
arrRess.push(fn(arr[i]));
    }
    return arrRess;
}

var calcage = function(el){
    return 2018 - el;
}

var ages = calcArray(years, calcage);
console.log(ages);
