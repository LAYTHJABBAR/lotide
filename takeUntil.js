const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
 const takeUntil = function(array, callback) {
 	let result =[];
 	for (let item of array){
 		if (callback(item)){
 		  return result
 	} else {
      result.push(item)  
 	}
  
}}

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

assertEqual(takeUntil(data2, x => x === ','),["I've", "been", "to", "Hollywood"]);
assertEqual(takeUntil(data1, x => x < 0),[1, 2, 5, 7, 2]);