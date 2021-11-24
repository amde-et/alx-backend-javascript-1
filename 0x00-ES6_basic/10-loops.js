export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  // eslint-disable-next-line guard-for-in
  for (const idx in array) {
    const value = array[idx];
    arr.push(`${appendString}${value}`);
  }

  return arr;
}
