// Given a rectangular matrix of characters,
// add a border of asterisks(*) to it.
function addBorder(picture) {
  let borderLength = picture[0].length + 2;
  let border = '';

  for (let i = 0; i < borderLength; i++) {
    border = border.concat('*');
  }
  picture.unshift(border);
  picture.push(border);

  for (let j = 1; j < picture.length - 1; j++) {
    picture[j] = '*'.concat(picture[j], '*');
  }
  return picture;
}

//following is to test that solution works:
console.log(addBorder(['abc', 'ded']));
// expected output:
// ["*****",
//  "*abc*",
//  "*ded*",
//  "*****"]
