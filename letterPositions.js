const letterPositions = function(sentence) {
  const noSpace = sentence 
  console.log(noSpace)
  const results = {};
  for (let i = 0; i < noSpace.length; i++) {
    if (!noSpace[i].match(' ')){ 
      if (!results[noSpace[i]]) 
        results[noSpace[i]] = [];
      
      results[noSpace[i]].push(i);
    }
  }
  console.log(results)
  return results;
};
 
const eqArrays = function(a , b ) {
  if (a.length !== b.length){
    return false
  } 
  else {
    for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
  }}
return true
}}
const assertEqual = function(array1, array2) {
  const match = eqArrays(array1,array2)
  if ( match) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
  else {
    console.log(`🛑🛑🛑Asseration failed: ${array1} !== ${array2}`);
  }
  return array1;
};

const sentence = letterPositions("lighthouse in the house");
 assertEqual(sentence["l"],[0] );
 assertEqual(sentence["i"], [1,11] );
 assertEqual(sentence["g"],[2] );
 assertEqual(sentence["h"],[3,5,15,18] );
 assertEqual(sentence["t"],[4,14] );
 assertEqual(sentence["o"],[6,19] );
 assertEqual(sentence["u"],[7,20] );
 assertEqual(sentence["s"],[8,21] );
 assertEqual(sentence["e"],[9,16,22] );
 assertEqual(sentence["n"],[12] );
 