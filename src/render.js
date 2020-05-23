import patch from 'patch2dom';
import createScheduler from 'rafsch';

export default (emit, entry, viewEvent) => {
  const scheduler = createScheduler();

  return (view, state) => {
    scheduler(() => {
      const result = view({ state, emit });
      if (result) {
        patch(entry, result);
        if (viewEvent) {
          emit(viewEvent, state);
        }
      }
    });
  };
};
