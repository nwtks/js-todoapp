import h from 'hel'
import filters from './filter'

function AppPage(props) {
  const { emitter, todos, editTodo, newTodo, visibility } = props
  const remaining = filters.active(todos).length
  const filteredTodo = filters[visibility](todos)
  return (
    <div class="panel">
      <div class="panel-heading has-background-info has-text-light">Todos</div>
      <div class="panel-block">
        <input
          class="input"
          type="text"
          value={newTodo}
          placeholder="What needs to be done?"
          autofocus
          onkeypress={ev => keypressNewTodo(ev, emitter)}
          oninput={ev => emitter.emit('inputNew', { title: ev.target.value })}
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
      <label class="panel-block" style={show(todos.length)}>
        <input
          type="checkbox"
          checked={todos.every(todo => todo.done)}
          onchange={() => emitter.emit('toggleAll')}
        />
        Mark all as done
      </label>
      {filteredTodo.map(todo => (
        <TodoItem todo={todo} emitter={emitter} editTodo={editTodo} />
      ))}
      <div class="panel-block" style={show(todos.length)}>
        <strong>{remaining}</strong>
        {remaining === 1 ? ' item' : ' items'} left
      </div>
      <div class="panel-block" style={show(todos.length > remaining)}>
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

function TodoItem(props) {
  const { emitter, todo, editTodo } = props
  return (
    <div class="panel-block todo-item" data-domkey={'todo-' + todo.id}>
      <div style={show(todo !== editTodo)}>
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
        style={show(todo !== editTodo)}
        onclick={() => emitter.emit('remove', { todo: todo })}
      />
      <input
        class="input"
        style={show(todo === editTodo)}
        type="text"
        value={editTodo ? editTodo.title : null}
        data-editing={todo === editTodo ? '*' : null}
        onblur={ev => doneEdit(ev, emitter, todo)}
        onkeypress={ev => keypressEdit(ev, emitter, todo)}
      />
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

function show(a) {
  return a ? null : 'display:none'
}

export default AppPage
