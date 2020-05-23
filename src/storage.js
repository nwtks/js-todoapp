const storage = window.localStorage;

export default (key) => ({
  load: () => JSON.parse(storage.getItem(key) || '[]'),
  save: (value) => {
    storage.setItem(key, JSON.stringify(value));
  },
});
