
import { MdDeleteForever } from "react-icons/md";
import { MdCheck } from "react-icons/md";

export const TodoList = ({
    data,
    checked,
    onHandleDeleteTodo,
    onHandleCheckedTodo,
  }) => {
    return (
      <li className="todo-item">
        <span className={checked ? "checkList" : "notCheckList"}>{data} </span>
        <input type="text" />
        <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
          <MdCheck />
        </button>
        <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
          <MdDeleteForever />
        </button>
      </li>
    );
  };