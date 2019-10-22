# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @laythjabbar/lotide`

**Require it:**

`const _ = require('@laythjabbar/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* head: Return the first element of the input array.

* tail: Returns a new array in which the elements is the whole 
  original  array removing the first element from it

* middle: Return a new array in which the element(s) is the element of the middle index. 

* assertArraysEqual: indicating whether or not two arrays are equal

* assertEqual: evaulate the value of two primitive types value and return boolean value based on the result

* assertObjectsEqual: indicating if  two objects are equal

* countLetters: The return vlaue is an object containing the count of all the letters

* countOnly: take in an array and an object and count the number of occurance of the elements in the array. The return value is an object contianing the count of only the elements that are passed with the value true in the input object.

* eqArray: evaulate whether or not two arrays are equal to each other. Two arrays are considered identical if each element in the same index has the same value. Return true or false based on the result

* eqObjects: evaulate whether or not two Objects are equal to each other. Two objects are considered identical if each property-key with the same name has the same value. Return true or false based on the result

* findKey: accept an object as the 1st argument and a callback as the 2nd argument. Returns the first property key that the call back evaulate as true. Return undefined if no such key is found

* findKeyByValue: Returns the first property key that matches the input value, return undefined if no such key is found

* letterPositions: Return all the indices (zero-based positions) in the string where each character is found.

* map: Returns a new array in which the value of each element is the result of the callback function

* without: Without return a subset of a given array, removing unwanted elements.

* takeUntil: Returns a slice of the array with elements taken from the beginning, stop only if callBack returns true. Callback should only be provided one value -> item of array

* without: Without return a subset of a given array, removing unwanted elements.
