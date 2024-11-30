import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axiosservice = () => {

    const [posts, setPost] =useState([]);
    const [newPost, setNewPost] =useState({title: '', body: ''});

    const API_URL = "http://localhost:3001/posts";



    //Get Request
    const fetchPosts = async () => {
        try{
            const res =await axios.get(API_URL);
            setPost(res.data);
        }
        catch(error){
            console.error("Error messge", error);
        }
    }

    //Post Request
    const createPost = async () => {
        try{
            const response =await axios.post(API_URL, {
                title: newPost.title,
                body: newPost.body,
            });
            console.log("Post created:",response.data);
            fetchPosts();
        }
        catch(error){
            console.error("Error creating post:", error);
        }
    };

    //put Request
    const updatePost = async (postId) => {
        try{
            const response =await axios.put(`${API_URL}/${postId}`,{
                id: postId,
                title: 'Updated Title',
                body: 'Updated Body',
            })
            console.log("Post updated:", response.data);
            fetchPosts();
        }
        catch(error) {
            console.error("Error updating post: ", error);
        }
    }

    //Delete Request
    const deletePost =async (postId) => {
        try{
            const response = await axios.delete(`${API_URL}/${postId}`);
            console.log("Post deleted:", response.data);
            fetchPosts();
        }
        catch(error){
            console.error("Error deleting post:", error);
        }
    }
  
    useEffect(() => {
        fetchPosts();
    },[]);

  return (<div className='mt-[20px] justify-center items-center flex flex-col'>
        <h1 className='mt-[20px]'>Axios Service</h1>
       <div>
            <h3 className='mt-[20px]'>Create New Post</h3>
            <input
            type="text"
            placeholder='Title'
            value={newPost.title}
            onChange={(e) => setNewPost({...newPost, title: e.target.value })}
            className='mr-[10px]  rounded-md border p-5'
            />
            <input
            type="text"
            placeholder='Body'
            value={newPost.body}
            onChange={(e) => setNewPost({...newPost, body: e.target.value })}
            className='mt-[20px] p-5 rounded-lg border'
            />

            <button
                onClick={createPost}
                className="mt-[20px] bg-blue-500 rounded-md p-5 "
            >
                Creat Post
            </button>
        </div>

        <div className='mt-[20px] justify-center items-center flex flex-col'>
            <h3>All Posts</h3>
            {posts.map((post) => (
                <div key={post.id} 
                    className='border px-20  py-10 rounded-lg'
                >  
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <button 
                    onClick={()=> updatePost(post.id)}
                    className="mt-[10px] mr-[190px] bg-green-500 rounded-md px-4 py-2 text-white'"
                    >
                        Update
                    </button>
                    <button
                    onClick={()=> deletePost(post.id)}
                    className='mt-[10px] bg-red-500 rounded-md px-4 py-2 text-white'
                    >
                        Delete
                    </button>
                </div>
                

            ))

            }
        </div>
  </div>
  )
}

export default Axiosservice

