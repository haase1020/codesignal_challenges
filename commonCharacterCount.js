///Given two strings, find the number of common characters between them.
// input is a string of lowercase English letters
function commonCharacterCount(s1, s2) {
  let s2Array = s2.split('');
  let result = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s2Array.indexOf(s1[i]) !== -1) {
      s2Array.splice(s2Array.indexOf(s1[i]), 1);
      result++;
    }
  }
  return result;
}

//following is to test that solution works:
console.log(commonCharacterCount('aabbcc', 'aaddee'));
//expected outcome: 2
