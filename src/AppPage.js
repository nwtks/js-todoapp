import h from 'hel' // eslint-disable-line no-unused-vars
import filters from './filter'

function AppPage(props) {
  const emitter = props.emitter
  const todos = props.todos
  const editTodo = props.editTodo
  const visibility = props.visibility
  const remaining = filters.active(todos).length
  const filteredTodo = filters[visibility](todos)

  return (
    <div class="panel">
      <div class="panel-heading has-background-info has-text-light">Todos</div>
      <div class="panel-block" data-domsame="newTodo">
        <input
          class="input"
          type="text"
          placeholder="What needs to be done?"
          autofocus
          onkeypress={ev => keypressNewTodo(ev, emitter)}
        />
      </div>
      <div class="panel-tabs">
        {['all', 'active', 'done'].map(vis => (
          <a
            class={'is-capitalized' + (visibility === vis ? ' is-active' : '')}
            href={'#/' + vis}
          >
            {vis}
          </a>
        ))}
      </div>
      <label class="panel-block" style={todos.length ? null : 'display:none'}>
        <input
          type="checkbox"
          checked={todos.every(todo => todo.done)}
          onchange={() => emitter.emit('toggleAll')}
        />
        Mark all as done
      </label>
      {filteredTodo.map(todo => (
        <div class="panel-block todo-item" data-domkey={'todo-' + todo.id}>
          <div style={todo !== editTodo ? null : 'display:none'}>
            <input
              type="checkbox"
              checked={todo.done}
              onchange={() => emitter.emit('toggle', { todo: todo })}
            />
            <label
              class={'todo' + (todo.done ? ' done' : '')}
              ondblclick={() => emitter.emit('startEdit', { todo: todo })}
            >
              {todo.title}
            </label>
          </div>
          <button
            class="delete"
            style={todo !== editTodo ? null : 'display:none'}
            onclick={() => emitter.emit('remove', { todo: todo })}
          />
          <input
            class="input"
            style={todo === editTodo ? null : 'display:none'}
            type="text"
            value={editTodo ? editTodo.title : null}
            data-editing={todo === editTodo ? '*' : null}
            onblur={ev => doneEdit(ev, emitter, todo)}
            onkeypress={ev => keypressEdit(ev, emitter, todo)}
          />
        </div>
      ))}
      <div class="panel-block" style={todos.length ? null : 'display:none'}>
        <strong>{remaining}</strong>
        {remaining === 1 ? ' item left' : ' items left'}
      </div>
      <div
        class="panel-block"
        style={todos.length > remaining ? null : 'display:none'}
      >
        <button
          class="button is-primary is-fullwidth"
          onclick={() => emitter.emit('removeDones')}
        >
          Clear done
        </button>
      </div>
    </div>
  )
}

function keypressNewTodo(ev, emitter) {
  const key = ev.key
  if (key === 'Enter') {
    const title = ev.target.value
    ev.target.value = ''
    emitter.emit('add', { title: title })
  }
}

function keypressEdit(ev, emitter, todo) {
  const key = ev.key
  if (key === 'Enter') {
    doneEdit(ev, emitter, todo)
  } else if (key === 'Escape' || key === 'Esc') {
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

export default AppPage
