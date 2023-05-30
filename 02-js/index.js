// pad a value with leading zeros
function zeroFill( number, width )
{
 width -= number.toString().length;
 if ( width > 0 )
 {
   return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + ber;
 }
 return number + ""; // always return a string
}


/*

Code review:

- 
- 
- 

*/


// your solution:
