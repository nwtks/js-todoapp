import filters from './filter'

function start(model, render, emitter, router) {
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
    .on('removeDones', () => {
      model.removeDones()
      render(model, emitter)
    })
    .on('toggle', e => {
      model.toggle(e.todo)
      render(model, emitter)
    })
    .on('toggleAll', () => {
      model.toggleAll()
      render(model, emitter)
    })
    .on('startEdit', e => {
      model.editTodo = e.todo
      render(model, emitter)
    })
    .on('cancelEdit', () => {
      model.editTodo = null
      render(model, emitter)
    })

  function forward(visibility) {
    if (filters[visibility]) {
      model.visibility = visibility
      render(model, emitter)
    } else {
      router.redirect('#/all')
    }
  }

  router
    .route('#/:vis', param => forward(param.vis))
    .route('*', () => forward())

  model.load()
  router.start()
}

export default start
