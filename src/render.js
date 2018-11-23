import patch from 'patch2dom'
import AppPage from './AppPage'

function createRender(entry, scheduler) {
  return (model, emit, visibility) => {
    const view = AppPage({
      emit: emit,
      todos: model.todos,
      editTodo: model.editTodo,
      newTodo: model.newTodo,
      visibility: visibility
    })
    scheduler(() => patch(entry, view))
  }
}

export default createRender
