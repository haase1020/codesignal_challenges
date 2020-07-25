// Write a function that reverses characters in (possibly nested)
// parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

function reverseInParentheses(s) {
  if (s.includes('(')) {
    return reverseInParentheses(reversingRecursion(s));
  }
  return s;
}

function reversingRecursion(s) {
  let regExp = /\(([^()]*)\)/i;
  let subStr = regExp.exec(s)[1];
  subStr = subStr.split('').reverse().join('');
  return s.replace(regExp, subStr);
}

//following is to test that solution works:
console.log(reverseInParentheses('foo(bar)baz'));
// expected outcome: foorabbaz
