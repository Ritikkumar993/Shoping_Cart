import React, {useState} from 'react';

const UserForm = () => {
    const [submiT,setSubmit] =useState(false);
    const [formData, setFormData] =useState({
        username: '',
        email: '',
        password: '',
    });


    const [error, setError] =useState({});

    const handelChange=(e) => {
        const {name, value} = e.target;
        setFormData({...formData,  [name]: value }) ;

    }

    const validate= () =>{
        const newErrors={};
        if(!formData.username.trim()){
            newErrors.username = 'User is Required';
        }

        if(!formData.email.trim()){
            newErrors.email='Email is Required';
        }
        else if(!/^[^\s]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
            newErrors.email ='Invalid Email format';
        }

        if(!formData.password.trim()){
            newErrors.password='Password is Required';
        }
        else if(!formData.password.length > 6){
            newErrors.password = 'Password length must be at least 6 character ';
        }
        return newErrors;
    }

    const handelSubmit = (e) =>{
        e.preventDefault();
        const formError=validate();
        if(Object.keys(formError).length > 0){
            setError(formError);
        }
        else{
            setError({});
            alert('form submited successfully!')
        }
    }


    return (
            <div className='maxw-[400px]  justify-center items-center m-10 '>
                <form onSubmit={handelSubmit}>
                    <div>
                        <label>Username: </label>
                        <br/>
                        <input 
                         type='text'
                         name='username'
                         value={formData.username}
                         onChange={handelChange}
                         placeholder='Enter username'
                          className='p-2 rounded-md border'
                        /> 

                    </div>
                    {error.username && 
                        <p>{error.username}</p>
                    }
                    <div>
                        <label>Email: </label>
                        <br/>
                        <input 
                         type='email'
                         name='email'
                         value={formData.email}
                         onChange={handelChange}
                         placeholder='Enter email'
                          className='p-2 rounded-md border'
                        /> 
                        {error.email && 
                        <p>{error.email}</p>
                        }

                    </div>
                    <div>
                        <label>password: </label>
                        <br/>
                        <input 
                         type='password'
                         name='password'
                         value={formData.password}
                         onChange={handelChange}
                         placeholder='Enter password'
                         className='p-2 rounded-md border'
                        />
                        {error.password && 
                        <p>{error.password}</p>
                        }
 

                    </div>
                    <button
                        type='submit'
                        className='bg-slate-900 text-white rounded-md p-2'
                        onClick={() =>setSubmit(true)}
                    >
                        Register
                    </button>

                </form>
                <div>
                    {submiT?(
                        <div>
                        {formData.username}
                        <br/>
                        {formData.email}
                        </div>
                    ): ''}
                </div>

            </div>


    )

}

export default UserForm;

// import React, { useState } from 'react';

// const UserForm = () => {
//     const [submiT, setSubmit] = useState(false);
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//     });

//     const [error, setError] = useState({});

//     const handelChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const validate = () => {
//         const newErrors = {};

//         if (!formData.username.trim()) {
//             newErrors.username = 'Username is required';
//         }

//         if (!formData.email.trim()) {
//             newErrors.email = 'Email is required';
//         } else if (!/^[^\s]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//             newErrors.email = 'Invalid email format';
//         }

//         if (!formData.password.trim()) {
//             newErrors.password = 'Password is required';
//         } else if (formData.password.length < 6) {
//             newErrors.password = 'Password length must be at least 6 characters';
//         }

//         if (!formData.confirmPassword.trim()) {
//             newErrors.confirmPassword = 'Confirm Password is required';
//         } else if (formData.password !== formData.confirmPassword) {
//             newErrors.confirmPassword = 'Passwords do not match';
//         }

//         return newErrors;
//     };

//     const handelSubmit = (e) => {
//         e.preventDefault();
//         const formError = validate();
//         if (Object.keys(formError).length > 0) {
//             setError(formError);
//         } else {
//             setError({});
//             alert('Form submitted successfully!');
//         }
//     };

//     return (
//         <div className="max-w-[400px] justify-center items-center m-10">
//             <form onSubmit={handelSubmit}>
//                 <div>
//                     <label>Username: </label>
//                     <br />
//                     <input
//                         type="text"
//                         name="username"
//                         value={formData.username}
//                         onChange={handelChange}
//                         placeholder="Enter username"
//                         className="p-2 rounded-md border"
//                     />
//                 </div>
//                 {error.username && <p>{error.username}</p>}

//                 <div>
//                     <label>Email: </label>
//                     <br />
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handelChange}
//                         placeholder="Enter email"
//                         className="p-2 rounded-md border"
//                     />
//                     {error.email && <p>{error.email}</p>}
//                 </div>

//                 <div>
//                     <label>Password: </label>
//                     <br />
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handelChange}
//                         placeholder="Enter password"
//                         className="p-2 rounded-md border"
//                     />
//                     {error.password && <p>{error.password}</p>}
//                 </div>

//                 <div>
//                     <label>Confirm Password: </label>
//                     <br />
//                     <input
//                         type="password"
//                         name="confirmPassword"
//                         value={formData.confirmPassword}
//                         onChange={handelChange}
//                         placeholder="Confirm password"
//                         className="p-2 rounded-md border"
//                     />
//                     {error.confirmPassword && <p>{error.confirmPassword}</p>}
//                 </div>

//                 <button
//                     type="submit"
//                     className="bg-slate-900 text-white rounded-md p-2"
//                     onClick={() => setSubmit(true)}
//                 >
//                     Register
//                 </button>
//             </form>

//             <div>
//                 {submiT && (
//                     <div>
//                         {formData.username}
//                         <br />
//                         {formData.email}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default UserForm;
