const cleanSet = (set, startString) => {
  const strings = [];

  if (startString === '' || typeof startString !== 'string') return '';
  for (const string of set) {
    if (string.startsWith(startString)) {
      strings.push(string.slice(startString.length));
    }
  }
  return strings.join('-');
};

export default cleanSet;
