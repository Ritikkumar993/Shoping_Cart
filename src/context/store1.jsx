import {createStore} from 'redux';

const ADD_TASK ='task/add';
const DELETE_TASK = 'task/delete';
const UPDATE_TASK ='task/update';

const initialState = {
    task: []
}

const taskReducer =(state = initialState, action) => {
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                task:[...state.task, action.payload],                
            }
        case DELETE_TASK:
            const updated = state.task.filter((curTask, index)=>{
                return index !== action.payload;
            })
            return {
                ...state,
                task: updated,
            }

        case UPDATE_TASK:
            const updatedTask = state.task.map((curTask, index)=> {
                return index === action.payload.index? action.payload.newTask:curTask;
            })
            return {
                ...state,
                task:updatedTask,
            }

        default:
            return state;
    
    }
}

export const store1=createStore(taskReducer);

export const addTask=(data)=>{
    return {type: ADD_TASK, payload: data}
}

export const deleteTask=(id)=>{
    return {type: DELETE_TASK, payload: id}
}

export const updateTask = (index, newTask) =>{
    return {type: UPDATE_TASK, payload:{index, newTask}};
}

