import sync from 'syncdom'
import AppPage from './AppPage'

function createRender(entry) {
  return (model, emitter, visibility) => {
    const view = AppPage({
      emitter: emitter,
      todos: model.todos,
      editTodo: model.editTodo,
      newTodo: model.newTodo,
      visibility: visibility
    })
    const oldView = entry.lastChild
    if (oldView) {
      sync(oldView, view)
    } else {
      entry.appendChild(view)
    }
  }
}

export default createRender
