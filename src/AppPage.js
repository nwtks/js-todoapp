import h from 'hec'
import filters from './filter'

function AppPage(props) {
  const { emit, todos, editTodo, newTodo, visibility } = props
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
          onkeydown={ev => keydownNewTodo(ev, emit)}
          oninput={ev => emit('inputNew', { title: ev.target.value })}
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
          onchange={() => emit('toggleAll')}
        />
        Mark all as done
      </label>
      {filteredTodo.map(todo => (
        <TodoItem todo={todo} emit={emit} editTodo={editTodo} />
      ))}
      <div class="panel-block" style={show(todos.length)}>
        <strong>{remaining}</strong>
        {remaining === 1 ? ' item' : ' items'} left
      </div>
      <div class="panel-block" style={show(todos.length > remaining)}>
        <button
          class="button is-primary is-fullwidth"
          onclick={() => emit('removeDones')}
        >
          Clear done
        </button>
      </div>
    </div>
  )
}

function TodoItem(props) {
  const { emit, todo, editTodo } = props
  return (
    <div class="panel-block todo-item" data-domkey={'todo-' + todo.id}>
      <div style={show(todo !== editTodo)}>
        <input
          type="checkbox"
          checked={todo.done}
          onchange={() => emit('toggle', { todo: todo })}
        />
        <label
          class={'todo' + (todo.done ? ' done' : '')}
          ondblclick={() => emit('startEdit', { todo: todo })}
        >
          {todo.title}
        </label>
      </div>
      <button
        class="delete"
        style={show(todo !== editTodo)}
        onclick={() => emit('remove', { todo: todo })}
      />
      <input
        class="input"
        style={show(todo === editTodo)}
        type="text"
        value={editTodo ? editTodo.title : null}
        data-editing={todo === editTodo ? '*' : null}
        onblur={ev => doneEdit(ev, emit, todo)}
        onkeydown={ev => keydownEdit(ev, emit, todo)}
      />
    </div>
  )
}

function keydownNewTodo(ev, emit) {
  const key = ev.key
  if (key === 'Enter') {
    const title = ev.target.value
    ev.target.value = ''
    emit('add', { title: title })
  }
}

function keydownEdit(ev, emit, todo) {
  const key = ev.key
  if (key === 'Enter') {
    doneEdit(ev, emit, todo)
  } else if (key === 'Escape' || key === 'Esc') {
    emit('cancelEdit', {})
  }
}

function doneEdit(ev, emit, todo) {
  if (!ev.target.dataset.editing) {
    return
  }
  const v = ev.target.value
  const title = v && v.trim()
  if (title) {
    emit('update', { todo: todo, title: title })
  } else {
    emit('remove', { todo: todo })
  }
}

function show(a) {
  return a ? null : 'display:none'
}

export default AppPage
