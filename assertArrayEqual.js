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
    console.log(`🛑🛑🛑Asseration Passed: ${array1} !== ${array2}`);
  }
  return array1;
};

assertEqual([1, 2, 3], [1, 2, 3]);
