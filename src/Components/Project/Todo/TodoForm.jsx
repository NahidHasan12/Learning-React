
import { useState } from 'react';
import PropTypes from 'prop-types';

export const TodoForm = ({onAddTodo}) => {

    const [inputValue, setInputValue] = useState({});

    const handleInputChange = (value) => {
        setInputValue({ id:value, content:value, checked: false })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({ id: "", content: "", checked: false });
    }

    return (
        <section className="form">
                
            <form onSubmit={handleFormSubmit}>
                <div className="m-0">
                    <input type="text" className="todo-input" autoComplete="off" value={inputValue.content} onChange={(event) => handleInputChange(event.target.value)}  />
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