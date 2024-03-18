//With generics you codify a relationship between your input and return value.

function convertToArray<T>(input: T): T[] {
  return [input];
}

console.log(convertToArray(1));
console.log(convertToArray("str"));
console.log(convertToArray({ name: "object" }));
