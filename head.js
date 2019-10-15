const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑🛑🛑Asseration Passed:  ${actual} !== ${expected}`);
  }
  return actual;
};

function head (array){
	return array[0];
}


assertEqual(head([5,6,7]),5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
