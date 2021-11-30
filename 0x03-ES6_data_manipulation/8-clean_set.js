const cleanSet = (set, startString) => {
  const strings = [];

  if (startString === '' || typeof startstring !== 'string') return '';
  set.forEach((string) => {
    if (string.startsWith(startString)) strings.push(string.slice(startString.length));
  });
  return strings.join('-');
};

export default cleanSet;
