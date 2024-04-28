/**
 * No:791
 * You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

Return any permutation of s that satisfies this property. */


function customSortString(order, s) {
  var charCountMap = new Map();
  for(const char of order) {
    charCountMap.set(char, 0);
  }
  console.log(charCountMap);

  for(const char of s) {
    if(charCountMap.has(char)) {
      charCountMap.set(char, charCountMap.get(char)+1);
    }
  }

  let customString = '';
  for(const char of order) {
    customString += char.repeat(charCountMap.get(char));
  }

for(const char of s) {
  if(!charCountMap.has(char)) {
    customString += char;
  }
}


   console.log('Count Map after updating : ',charCountMap);
  console.log('CustomSortString::',customString);
}



let order = "cba", s = "abcd";
console.log(order, s);
customSortString(order, s);