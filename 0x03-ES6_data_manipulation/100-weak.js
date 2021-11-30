export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  const endpointData = weakMap.get(endpoint);
  if (endpointData === undefined) {
    weakMap.set(endpoint, 1);
  } else {
    if (endpointData >= 5) {
      throw new Error('Too many requests');
    }
    weakMap.set(endpoint, (endpointData + 1));
  }
};
