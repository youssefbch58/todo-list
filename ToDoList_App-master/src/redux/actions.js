// import { DECREMENT, INCREMENT } from "./actionTypes"

import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER } from "./actionTypes"

// export const inc = () => {
//     return {
//         type:INCREMENT
//     }
// }

// export const dec = () => {
//     return {
//         type:DECREMENT
//     }
// }


export const completeTask = (id) => {
    return {
        type:COMPLETE_TASK,
        payload:id
    }
};

export const deleteTask = (id) => {
    return {
        type:DELETE_TASK,
        payload:id
    }
}

export const addTask = (newTask) => {
    return {
        type:ADD_TASK,
        payload:newTask
    }
}

export const editTask = (editedTask) => {
    return {
        type: EDIT_TASK,
        payload: editedTask,
    }
}


export const filterTask = () => {
    return{
        type:FILTER
    }
}