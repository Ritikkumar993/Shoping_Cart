import React from 'react'

const ProcessData2 = () => {
    const processData = (users) => [
        ...users.map(({name, age, location})=>`Name: ${name}, Age: ${age}, Location: ${location} `)
    ];

    const users=[
        {name:'Ritik',age: 21, location:'patna'},
        {name:'Rahul',age: 21, location:'hajipur'},
        {name:'Rishika',age: 21, location:'kanpur'},
    ]

    console.log(processData(users));
    const arr=processData(users);

    return (
        <div>
            {
                arr.map((i)=>(
                    <div key={i}>
                        <p>{i}</p>
                    </div>
                ))
            }
            
        </div>
    )

}

export default ProcessData2