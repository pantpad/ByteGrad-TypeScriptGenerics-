//With generics you codify a relationship between your input and return value.
console.log(
  "With generics you codify a relationship between your input and return value."
);
function convertToArray<T>(input: T): T[] {
  return [input];
}

console.log(convertToArray(1));
console.log(convertToArray("str"));
console.log(convertToArray({ name: "object" }));

//Function that given an array of generics value returns the index of the item specified
console.log(
  "Function that given an array of generics value returns the index of the item specified"
);

const arr = [11, 33, 88];

function getItemIndexFromArr<T>(arr: T[], value: T) {
  return arr.findIndex((item) => item === value);
}

const getItemIndexFromArrArrow = <T>(arr: T[], value: T) =>
  arr.findIndex((item) => item === value);

console.log(getItemIndexFromArr(arr, 88));
console.log(getItemIndexFromArrArrow(arr, 88));
