import React, { Component } from 'react';
import InputComponent from './components/InputComponent';
import TodoListComponent from './components/TodoListComponent';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: []
    }
    this.changeInputText = this.changeInputText.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
  }

  changeInputText(event) {
    this.setState({inputValue: event.target.value})
  }

  addTodoItem(event) {
    let task = {
      name: this.state.inputValue,
      completed: false
    };
    let newTodos = [...this.state.todos, task];
    this.setState({todos: newTodos, inputValue: ''});
  }

  checkItem(index) {
    let newTodos = [
      ...this.state.todos.slice(0, index),
      {...this.state.todos[index], completed: !this.state.todos[index].completed},
      ...this.state.todos.slice(index + 1)
    ];
    this.setState({todos: newTodos});
  }

  render() {
    return (
      <div>
        <h1>My todo list</h1>
        <InputComponent
          inputValue={this.state.inputValue}
          changeInputText={this.changeInputText}
          addTodoItem={this.addTodoItem}
        />
        <TodoListComponent 
          todos={this.state.todos}
          checkItem={this.checkItem}
        />
      </div>
    );
  }
}

export default App;
