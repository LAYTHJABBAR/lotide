const countOnly = function(item, itemsToCount) {
  var result = {};
  for (i =0 ; i< firstNames.length; i++){
    if (itemsToCount[firstNames[i]]) {
        
        if (!result[firstNames[i]])
      {
        result[firstNames[i]] = 1
      } else {
       result[firstNames[i]] +=1
      }
    }
  }
      console.log(result)
    return result;    
} 

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑🛑🛑Asseration Failed: ${actual} !== ${expected}`);
  }
  return actual;
};
 
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];
const conditions = { "Jason": true, "Karima": true, "Fang": true, "Kavith": false }
const result1 = countOnly(firstNames, conditions);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
