import filters from './filter'

const storage = window.localStorage
const STORAGE_KEY = 'js-todoapp'

function createModel() {
  const model = {
    todos: [],
    editTodo: null,
    load() {
      model.todos = JSON.parse(storage.getItem(STORAGE_KEY) || '[]')
    },
    save() {
      storage.setItem(STORAGE_KEY, JSON.stringify(model.todos))
    },
    add(title) {
      const value = title && title.trim()
      if (!value) {
        return
      }
      model.todos.push({
        id: Date.now(),
        title: value,
        done: false
      })
      model.save()
    },
    update(todo, title) {
      if (!title) {
        return
      }
      todo.title = title
      model.save()
    },
    remove(todo) {
      model.todos = model.todos.filter(e => e.id !== todo.id)
      model.save()
    },
    removeDones() {
      model.todos = filters.active(model.todos)
      model.save()
    },
    toggle(todo) {
      todo.done = !todo.done
      model.save()
    },
    toggleAll() {
      const done = filters.done(model.todos).length === model.todos.length
      model.todos.forEach(e => (e.done = !done))
      model.save()
    }
  }
  return model
}

export default createModel
