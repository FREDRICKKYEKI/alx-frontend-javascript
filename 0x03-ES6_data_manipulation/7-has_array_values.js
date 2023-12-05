// Create a function named hasValuesFromArray that returns a boolean if
//  all the elements in the array exist within the set.
// It accepts two arguments: a set (Set) and an array (Array).

export default function hasValuesFromArray(set, array) {
  const setFromArray = new Set(array);
  let count = 0;
  for (const item of setFromArray) {
    if (set.has(item)) {
      count += 1;
    }
  }
  return count === setFromArray.size;
}
