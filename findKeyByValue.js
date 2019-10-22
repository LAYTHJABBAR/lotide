const eqArrays = require("./eqArrays")
const assertEqual = require("./assertEqual")

const findKeyByValue = function (bestTVShowsByGenre , value){
for (const typeOfM in bestTVShowsByGenre){
	if ( value === bestTVShowsByGenre[typeOfM]){
		return typeOfM
	};
  };
  };
module.exports = findKeyByValue;
