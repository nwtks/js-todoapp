import filters from './filter'

function start(model, emitter, render) {
  emitter
    .on('add', e => {
      model.add(e.title)
      render(model, emitter)
    })
    .on('update', e => {
      model.update(e.todo, e.title)
      model.editTodo = null
      render(model, emitter)
    })
    .on('remove', e => {
      model.remove(e.todo)
      model.editTodo = null
      render(model, emitter)
    })
    .on('removeDones', e => {
      model.removeDones()
      render(model, emitter)
    })
    .on('toggle', e => {
      model.toggle(e.todo)
      render(model, emitter)
    })
    .on('toggleAll', e => {
      model.toggleAll()
      render(model, emitter)
    })
    .on('startEdit', e => {
      model.editTodo = e.todo
      render(model, emitter)
    })
    .on('cancelEdit', e => {
      model.editTodo = null
      render(model, emitter)
    })

  const router = createRouter(model, emitter, render)
  window.addEventListener('hashchange', router)
  model.load()
  router()
}

function createRouter(model, emitter, render) {
  return () => {
    const visibility = window.location.hash.replace(/#\/?/, '')
    if (filters[visibility]) {
      model.visibility = visibility
    } else {
      window.location.hash = ''
      model.visibility = 'all'
    }
    render(model, emitter)
  }
}

export default start
