import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from '@shopify/polaris';

const Todo = ({ id, onChange, completed, text }) => (
  <li
    style={{
      listStyle: 'none',
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <Checkbox label={text} id={id} onChange={onChange} checked={completed} />
  </li>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
