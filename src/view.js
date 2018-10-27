import h from 'h/src/h'
import sync from 'syncdom/src/syncdom'
import filters from './filter'

function createRender(entry) {
  return (model, emitter) => {
    const view = createView(model, emitter)
    const oldView = entry.lastChild
    if (oldView) {
      sync(oldView, view)
    } else {
      entry.appendChild(view)
    }
  }
}

function createView(model, emitter) {
  const todos = model.todos
  const editTodo = model.editTodo
  const visibility = model.visibility
  const remaining = filters.active(todos).length
  const filteredTodo = filters[visibility](todos)

  return h(
    'div',
    { class: 'panel' },
    h(
      'div',
      {
        class: 'panel-heading'
      },
      'Todos'
    ),
    h(
      'div',
      {
        class: 'panel-block',
        dataset: { domsame: 'newTodo' }
      },
      h('input', {
        class: 'input',
        type: 'text',
        placeholder: 'What needs to be done?',
        autofocus: true,
        onkeyup: ev => keyupNewTodo(ev, emitter)
      })
    ),
    h(
      'div',
      {
        class: 'panel-tabs'
      },
      h(
        'a',
        {
          class: visibility === 'all' ? 'is-active' : null,
          href: '#/all'
        },
        'All'
      ),
      h(
        'a',
        {
          class: visibility === 'active' ? 'is-active' : null,
          href: '#/active'
        },
        'Active'
      ),
      h(
        'a',
        {
          class: visibility === 'done' ? 'is-active' : null,
          href: '#/done'
        },
        'Done'
      )
    ),
    h(
      'label',
      {
        class: 'panel-block',
        style: todos.length ? null : 'display:none'
      },
      h('input', {
        type: 'checkbox',
        checked: todos.every(todo => todo.done),
        onchange: ev => emitter.emit('toggleAll')
      }),
      'Mark all as done'
    ),
    filteredTodo.map(todo =>
      h(
        'div',
        {
          class: 'panel-block todo-item',
          dataset: { domkey: 'todo-' + todo.id }
        },
        h(
          'div',
          { style: todo !== editTodo ? null : 'display:none' },
          h('input', {
            type: 'checkbox',
            checked: todo.done,
            onchange: ev => emitter.emit('toggle', { todo: todo })
          }),
          h(
            'label',
            {
              class: 'todo' + (todo.done ? ' done' : ''),
              ondblclick: ev => emitter.emit('startEdit', { todo: todo })
            },
            todo.title
          )
        ),
        h('button', {
          class: 'delete',
          style: todo !== editTodo ? null : 'display:none',
          onclick: ev => emitter.emit('remove', { todo: todo })
        }),
        h('input', {
          class: 'input',
          style: todo === editTodo ? null : 'display:none',
          type: 'text',
          value: editTodo ? editTodo.title : null,
          dataset: { editing: todo === editTodo ? '*' : null },
          onblur: ev => doneEdit(ev, emitter, todo),
          onkeyup: ev => keyupEdit(ev, emitter, todo)
        })
      )
    ),
    h(
      'div',
      {
        class: 'panel-block',
        style: todos.length ? null : 'display:none'
      },
      h('strong', {}, remaining),
      remaining === 1 ? ' item left' : ' items left'
    ),
    h(
      'div',
      {
        class: 'panel-block',
        style: todos.length > remaining ? null : 'display:none'
      },
      h(
        'button',
        {
          class: 'button is-link is-fullwidth',
          onclick: ev => emitter.emit('removeDones')
        },
        'Clear done'
      )
    )
  )
}

function keyupNewTodo(ev, emitter) {
  if (ev.key === 'Enter') {
    const title = ev.target.value
    ev.target.value = ''
    emitter.emit('add', { title: title })
  }
}

function keyupEdit(ev, emitter, todo) {
  if (ev.key === 'Enter') {
    doneEdit(ev, emitter, todo)
  } else if (ev.key === 'Escape') {
    emitter.emit('cancelEdit', {})
  }
}

function doneEdit(ev, emitter, todo) {
  if (!ev.target.dataset.editing) {
    return
  }
  const v = ev.target.value
  const title = v && v.trim()
  if (title) {
    emitter.emit('update', { todo: todo, title: title })
  } else {
    emitter.emit('remove', { todo: todo })
  }
}

export default createRender
