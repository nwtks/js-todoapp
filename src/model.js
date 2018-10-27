import filters from './filter'

const storage = window.localStorage
const STORAGE_KEY = 'js-todo'

function createModel() {
  const model = {
    todos: [],
    editTodo: null,
    visibility: null,
    load() {
      this.todos = JSON.parse(storage.getItem(STORAGE_KEY) || '[]')
    },
    save() {
      storage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
    },
    add(title) {
      const value = title && title.trim()
      if (!value) {
        return
      }
      this.todos.push({
        id: Date.now(),
        title: value,
        done: false
      })
      this.save()
    },
    update(todo, title) {
      if (!title) {
        return
      }
      todo.title = title
      this.save()
    },
    remove(todo) {
      this.todos = this.todos.filter(e => e.id !== todo.id)
      this.save()
    },
    removeDones() {
      this.todos = filters.active(this.todos)
      this.save()
    },
    toggle(todo) {
      todo.done = !todo.done
      this.save()
    },
    toggleAll() {
      const done = filters.done(this.todos).length === this.todos.length
      this.todos.forEach(e => (e.done = !done))
      this.save()
    }
  }
  return model
}

export default createModel
