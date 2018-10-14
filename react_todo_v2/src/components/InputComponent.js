import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

let InputComponent = (props) => {
    return (
        <Container>
            <TextField 
                type='text' 
                value={props.inputValue} 
                placeholder='Task name'
                onChange={props.changeInputText}
            />
            <AddButton
                onClick={props.addTodoItem}
            >
                Add
            </AddButton>
        </Container>
    )
}

InputComponent.propTypes = {
    inputValue: PropTypes.string.isRequired,
    changeInputText: PropTypes.func.isRequired,
    addTodoItem: PropTypes.func.isRequired
}

let Container = styled.div`
    padding: 20px;
`

let TextField = styled.input`
    background: #eee;
    border: 0;
    padding: 5px 0 5px 10px;
    font-size: 1.1em;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`

let AddButton = styled.button`
    background: #536878;
    border: 0;
    padding: 5px 10px 5px 5px;
    font-size: 1.1em;
    color: #fff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;

    &:hover {
        background: #36454f;
    }
`

export default InputComponent;
