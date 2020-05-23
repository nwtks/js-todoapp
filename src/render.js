import patch from '@nwtks/patch2dom';
import createScheduler from '@nwtks/rafsch';

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
