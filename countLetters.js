
const countLetters = function(string) {
  const noSpace = string.split(' ').join('');
  console.log(noSpace)
  const letterCounter = {};

  for (const letter of noSpace) {
    if (!letterCounter[letter]) {
    letterCounter[letter] = 1;
}
  else {
       letterCounter[letter] +=1
      }
  }console.log(letterCounter)
  return letterCounter;
};




const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑🛑🛑Asseration Failed: ${actual} !== ${expected}`);
  }
  return actual;
};

const string = countLetters("laa yth");
assertEqual(string["l"],1 );
assertEqual(string["a"],1 );
assertEqual(string["y"],1 );
assertEqual(string["t"],1 );
assertEqual(string["h"],1 );
