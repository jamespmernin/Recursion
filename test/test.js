const assert = require('assert');
const fns = require('../problems.js')

describe('#factorial()', function() {
    it('handles base case', function() {
        assert.equal(fns.factorial(1), 1)
    });
    it('calculates factorials', function() {
        assert.equal(fns.factorial(5), 120)
        assert.equal(fns.factorial(8), 40320)

    });
});

describe('#fibonacci()', function() {
    it('handles base cases', function() {
        assert.equal(fns.fibonacci(1), 1)
        assert.equal(fns.fibonacci(2), 1)

    });
    it('calculates fibonacci numbers', function() {
        assert.equal(fns.fibonacci(5), 5)
        assert.equal(fns.fibonacci(10), 55)
        assert.equal(fns.fibonacci(30), 832040)
    });
});

describe('#reverseString()', function() {
    it('handles base cases', function() {
        assert.equal(fns.reverseString(""),"")
        assert.equal(fns.reverseString("x"), "x")

    });
    it('reverses strings', function() {
        assert.equal(fns.reverseString("abcdefg"), "gfedcba")
        assert.equal(fns.reverseString("123"), "321")
    });
});
describe('#sumArray()', function() {
    it('handles base case', function() {
        assert.equal(fns.sumArray([1]),1)
    });
    it('sums array values', function() {
        assert.equal(fns.sumArray([1,1]),2)
        assert.equal(fns.sumArray([1,2,3,4,5]),15)
    });
});

describe('#findMax()', function() {
    it('handles base case', function() {
        assert.equal(fns.findMax([1]),1)
    });
    it('finds max value', function() {
        assert.equal(fns.findMax([1,1]),1)
        assert.equal(fns.findMax([2,1]),2)
        assert.equal(fns.findMax([1,2]),2)
        assert.equal(fns.findMax([1,4,2,5,6,3,12,1]),12)

    });
});

