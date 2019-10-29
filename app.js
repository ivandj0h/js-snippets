/**
*
*   all()
*
*   This snippet returns true if the predicate function returns true for all elements in a collection and false otherwise. 
*   You can omit the second argument fn if you want to use Boolean as a default value.
*/
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true

/**
*
*   allEqual()
*
*   This snippet checks whether all elements of the array are equal.
*/

const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true

/**
*
*   approximatelyEqual()
*
*   This snippet checks whether all elements of the array are equal.
*/

const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;
approximatelyEqual(Math.PI / 2.0, 1.5708); // true