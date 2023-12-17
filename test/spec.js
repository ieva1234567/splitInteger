const splitInteger = require('..');
const assert = require('assert')

assert.deepEqual(splitInteger(10,1), [10]);
assert.deepEqual(splitInteger(2, 2), [1,1]);
assert.deepEqual(splitInteger(20,5), [4,4,4,4,4]);
assert.deepEqual(splitInteger(10,4), [2, 2, 3, 3]);
assert.deepEqual(splitInteger(7,4), [1, 2, 2, 2]);
assert.deepEqual(splitInteger(10,8), [1, 1, 1, 1, 1, 1, 2, 2]);
assert.deepEqual(splitInteger(20,6), [3,3,3,3,4,4]);
assert.deepEqual(splitInteger(21,6), [ 3, 3, 3, 4, 4, 4 ]);

console.log(`\u001B[32m✓\u001B[39m Tests passed`);