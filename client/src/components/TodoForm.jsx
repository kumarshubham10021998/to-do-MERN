import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(text));
        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input  
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
            <button type="submit" className="btn" style={{marginTop:'30px', background:'blue', color:'#ffff', width:'15%',padding:'15px',fontSize:'15px', fontWeight:'bold' }}>
                Add
            </button>
        </form>
    )
}

export default TodoForm;
