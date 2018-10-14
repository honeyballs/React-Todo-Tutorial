import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputComponent extends Component {

    render() {
        return (
            <div>
                <input 
                    type='text' 
                    value={this.props.inputValue} 
                    placeholder='Task name'
                    onChange={this.props.changeInputText}
                />
                <button
                    onClick={this.props.addTodoItem}
                >
                    Add
                </button>
            </div>
        )
    }

}

InputComponent.propTypes = {
    inputValue: PropTypes.string.isRequired,
    changeInputText: PropTypes.func.isRequired,
    addTodoItem: PropTypes.func.isRequired
}

export default InputComponent;
