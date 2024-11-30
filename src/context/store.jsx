
import { createStore } from 'redux';

const ADD_TASK = 'task/add';
const DELETE_TASK = 'task/delete';
const UPDATE_TASK = "task/update";

 
const initialState = {
    task:[]
}

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            return { 
                ...state,
                task: [...state.task, action.payload],
            }
        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask, index) => {
                return index !== action.payload;
            })
            return {
                ...state,
                task: updatedTask,
            }
        case UPDATE_TASK:
            const taskAfterUpdate = state.task.map((curTask, index) => 
                index === action.payload.index ? action.payload.newTask : curTask
            );
            return {
                ...state,
                task: taskAfterUpdate,
            }
        default: 
            return state;
    }
};

export const store = createStore(taskReducer);
console.log(store);


export const addTask = (data) => {
    return { type: ADD_TASK, payload: data};
}

export const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id};
}

export const updateTask = (index, newTask) => {
    return { type: UPDATE_TASK, payload:{index, newTask}};
}





// console.log('initial state', store.getState());


// store.dispatch(addTask("Learn Nextjs"));
// store.dispatch(addTask("Learn Reactjs"));
// store.dispatch(addTask("Learn Nextjs"));
// store.dispatch(addTask("Learn Nextjs"));
// store.dispatch(addTask("Learn Nextjs"));
// console.log('updated state', store.getState());

// store.dispatch(addTask("Learn DSA"));
// console.log('updated state', store.getState());


// store.dispatch(deleteTask(1));
// console.log(' state after delete', store.getState());



