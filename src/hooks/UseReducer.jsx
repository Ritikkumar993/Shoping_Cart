import React, { useReducer } from 'react';

const initialState = {
    items: [
        { id: 1, name: 'Apple (1kg)', price: 120, quantity: 0 },
        { id: 2, name: 'Banana (12pcs)', price: 60, quantity: 0 },
    ],
    total: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: state.items.map(item => {
                    if(item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                }),
                total: state.total + action.payload.price
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                }),
                total: state.total - action.payload.price
            };
        default:
            return state;
    }
};


function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAddItem = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    const handleRemoveItem = (item) => {
        if (item.quantity > 0) {
            dispatch({ type: 'REMOVE_ITEM', payload: item });
        }
    };

    return (
        <div>

            <div>
                <h1>Shoping WebSite</h1>
                {
                    state.items.map((item)=>(
                        <div key={item} className='pl-10'>
                            <p>
                                {item.name} 
                                <button 

                                    className='bg-slate-950 text-white rounded-md p-1 m-5 '
                                    onClick={() => handleAddItem(item)}
                                >
                                    Add to cart
                                </button>
                            </p>
                            
                        </div>
                    ))
                }

            </div>

            <h1>Cart</h1>
            <ul>
                {state.items.map(item => (
                    <div>
                        {
                            item.quantity !== 0? (
                            
                            <li key={item.id}>
                                
                                {item.name}    
                                <span className='p-[10px]'>
                                    {item.price}
                                </span>
                                
                                
                                <button className='p-2' onClick={() => handleRemoveItem(item)}>-</button> 
                        

                                {item.quantity}
                                
                                
                                <button className='p-2' onClick={() => handleAddItem(item)}>+</button> 
                            
                                    = ₹
                                {item.price * item.quantity}
                            </li>
                            )
                            :
                            ''
                        }
                    </div>
                ))}
            </ul>
            <h3>Total: ₹{state.total}</h3>
        </div>
    );
}

export default UseReducer;