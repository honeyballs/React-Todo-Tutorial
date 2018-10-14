import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoListComponent extends Component {

    render() {
        return (
            <ul>
                {this.props.todos.map((task, index) => <li key={index}>
                    <input 
                        type='checkbox' 
                        checked={task.completed}
                        onChange={event => this.props.checkItem(index)}
                    />
                    {task.name}
                </li>)}
            </ul>
        )
    }

}

TodoListComponent.propTypes = {
    todos: PropTypes.array.isRequired,
    checkItem: PropTypes.func.isRequired
}

export default TodoListComponent;