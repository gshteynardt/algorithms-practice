const cacheDecorator = (func) => {
  const cache = new Map();

  return function(...rest) {
    const key = rest.join();

    if (!cache.has(key)) {
      cache.set(key, func(...rest));
    }

    return cache.get(key);
  };
};

export default cacheDecorator;
