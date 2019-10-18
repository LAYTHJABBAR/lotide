
const map = (arr, callBack) => {
  let result = [];
  for (let item of arr) {
  	console.log(item);
    result.push(callBack(item));
  } 
  return result;
  
};

const upperCase = (word) => {
  return word.toUpperCase();
};

const firstChar = (word) => {
  return word[0];
};

const words = ["ground", "control", "to", "major", "tom"];


const chkLength = (array1, array2) => {
	let chkLength = false;
		array1.length === array2.length ? chkLength = true : chkLength = false
 			 return chkLength;
};



const eqArrays = function(array1 ,array2 ) {
  if (array1.length !== array2.length){
    return false
  } 
  else {
    for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
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



 assertEqual(map(['abc', 'DEF', 'defh'], word => word.length), [3,4,4]);
 assertEqual(map(['abc', 'def', 'defh'], upperCase), ['ABC', 'DEF', 'DEFH']);
 assertEqual(map(['abc', 'FTE', 'defh'], firstChar),['string', 'string', 'string']);
 