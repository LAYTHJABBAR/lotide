const findKeyByValue = function (bestTVShowsByGenre , value){
for (const typeOfM in bestTVShowsByGenre){
	if ( value === bestTVShowsByGenre[typeOfM]){
		return typeOfM
	}
  }
  }
  const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
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
  if (array1 === array2 ) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
  else {
    console.log(`🛑🛑🛑Asseration Failed: ${array1} !== ${array2}`);
  }
  return array1;
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "blue is the wormest color"), "comedy");