JS Array Methods
===

```
// Map:
//===
// The map() method creates a new array with the results 
// of calling a provided function on every element in the calling array.

// map(currentValue, index, array)

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]


// Reduce:
//===
// The reduce() method applies a function against an accumulator and each element 
// in the array (from left to right) to reduce it to a single value.

// arr.reduce(callback[, initialValue])

var total = [0, 1, 2, 3].reduce(function(sum, value, i) {
  return sum + value;
}, 0);
// total is 6

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b, i) {
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]
```

// filter

// ES6 Set 

// lastIndexOf

// split

// charCodeAt

// ... operator
```