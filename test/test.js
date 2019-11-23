const assert = require('assert');
let pathToFuncitons = process.env.TEST_SOLUTIONS ? "../solutions.js" : '../problems.js'
const fns = require(pathToFuncitons)

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

describe('#findInArray()', function() {
    it('handles base cases', function() {
        assert.strictEqual(fns.findInArray([],'x'), false)
        assert.strictEqual(fns.findInArray(['y'],'x'), false)
        assert.strictEqual(fns.findInArray(['x'],'x'), true)

    });
    it('determines inclusion/exclusion', function() {
        assert.strictEqual(fns.findInArray(['x', 'y'],'x'), true)
        assert.strictEqual(fns.findInArray(['y', 'x'],'x'), true)
        assert.strictEqual(fns.findInArray(['xx', 'xx'],'x'), false)
        assert.strictEqual(fns.findInArray(['a','b','c','d', 'e', 'f', 'g'],'x'), false)
        assert.strictEqual(fns.findInArray(['a','b','x','d', 'e', 'f', 'g'],'x'), true)
    });
});

describe('#multipliction()', function() {
    it('handles base cases', function() {
        assert.equal(fns.multiplication(0,0), 0)
        assert.equal(fns.multiplication(0,1),0)
        assert.equal(fns.multiplication(1,0),0)
        assert.equal(fns.multiplication(1,1),1)
        assert.equal(fns.multiplication(1,10),10)
        assert.equal(fns.multiplication(10,1),10)


    });
    it('multiplies', function() {
        assert.equal(fns.multiplication(10,10),100)
        assert.equal(fns.multiplication(50, 2),100)
        assert.equal(fns.multiplication(100, 100),10000)
        assert.equal(fns.multiplication(23, 4),92)
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

describe('#coinflips()', function() {
    it('calculates coin flips', function() {
        assert.deepEqual(fns.coinFlips(1).sort(), ["T", "H"].sort())
        assert.deepEqual(fns.coinFlips(2).sort(), ["TT", "HH", "TH", "HT"].sort())
        assert.deepEqual(fns.coinFlips(3).sort(), 
        ["TTT", "TTH", "THT", "THH", "HTT", "HTH", "HHT", "HHH" ].sort())
    });
    
});
describe('#coinflips()', function() {
    it('calculates coin flips', function() {
        assert.deepEqual(fns.coinFlips(1).sort(), ["T", "H"].sort())
        assert.deepEqual(fns.coinFlips(2).sort(), ["TT", "HH", "TH", "HT"].sort())
        assert.deepEqual(fns.coinFlips(3).sort(), 
        ["TTT", "TTH", "THT", "THH", "HTT", "HTH", "HHT", "HHH" ].sort())
    });
});
describe('#letterCombinations()', function() {
    it('handles base case', function() {
        assert.deepEqual(fns.letterCombinations(["a"]),["a"])
    });
    it('gets letter combinations', function() {
        assert.deepEqual(
            fns.letterCombinations(["a","b","c"]).sort(),
            ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"].sort()
            )
    });

});
