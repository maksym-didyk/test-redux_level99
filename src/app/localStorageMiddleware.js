const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  localStorage.setItem('username', JSON.stringify(store.getState()));

  return result;
};

export default localStorageMiddleware;
