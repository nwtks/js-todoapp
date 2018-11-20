import sync from 'syncdom'
import scheduler from 'rafsch'
import AppPage from './AppPage'

function createRender(entry) {
  const schd = scheduler()
  return (model, emit, visibility) => {
    const view = AppPage({
      emit: emit,
      todos: model.todos,
      editTodo: model.editTodo,
      newTodo: model.newTodo,
      visibility: visibility
    })
    schd(() => {
      const oldView = entry.lastChild
      if (oldView) {
        sync(oldView, view)
      } else {
        entry.appendChild(view)
      }
    })
  }
}

export default createRender
