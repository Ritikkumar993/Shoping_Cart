import React, { useState } from 'react'

const UserCard = ({users}) => {
    const [showCard,setShowCard] = useState(false);
  return (
        <div className=' p-5'>
            {
                !showCard &&
            <button
            onClick={() => setShowCard(true)}
            className='bg-blue-500 text-white rounded-md p-2 px-5'
            >
                Show 
            </button>
            }
            {showCard &&
                    <button 
                    onClick={() =>setShowCard(false)}
                    className='bg-slate-900 text-white rounded-md p-2 px-5'
                    >
                        Back
                    </button>
            }
            {
                showCard &&

                <div className='flex m-10'>
                    {users.map((user , index)=>(
                        <div key={index} className='p-4 w-[200px] border mr-10 rounded-lg shadow-lg' >
                            <h2>{user.name}</h2>
                            <p>Age: {user.age} </p>
                            <p>Location: {user.location}</p>
                        </div>    
                    ))}
                </div>
            }
        </div>
  )
}

export default UserCard