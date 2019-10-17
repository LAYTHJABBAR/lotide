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
}};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(ab, ba)); // => true
  
const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(ab, abc)); // => false
  
assertEqual(assertEqual(ab, ba), true);
assertEqual(assertEqual(ab, abc), false);