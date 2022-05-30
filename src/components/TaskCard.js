import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../redux/actions'
import EditTask from './EditTask'
import './TaskCard.css';

const TaskCard = ({task}) => {
    const dispatch = useDispatch()
    return (
        <div className="newDiv">
            <h2 id={task.isDone ?"completed":""}>{task.action}</h2>
            <button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
            <EditTask  task={task} />
            <button onClick={()=>dispatch(completeTask(task.id))} > {task.isDone ? "Undo" : "complete"} </button>

        </div>
    )
}

export default TaskCard
