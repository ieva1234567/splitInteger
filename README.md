# splitInteger
Node package for dividing an integer into a fixed number of even or almost even integers.

Implemented based on user65203 solution in 
https://math.stackexchange.com/questions/1791795/dividing-an-integer-into-a-fixed-number-of-integers/1791823#1791823?newreg=5fd1fc55a01d45c7a26fcb385170f65d

How to launch node package locally ?
1. cd into package directory and run "npm link"
2. cd unto project directory from which package should be used and run "npm link split-integer-into-almost-even-integers"


Usage:
const splitInteger = require('split-integer-into-almost-even-integers');
console.log(splitInteger(10,1));


