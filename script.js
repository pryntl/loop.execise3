function indexOfTarget(string, target) {
  let index = [];
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    let partOfString = string.slice(i, i + target.length);
    if (partOfString === target) {
      index.push(i);
      count++;
    }
  }
  return {
    index,
    count,
  };
}
console.log(indexOfTarget("an ant and an elephant", "an"));
