import patch from 'patch2dom'
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
    schd(() => patch(entry, view))
  }
}

export default createRender
