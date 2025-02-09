function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

function isNumberArray<T>(arr: T[]): arr is number[] {
  return arr.every(item => typeof item === 'number');
}

function isStringArray<T>(arr: T[]): arr is string[] {
  return arr.every(item => typeof item === 'string');
}

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];

//Solution
if (isNumberArray(arr1) && isNumberArray(arr2)) {
  const combined = combineArrays(arr1, arr2); // Correct type inference
  console.log(combined); // [1, 2, 3, 4, 5, 6]
} else if (isStringArray(arr1) && isStringArray(arr2)) {
  const combined = combineArrays(arr1, arr2);
  console.log(combined); // ["a", "b", "c", "d", "e", "f"]
} else {
  console.log("Arrays are of different types");
}
