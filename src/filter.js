export default {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.done),
  done: (todos) => todos.filter((todo) => todo.done)
};
