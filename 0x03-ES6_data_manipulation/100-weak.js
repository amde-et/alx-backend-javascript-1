export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  const endpointData = weakMap.get(endpoint);
  if (endpointData >= 5) {
    throw new Error('Too many requests');
  } else if (endpointData === undefined) {
    weakMap.set(endpoint, 1);
  } else {
    weakMap.set(endpoint, (endpointData + 1));
  }
};
