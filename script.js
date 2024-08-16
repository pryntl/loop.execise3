//the function structure.
function indexOfTarget(string, target) {
  //defining a variable which tells the index of each repeat.
  let index = [];
  //defining a variable which counts how many times the targeted word is repeated in the string.
  let count = 0;
  //a for loop that works this way: as long as 'i' is less than the string, the loop keeps going. and each time 'i' gets one more.
  for (
    let i = 0;
    i < string.length;
    i++
  ) //we extract a part of string and compare it with the targeted word.
  {
    let partOfString = string.slice(i, i + target.length);
    //if the extracted part is equal to the targeted word, the loop finds its index and count it.
    if (partOfString === target) {
      index.push(i);
      count++;
    }
  }
  //at the end returning the index and count as an object,
  return {
    index,
    count,
  };
}
//testing.
console.log(indexOfTarget("an ant and an elephant", "an"));
