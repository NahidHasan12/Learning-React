
import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDataTime";


export const Todo = () => {

    const [task, setTask] = useState([]);



    

    const handleFormSubmit = (inputValue) => {
       
        if(!inputValue){
            return;
        }
        if(task.includes(inputValue)) return;
        setTask((prevTask) => [...prevTask, inputValue]);
    }

 


    // Todo delete

    const handleDeleteTodo = (value) => {
        console.log(task);
        console.log(value);
        const updatedTask = task.filter((curTask) => curTask !== value);
        setTask(updatedTask);
    }

    // Clear All Todo
    const handleClearAllTodo = () => {
        setTask([]);
    }
   

    return (
        <>
        <header>
            <h1 className="text-red-700">Todo List</h1>
            <TodoDateTime />
        </header>

           <TodoForm onAddTodo={handleFormSubmit} />

            <section>
                <ul>
                        {
                            task.map((curTask,index) => {
                                return (
                                    <TodoList key={index} data={curTask} onHandleDeleteTodo={handleDeleteTodo} />
                                );
                            })
                        }
                </ul>
            </section>

            <section>
                <button className="clear-btn" onClick={handleClearAllTodo}>Clear All</button>
            </section>
        </>
    );
    
}