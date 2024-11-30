import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { addTask, deleteTask, updateTask } from '../context/store1';
const Todo = () => {
  const [task, setTask] =useState('');
  const [CurrentTaskI, setCurrentTaskI] = useState(null);

  const tasks = useSelector((state) => state.task);
    
  const dispatch=useDispatch();

    const handelTaskDelete = (id) => {
      return dispatch(deleteTask(id));
    }

    const handelSubmit = (e) =>{
        e.preventDefault();
        if(CurrentTaskI !== null){
          dispatch(updateTask(CurrentTaskI, task));
          setCurrentTaskI(null);
        }
        else{
          dispatch(addTask(task));
        }
        return setTask('');
    }

    const handelEdit = (id) => {
      setTask(tasks[id]);
      setCurrentTaskI(id);
    }
   


  return (
    <div className='container w-[600px] mx-auto mt-[40px] p-16 rounded-md border shadow-lg '>
        <div className='flex justify-center font-semibold'>
            <h1>Todo List:</h1>
        </div>

        <div className='flex flex-col justify-center mt-4'>
            <form onSubmit={handelSubmit}>
                <input 
                type='text' 
                value={task}
                onChange={(e) => setTask(e.target.value)} 
                placeholder='Add new task' 
                className='border mx-[20px] rounded-md px-4 py-2'
                />
                <button 
                className='bg-slate-900 text-white rounded-md px-4 py-2'
                >
                  {CurrentTaskI !== null ? 'Update Task' : 'Add Task'}
                </button>
            </form>
        </div>

        <ul className='flex flex-col justify-center items-center mt-4 '>
          {tasks.map((curTask, index) => {
            return (
              <li className='flex justify-between' key={index}>
                
                  <p className=' w-[200px]'>{index} : {curTask}</p>
               
                  <div className=' flex mr-[200px]'>
                    <MdEdit 
                      className='text-green-500 '
                      onClick={() => handelEdit(index)}
                    >
                      Edit
                    </MdEdit>
                    <MdDeleteForever 
                      className='text-red-500 '
                      onClick={() => handelTaskDelete(index)}
                    />

                  </div>
              </li>
            );
          })}
            
        </ul>
    </div>
  )
}

export default Todo