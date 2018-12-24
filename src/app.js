import createModel from './model';
import AppPage from './AppPage';
import filters from './filter';

const start = (render, emitter, router) => {
  const model = createModel();

  emitter
    .on('add', (e) => {
      model.add(e.title);
      model.newTodo = null;
      router.render();
    })
    .on('update', (e) => {
      model.update(e.todo, e.title);
      model.editTodo = null;
      router.render();
    })
    .on('remove', (e) => {
      model.remove(e.todo);
      model.editTodo = null;
      router.render();
    })
    .on('removeDones', () => {
      model.removeDones();
      router.render();
    })
    .on('toggle', (e) => {
      model.toggle(e.todo);
      router.render();
    })
    .on('toggleAll', () => {
      model.toggleAll();
      router.render();
    })
    .on('startEdit', (e) => {
      model.editTodo = e.todo;
      router.render();
    })
    .on('cancelEdit', () => {
      model.editTodo = null;
      router.render();
    })
    .on('inputNew', (e) => {
      model.newTodo = e.title;
    });

  router
    .route('#/:vis', (param, next) => {
      filters[param.vis]
        ? next(() => {
            render(AppPage, {
              todos: model.todos,
              editTodo: model.editTodo,
              newTodo: model.newTodo,
              visibility: param.vis
            });
          })
        : router.redirect('#/all');
    })
    .route('*', () => {
      router.redirect('#/all');
    });

  model.load();
  router.start();
};

export default start;
