const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅, Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑, Assertion failed: ${actual} !== ${expected}`);
  }
        
};
  
const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (var i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    
  } else {
    return false;
  }
    
  return true;
    
    
};
 
const eqObjects = function(object1, object2) {
    const key1 = Object.keys(object1);
    const key2 = Object.keys(object2);
    if (key1.length === key2.length) 
    {
        for (let Ind in object1)
         { 
            if (typeof object1[Ind] !== typeof object2[Ind]) 
            {
                return false
                }
                    if ((Array.isArray(object1[Ind]) && Array.isArray(object2[Ind])))
                    {

            if (object1[Ind].length !== object2[Ind].length )
            {
                return false
            }
if (eqArrays (object1[Ind], object2[Ind] )=== false)
{
return false
}
}}
return true
}}
; 


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
       
  } else {
   console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }


};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true
  
const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false
  
assertEqual(assertObjectsEqual(ab, ba), true);
assertEqual(assertObjectsEqual(ab, abc), false);