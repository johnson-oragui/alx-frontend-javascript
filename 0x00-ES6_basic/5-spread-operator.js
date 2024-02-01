export default function concatArrays(array1, array2, string) {
  const newArray = [...array1, ...array2, ...string];
  return newArray;
}

if (require.main === module) {
  console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));
}
