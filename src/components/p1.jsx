import axios from 'axios';
import React, { useEffect, useState } from 'react'

const P1 = () => {
    const [posts, setPosts] =useState([]);
    const [newpost, setNewPost] = useState({name:''});
   

    // const API='https://jsonplaceholder.typicode.com/users';
    const API='http://localhost:3001/posts';

    const fetchRequest = async () => {
        try{

            const res= await axios.get(API);
            console.log(res.data);
            setPosts(res.data);
        }
        catch(error){
            console.error(error);
        }
    }


    const addRequest = async ()=>{
        try{
            const res= await axios.post(API, {
                name: newpost.name,
            });
            console.log(res.data);

            setPosts((prevPosts) => [...prevPosts, res.data]);
            setNewPost({name:''});
        }
        catch(error){
            console.log(error);
        }

    }

    const deleteRequest =async (postId) =>{
        try{
            axios.delete(`${API}/${postId}`);
        
            setPosts(posts.filter((post) => post.id !== postId));
        }
        catch(error){
            console.error(error);
        }
    }

    useEffect(()=> {
        fetchRequest();
    },[]);
  return (
    <div>
        <div>
            <input  
                type='text'
                value={newpost.name}
                placeholder='Add task'
                onChange={(e) => setNewPost({...newpost, name: e.target.value })}
            />
            <button
                onClick={addRequest}
                className='bg-slate-950 text-white'
            >
                Add Post
            </button>
        </div>
        {
            posts.map((item) => (
                <div key={item.id}>
                   <p>
                    {/* {item.title} */}
                    {item.name}
                    </p> 
                    {/* <p>{item.body}</p>/// */}
                    <button 
                    className='bg-slate-900 text-white'
                    onClick={() => deleteRequest(item.id)}>
                        Delete
                    </button>
                </div>
            ))
        }
    </div>
  )
}

export default P1