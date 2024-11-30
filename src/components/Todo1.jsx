import React, { useState } from 'react'
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../context/store1';

const Todo1 = () => {

    const [task, setTask] =useState('');
    const [currentTask, setCurentTask] =useState(null);

    const tasks = useSelector((state)=> state.task);
    const dispatch =useDispatch();


    const handelDelete =(id)=>{
        dispatch(deleteTask(id));
    }

    const handelSubmit= (e) =>{
        e.preventDefault();

        if(currentTask !== null){
            dispatch(updateTask(currentTask, task));
            setCurentTask(null);
        }else{
            dispatch(addTask(task));
        }

        return setTask('');
    }

    const handelEdit = (id) =>{
        setTask(tasks[id])
        setCurentTask(id);
    }

    

  return (
    <div className='container border p-16 rounded-md  m-10 shadow-lg'>
        <div className='flex justify-center items-center'>
            <h1>Todo List</h1>
        </div>
        <div className='justify-center items-center'>
            <form onSubmit={handelSubmit}>
                <input 
                type='text'
                value={task}
                placeholder='Add Todos'
                onChange={(e) => setTask(e.target.value)}
                className='p-5 border rounded-md mr-[10px]'                
                />
                <button
                className='p-5 bg-slate-950 text-white rounded-md'
                >
                    {currentTask !==null ?'Update task': 'Add task'}
                </button>
            </form>
            <ul>
                {
                    tasks.map((curTask, index)=>(
                        <li 
                        className='flex'
                        key={index}>
                            <p className='w-[200px]' >{index} : {curTask} </p>
                            
                            <div className='flex'>
                                <MdEdit 
                                    className='text-green-500' 
                                    onClick={()=>{handelEdit(index)}}
                                />
                                <MdDeleteForever 
                                    className='text-red-500 justify-end  mr-[200px]'
                                    onClick={()=>handelDelete(index)}
                                />
                            </div>
                        </li>
                    ))
                }

            </ul>
        </div>
    </div>
  )
}

export default Todo1