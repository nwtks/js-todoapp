const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  done: todos => todos.filter(todo => todo.done)
}

export default filters
