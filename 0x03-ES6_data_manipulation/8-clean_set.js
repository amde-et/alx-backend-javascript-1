const cleanSet = (set, startString) => {
  const strings = [];

  if (startString === '') return startString;
  set.forEach((string) => {
    if (string.startsWith(startString)) strings.push(string.slice(startString.length));
  });
  return strings.join('-');
};

export default cleanSet;
