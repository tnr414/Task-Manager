import React, { useContext, useState } from 'react'
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {

    const {addTask, clearTask} = useContext(TaskListContext);
    const [title, setTitle] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        addTask(title);
        setTitle('');
    }

    const handleChange = (e)=> {
        setTitle(e.target.value);
        
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input 
            type='text'
            className='task-input'
            value={title}
            placeholder='Add Task...'
            required
            onChange={handleChange}
            />
            <div className='buttons'>
                <button type='submit' className='btn add-task-btn'>
                    Add Task
                </button>
                <button onClick={clearTask} className='btn clear-btn'>
                    clear
                </button>
            </div>
        </form>
    )
}

export default TaskForm
