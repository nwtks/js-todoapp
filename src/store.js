export default (emit, updateEvent) => {
  let state = '{}';

  const store = {
    getState: () => JSON.parse(state),
    update: (updater, payload) => {
      const result = updater(store.getState(), payload, emit);
      if (result != null) {
        const newState = JSON.stringify(result);
        if (state !== newState) {
          state = newState;
          emit(updateEvent, store.getState());
        }
      }
      return store;
    }
  };
  return store;
};
