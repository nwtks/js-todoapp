import filters from './filter';

export default {
  init: (state, payload) => {
    state.todos = payload;
    state.editTodo = null;
    state.newTodoTitle = null;
    return state;
  },
  inputNew: (state, payload) => {
    state.newTodoTitle = payload.title;
    return state;
  },
  addNew: (state) => {
    const value = state.newTodoTitle && state.newTodoTitle.trim();
    if (value) {
      state.todos.push({
        id: Date.now(),
        title: value,
        done: false
      });
    }
    state.newTodoTitle = null;
    return state;
  },
  startEdit: (state, payload) => {
    state.editTodo = payload;
    return state;
  },
  cancelEdit: (state) => {
    state.editTodo = null;
    return state;
  },
  update: (state, payload) => {
    const value = payload.title && payload.title.trim();
    if (value) {
      state.todos
        .filter((e) => e.id === payload.id)
        .forEach((e) => {
          e.title = value;
        });
    }
    state.editTodo = null;
    return state;
  },
  remove: (state, payload) => {
    state.todos = state.todos.filter((e) => e.id !== payload.id);
    state.editTodo = null;
    return state;
  },
  removeDones: (state) => {
    state.todos = filters.active(state.todos);
    return state;
  },
  toggle: (state, payload) => {
    state.todos
      .filter((e) => e.id === payload.id)
      .forEach((e) => {
        e.done = !e.done;
      });
    return state;
  },
  toggleAll: (state) => {
    const done = filters.done(state.todos).length === state.todos.length;
    state.todos.forEach((e) => {
      e.done = !done;
    });
    return state;
  }
};
