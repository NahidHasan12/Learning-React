
import { useState } from 'react';
import PropTypes from 'prop-types';

export const TodoForm = ({onAddTodo}) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue("");
    }

    return (
        <section className="form">
                
            <form onSubmit={handleFormSubmit}>
                <div className="m-0">
                    <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(event) => handleInputChange(event.target.value)}  />
                </div>
                <div className="m-0">
                    <button className="todo-btn" type="submit">Add Task</button>
                </div>
            </form>
        </section>
    );

}

TodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};