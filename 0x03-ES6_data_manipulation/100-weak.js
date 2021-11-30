export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const endpointData = weakMap.get(endpoint);
    if (endpointData >= 5) {
      throw new Error('Too many requests');
    }
    weakMap.set(endpoint, (endpointData + 1));
  } else {
    weakMap.set(endpoint, 1);
  }
};
