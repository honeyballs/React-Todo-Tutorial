import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

let TodoListComponent = (props) => {
    return (
        <List size={props.todos.length}>
            {props.todos.map((task, index) => <TodoItem 
                key={index}
                onClick={event => props.checkItem(index)}
            >
                <Span>
                    <CheckBox 
                        type='checkbox' 
                        checked={task.completed}
                        onChange={event => props.checkItem(index)}
                    />
                    <ItemText completed={task.completed}>
                        {task.name}
                    </ItemText>
                </Span>
                <DeleteIcon
                    onClick={event => {
                        event.stopPropagation();
                        props.deleteItem(index);
                    }}
                >
                    x
                </DeleteIcon>
            </TodoItem>)}
        </List>
    )
}

TodoListComponent.propTypes = {
    todos: PropTypes.array.isRequired,
    checkItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

let List = styled.ul`
    list-style-type: none;
    padding: 0;
    border-bottom: ${({size}) => size > 0 ? '1px solid #647381' : 0};
`

let TodoItem = styled.li`
    width: 100%;
    padding: 10px 20px;
    color: #fff;
    border-top: 1px solid #647381;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &:hover {
        background: #8c99a6;
    }
`

let Span = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

let CheckBox = styled.input`
    margin: 0 20px 0 0;
    cursor: pointer;
`

let ItemText = styled.p`
    margin: 0;
    text-decoration: ${({completed}) => completed ? 'line-through' : 'none'};
`

let DeleteIcon = styled.p`
    color: #7f0000;
    margin: 0;
    font-weight: bold;
    font-size: 1.5em;

    &:hover {
        transform: scale(1.2)
    }
`

export default TodoListComponent;