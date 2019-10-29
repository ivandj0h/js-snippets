/* 
all()

This snippet returns true if the predicate function returns true for all elements in a collection and false otherwise. 
You can omit the second argument fn if you want to use Boolean as a default value.
*/
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true


