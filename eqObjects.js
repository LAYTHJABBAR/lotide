const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  //take array inputs, check for same length
  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false
  }
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
eqObjects(ab, ba); // => true
const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(ab, ba), true);

