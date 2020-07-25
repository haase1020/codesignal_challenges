// Some people are standing in a row in a park.
// There are trees between them which cannot be moved.
// Your task is to rearrange the people by their heights
// in a non-descending order without moving the trees.
// People can be very tall!
function sortByHeight(a) {
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      arr.push(i);
    } else {
      arr2.push(a[i]);
    }
  }
  let sorted = arr2.sort((prev, current) => prev - current);
  for (let j = 0; j < arr.length; j++) {
    sorted.splice(arr[j], 0, -1);
  }
  return sorted;
}

//following is to test that solution works:
sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
//expected outcome: [ -1, 150, 160, 170, -1, -1, 180, 190 ]
