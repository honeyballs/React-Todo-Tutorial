import React, { Component } from 'react';
import styled from 'styled-components';

import InputComponent from './components/InputComponent';
import TodoListComponent from './components/TodoListComponent';

class App extends Component {
  
  state = {
    inputValue: '',
    todos: []
  }

  changeInputText = event => {
    this.setState({inputValue: event.target.value})
  }

  addTodoItem = event => {
    let task = {
      name: this.state.inputValue,
      completed: false
    };
    let newTodos = [...this.state.todos, task];
    this.setState({todos: newTodos, inputValue: ''});
  }

  checkItem = index => {
    let newTodos = [
      ...this.state.todos.slice(0, index),
      {...this.state.todos[index], completed: !this.state.todos[index].completed},
      ...this.state.todos.slice(index + 1)
    ];
    this.setState({todos: newTodos});
  }

  deleteItem = index => {
    let newTodos = [
      ...this.state.todos.slice(0, index),
      ...this.state.todos.slice(index + 1)
    ]
    this.setState({todos: newTodos});
  }

  render() {
    return (
      <Container>
        <Headline>My todo list</Headline>
        <Content>
          <InputComponent
            inputValue={this.state.inputValue}
            changeInputText={this.changeInputText}
            addTodoItem={this.addTodoItem}
          />
          <TodoHeadline>
            Todos:
          </TodoHeadline>
          <TodoListComponent 
            todos={this.state.todos}
            checkItem={this.checkItem}
            deleteItem={this.deleteItem}
          />
        </Content>
      </Container>
    );
  }
}

let Container = styled.div`
  width: 80%;
  margin: 0 auto;
  overflow: auto;
`

let Headline = styled.h1`
  margin: 20px 0 0;
  padding: 20px;
  background: #36454f;
  color: #fff;
  border-radius: 20px;
`

let Content = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 20px 0;
  background: #708090;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

let TodoHeadline = styled.h2`
  color: #fff;
  margin: 20px;
`

export default App;
