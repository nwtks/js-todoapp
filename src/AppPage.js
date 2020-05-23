/* eslint-disable react/jsx-key */
import h from '@nwtks/vnoc';
import filters from './filter';

const NAVS = ['all', 'active', 'done'];

const AppPage = ({ state, emit }) => {
  const { todos, editTodo, newTodoTitle, visibility } = state;
  const remaining = filters.active(todos).length;
  const filteredTodo = filters[visibility](todos);
  return (
    <div class='panel'>
      <div class='panel-heading has-background-info has-text-light'>Todos</div>
      <div domkey='new-todo' class='panel-block'>
        <input
          class='input'
          type='text'
          value={newTodoTitle}
          placeholder='What needs to be done?'
          autofocus
          onkeydown={(ev) => keydownNewTodo(ev, emit)}
          oninput={(ev) => emit('inputNew', { title: ev.target.value })}
        />
      </div>
      <div domkey='nav' class='panel-tabs'>
        {NAVS.map((vis) => (
          <a
            class={'is-capitalized' + (visibility === vis ? ' is-active' : '')}
            href={'#/' + vis}
          >
            {vis}
          </a>
        ))}
      </div>
      <label domkey='mark-all' class='panel-block' style={show(todos.length)}>
        <input
          type='checkbox'
          value=''
          checked={todos.every((todo) => todo.done)}
          onchange={() => emit('toggleAll')}
        />
        Mark all as done
      </label>
      {filteredTodo.map((todo) => (
        <TodoItem emit={emit} todo={todo} editTodo={editTodo} />
      ))}
      <div domkey='status' class='panel-block' style={show(todos.length)}>
        <strong>{remaining}</strong>
        {remaining === 1 ? ' item' : ' items'} left
      </div>
      <div
        domkey='remove-dones'
        class='panel-block'
        style={show(todos.length > remaining)}
      >
        <button
          class='button is-primary is-fullwidth'
          onclick={() => emit('removeDones')}
        >
          Clear done
        </button>
      </div>
    </div>
  );
};

const TodoItem = ({ emit, todo, editTodo }) => {
  return (
    <div domkey={'todo-' + todo.id} class='panel-block todo-item'>
      <div style={show(!editTodo || todo.id !== editTodo.id)}>
        <input
          type='checkbox'
          value=''
          checked={todo.done}
          onchange={() => emit('toggle', { todo })}
        />
        <label
          class={'todo' + (todo.done ? ' done' : '')}
          ondblclick={() => emit('startEdit', { todo })}
        >
          {todo.title}
        </label>
      </div>
      <button
        class='delete'
        style={show(!editTodo || todo.id !== editTodo.id)}
        onclick={() => emit('remove', { todo })}
      />
      <input
        class='input'
        style={show(editTodo && todo.id === editTodo.id)}
        type='text'
        value={editTodo && todo.id === editTodo.id ? editTodo.title : null}
        data-editing={editTodo && todo.id === editTodo.id ? '*' : null}
        onblur={(ev) => doneEdit(ev, emit, todo)}
        onkeydown={(ev) => keydownEdit(ev, emit, todo)}
      />
    </div>
  );
};

const keydownNewTodo = (ev, emit) => {
  const { target, key } = ev;
  if (key === 'Enter') {
    const title = target.value;
    target.value = '';
    emit('add', { title });
  }
};

const keydownEdit = (ev, emit, todo) => {
  const { key } = ev;
  if (key === 'Enter') {
    doneEdit(ev, emit, todo);
  } else if (key === 'Escape' || key === 'Esc') {
    emit('cancelEdit', {});
  }
};

const doneEdit = (ev, emit, todo) => {
  const { target } = ev;
  if (!target.dataset.editing) {
    return;
  }
  const v = target.value;
  const title = v && v.trim();
  if (title) {
    emit('update', { todo, title });
  } else {
    emit('remove', { todo });
  }
};

const show = (a) => (a ? '' : 'display:none');

export default AppPage;
