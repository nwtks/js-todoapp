import patch from 'patch2dom';
import createScheduler from 'rafsch';

export default (emit, entry) => {
  const scheduler = createScheduler();

  return (view, state) => {
    scheduler(() => patch(entry, view({ state, emit })));
  };
};
