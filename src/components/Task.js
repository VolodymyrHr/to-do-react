import React from 'react'

const Task = (props) => {
    const task = props.task;
    (task.done)? task.checked = "checked": task.checked = "";

    return (<li className="task">
                <input id={task.id} type="checkbox" name="list-one" value="true" checked={task.done}/>
                <label htmlFor={task.id}>{task.name}</label>
                <button>
                    <i className="fa fa-times"></i>
                </button>
            </li>
            );
}

export default Task;