

var x = [ 5, 3, 4, 1, 2 ];

for ( i = 0;  i <= x.length;  i ++ ){
    for( j = 0; j < i; j++ ){

    if ( x [ i ] < x [ j ] ){
        var y = x [i] ;
        x [i] = x [j] ;
        x [j] = y
    } 
        
    }
        
    }
console.log( x );

 
