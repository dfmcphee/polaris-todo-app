import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

import {Card} from '@shopify/polaris';

const visibilityLabel = function(visibilityFilter) {
  switch (visibilityFilter) {
  case 'SHOW_COMPLETED':
    return 'Completed';
  case 'SHOW_ACTIVE':
    return 'Active';
  default:
    return 'All';
  }
};

const TodoList = ({ todos, onTodoChange, visibilityFilter }) => (
  <Card.Section title={`${visibilityLabel(visibilityFilter)} todos`}>
    <ul style={{padding: 0}}>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onChange={(newValue, id) => onTodoChange(newValue, id)} />
      ))}
    </ul>
  </Card.Section>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onTodoChange: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.string.isRequired
};

export default TodoList;
