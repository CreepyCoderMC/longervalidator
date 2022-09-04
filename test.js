import valueIsLonger from './longervalidator.js';

var array1 = [ 1 , 2 , 3 , 4 , 5 ];
var array2 = [ 1 , 2 , 3 , 4 ];

console.log( "Testing Condition  1 Passed = " + !valueIsLonger( "Hallo"  , "world"          ) );
console.log( "Testing Condition  2 Passed = " + valueIsLonger(  "Hallo " , "world"          ) );
console.log( "Testing Condition  3 Passed = " + !valueIsLonger( "Hallo"  , " world"         ) );
console.log( "Testing Condition  4 Passed = " + !valueIsLonger( "Hallo"  , "world"  , false ) );
console.log( "Testing Condition  5 Passed = " + valueIsLonger(  "Hallo " , "world"  , false ) );
console.log( "Testing Condition  6 Passed = " + !valueIsLonger( "Hallo"  , " world" , false ) );
console.log( "Testing Condition  7 Passed = " + valueIsLonger(  "Hallo"  , "world"  , true  ) );
console.log( "Testing Condition  8 Passed = " + valueIsLonger(  "Hallo " , "world"  , true  ) );
console.log( "Testing Condition  9 Passed = " + !valueIsLonger( "Hallo"  , " world" , true  ) );
console.log( "Testing Condition 10 Passed = " + valueIsLonger(  array1   , array2           ) );
console.log( "Testing Condition 11 Passed = " + !valueIsLonger( array1   , array1           ) );
console.log( "Testing Condition 12 Passed = " + !valueIsLonger( array2   , array1           ) );