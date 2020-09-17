import React from 'react'

import Task from './Task'

const TaskList = (props) => {
    return (
        <ul className="tasks">
            {props.tasks.map((t, i) => <Task key={i} task={t}/>)}
        </ul>
    )
}


export default TaskList;