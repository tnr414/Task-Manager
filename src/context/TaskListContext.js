import React, {createContext, useState} from 'react'


export const TaskListContext = createContext();
const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {title: 'Read the book', id : 1},
        {title: 'Wash the car', id : 2},
        {title: 'Write some code', id : 3},
    ]);

    const addTask = (title) => {
        setTasks([...tasks, {title, id: Math.floor(Math.random() * 100)}])
    }

    const removeTask = id => {
        setTasks(tasks.filter(task=> task.id !== id))
    }

    const clearTask = ()=> {
        setTasks([]);
    }

    return (
        <TaskListContext.Provider 
            value={{tasks, addTask, removeTask, clearTask}}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;