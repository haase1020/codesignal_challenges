function allLongestStrings(inputArray) {
  let largestLength = inputArray[0].length;
  for (let i = 0; i < inputArray.length; i++) {
    if (largestLength < inputArray[i].length) {
      largestLength = inputArray[i].length;
    }
  }
  inputArray = inputArray.filter((item) => {
    return item.length === largestLength;
  });
  return inputArray;
}

//to see output - not needed for CodeSignal answer
console.log(allLongestStrings(['aaa', 'hello', 'bye', 'great', 'mud']));
