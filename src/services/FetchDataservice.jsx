import React, { useEffect, useState } from 'react'

const FetchDataservice = () => {
    
  const [posts, setPosts] = useState([]);
  const [newpost,setNewPost] = useState({title: '',body:''});

  //Base URL
  const API_URL = 'http://localhost:3001/posts';

  //Get Request
  const fetchposts = () => {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        setPosts(data);
        console.log(data);
    })
    .catch(err => console.error(err));
  };

  //Post Request
  const createPost = () => {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({title: newpost.title, body: newpost.body})
    })
    .then(response => response.json())
    .then(data => {
        console.log('Post created:', data);
        fetchposts();
    })
    .catch(err => console.error(err));
  }

  //Put Request
  const updatePost =(postId) =>{
    fetch(`${API_URL}/${postId}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: postId, title: 'Updated Title', body: 'Updated Body'}),

    })
    .then(response => response.json())
    .then(data => {
        console.log('Post updated:', data);
        fetchposts();
    })
    .catch(err => console.error(err));
     
  }


  //Delete Request
  const deletePost = (postId) =>{
    fetch(`${API_URL}/${postId}`,{
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Post deleted:', data);
        fetchposts();
    })
    .catch(err => console.error(err));
  }


  useEffect(() =>{
    fetchposts();
  }, []);
  return (<div className='mt-[20px] justify-center items-center flex flex-col'>
        <h1>HTTP REQUEST with Real JSON Server using fetch()</h1>
        
        <div>
            <h3 className='mt-[20px]'>Create a New Post</h3>
            <input 
            type='text' 
            placeholder='Title' 
            value={newpost.title}
            onChange={(e) =>setNewPost({...newpost, title: e.target.value})}
            className='mr-[10px] p-5 border rounded-md'
            />
            <input 
            type='text'
            placeholder='Body'
            value={newpost.body}
            onChange={(e) => setNewPost({...newpost, body: e.target.value})}
            className='mr-[10px] p-5 border rounded-md'
            />
            <button 
            onClick={createPost}
            className='mt-[10px] p-5 bg-slate-800 text-white rounded-sm w-40'

            >
                Create Post
            </button>
        </div>

        <div className="mt-[20px] justify-center items-center ">
        <h3>All Posts</h3>
        {posts.map((post) => (
          <div key={post.id} className="border p-4 px-10 py-10 mt-[20px] ">
            <h4 className='font-bold'>{post.title}</h4>
            <p>{post.body}</p>
            <button onClick={() => {updatePost(post.id)}} className='mt-[10px] mr-[190px] bg-green-800 text-white rounded-sm w-20'>
              Update
            </button>
            <button onClick={() =>{deletePost(post.id)}} className='mt-[10px] bg-red-800 text-white rounded-sm w-20'>
              Delete
            </button>
          </div>
        ))}
      </div>


    </div>
  )
}

export default FetchDataservice