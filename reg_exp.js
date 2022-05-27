// Regular Expressions in JS

// two ways to define regular expressions in js.
let re1 = new RegExp("123"); // using the constructor
let re2 = /123/; // using the literal string


// testing for matches
console.log(re2.test('123456')); //returns true

// there are certain characters which have special meanings in regular expressions
// such as: + or ?. If you want them to be included as normal characters in a regexp
// add a backward slash before them, like this:
let re3 = /eighteen\+/;
let re4 = /\?/;
let aSentence = "Are you okay?";
let isQuestion = re4.test(aSentence);
console.log(isQuestion ? "That is a question." : "That is not a question");


// In a regular expression, putting a set of characters between the square brackets makes that part of the expression
// match any of the characters between the brackets.
console.log(/[0-9]/.test("in 2002")); // returns true
console.log(/[a-d]/.test("ghzyx")); // returns false because ghzyx doesn't include none of the abcd.


// sets of characters.
// \d = Any digit character.
// \w = An alphanumeric character (letter, digit, or punctuation)
// \s = Any whitespace character (space, newline, tab, etc)
// \D = A character that is not a digit.
// \W = A non-alphanumeric digit.
// \S = A  non-whitespace character
// . = Any character except for newline.

// For example, an expression for date and time format like this: 10-9-2002 2:36
let timeAndDateExp = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(timeAndDateExp.test("01-01-2001 01:11")); //returns true
console.log(timeAndDateExp.test("1-1-2001 1:11")); //returns false


// To invert a set of characters--that is, to express that you want to match any character except
// the ones in the set-- use ^ (caret) character.

// non-binary characters
let reForNonBinary = /[^01]/;
console.log(reForNonBinary.test("0111010010110001111")); //returns false 
console.log(reForNonBinary.test("012")); //returns true
// words without vowels
let wordsWithoutVowels = /[^aeiou]/;
console.log(wordsWithoutVowels.test("fry cry try")); //returns true


// Repeating parts of a pattern
// If you put a + sign after something in a regular expression, it indicates the element may be repeated more than once.
// * has a similar meaning, but it also allows the pattern to match 0 times.
let re5 = /\d+/; // one or more digits
console.log(re5.test("'666'")); //returns true
console.log(re5.test("''")); //returns false
let re6 = /\d*/; // one or more or zero digits
console.log(re6.test("''")); //returns true
console.log(re6.test("'555'")); //returns true as well
console.log(re6.test("")); //returns true


// A Question Mark makes a part of the pattern optional, meaning it may occur 0 or 1 time.
let color = /colou?r/;
console.log(color.test("colour")); //returns true
console.log(color.test("color")); //returns true as well


// To indicate that a pattern should occur a precise number of times, use braces {}




