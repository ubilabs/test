// pad a value with leading zeros
function zeroFill( number, width )
{
 width -= number.toString().length;
 if ( width > 0 )
 {
   return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
 }
 return number + ""; // always return a string
}


/*

Code review:

- line 2, what is number? what is width?
- line 2, method name does not fully conclude what happends in itself or write a more explaining comment.
- line 3 would open method after parameters in line 2.
- line 4-8 styleguide. Move method body to the right.
- line 7, actually never seen something like that. What is '/\./.test'?
- 

*/


// your solution:

/*
@Method zeroFillIntergerAsString
This method aims to return a String, wich is constructed by to intergers. 
first one beeing 'numberstoZeroFill' and lenghOfZeroFilling.
@param 'numberToZeroFill' the number we want to turn into a string with X leading Zeros
@param 'lenghOfZeroFilling' the total lengh of the string we want to return.
@return String 'zeroFilledNumber'
*/
function zeroFillIntergerAsString(numberToZeroFill, lenghOfZeroFilling){

    //.padStart() method is used to pad a number with leading zeros. It takes two parameters,
    // the first one is the total length of the string, and the other one is the string or character the user wants to use for padding.
    let zeroFilledNumber = numberToZeroFill.toString().padStart(lenghOfZeroFilling,'0');

    return zeroFilledNumber;  
}