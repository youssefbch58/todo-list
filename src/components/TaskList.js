import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTask } from '../redux/actions'
import TaskCard from './TaskCard'

const TaskList = () => {
    const  {todos,filter}  = useSelector(state => state  )
    const dispatch = useDispatch()
    console.log(todos)
    return (
        <div>
            <button  onClick={()=>dispatch(filterTask())}  >  {filter?"all":"filter"} </button>
            {
                filter ? 
                todos.filter(task=>task.isDone).map((el,i)=>
                    <TaskCard key={i} task={el} />
                    )
            : 
            todos.map((el,i)=>
            <TaskCard key={i} task={el} />
            )
            }
        </div>
    )
}  

export default TaskList
