
import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDataTime";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage"




export const Todo = () => {

    const [task, setTask] = useState(() => getLocalStorageTodoData());


    const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    //to check if the input field is empty or not
    if (!content) return;

    // to check if the data is already existing or not
    // if (task.includes(inputValue)) return;
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  // Todo Add Data to Local Storage
  
  setLocalStorageTodoData(task);
 


    // Todo delete
    const handleDeleteTodo = (value) => {
        console.log(task);
        console.log(value);
        const updatedTask = task.filter((curTask) => curTask.content !== value);
        setTask(updatedTask);
    }

    // Clear All Todo
    const handleClearAllTodo = () => {
        setTask([]);
    }

    // Handle checked todo
    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
          if (curTask.content === content) {
            return { ...curTask, checked: !curTask.checked };
          } else {
            return curTask;
          }
        });
        setTask(updatedTask);
    };
   

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
                            task.map((curTask) => {
                                return (
                                    <TodoList key={curTask.id} data={curTask.content} checked={curTask.checked} onHandleDeleteTodo={handleDeleteTodo} onHandleCheckedTodo={handleCheckedTodo} />
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