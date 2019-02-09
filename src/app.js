import update from './update';
import AppPage from './AppPage';
import filters from './filter';

export default (emitter, store, render, router, storage) => {
  emitter
    .on('inputNew', (e) => {
      store.update(update.inputNew, e);
    })
    .on('add', () => {
      store.update(update.addNew);
    })
    .on('startEdit', (e) => {
      store.update(update.startEdit, e.todo);
    })
    .on('cancelEdit', () => {
      store.update(update.cancelEdit);
    })
    .on('update', (e) => {
      store.update(update.update, { id: e.todo.id, title: e.title });
    })
    .on('remove', (e) => {
      store.update(update.remove, e.todo);
    })
    .on('removeDones', () => {
      store.update(update.removeDones);
    })
    .on('toggle', (e) => {
      store.update(update.toggle, e.todo);
    })
    .on('toggleAll', () => {
      store.update(update.toggleAll);
    })
    .on('updateStore', (state) => {
      storage.save(state.todos);
      router.render();
    });

  router
    .route('#/:vis', (param, next) => {
      const visibility = param.vis;
      filters[visibility]
        ? next(() => {
            const { todos, editTodo, newTodoTitle } = store.getState();
            render(AppPage, {
              todos,
              editTodo,
              newTodoTitle,
              visibility
            });
          })
        : router.redirect('#/all');
    })
    .route('*', () => {
      router.redirect('#/all');
    });

  router.start();
  store.update(update.init, storage.load());
};
