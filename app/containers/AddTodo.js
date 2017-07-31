import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { TextField, Button } from '@shopify/polaris';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(value) {
    this.setState({value});
  }

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!this.state.value.trim()) {
              return;
            }
            this.props.dispatch(addTodo(this.state.value));
            this.setState({value: ''});
          }}
        >
          <TextField
            label="New todo"
            connectedRight={<Button submit>Add</Button>}
            onChange={this.handleInputChange.bind(this)}
            value={this.state.value}
          />
        </form>
      </div>
    );
  }
}

AddTodo = connect()(AddTodo);

export default AddTodo;
