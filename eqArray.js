const eqArrays = function(a , b ,c) {
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
  if (array1 === array2 ) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
  else {
    console.log(`🛑🛑🛑Asseration Passed: ${array1} !== ${array2}`);
  }
  return array1;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
