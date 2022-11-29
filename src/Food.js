import React, {useState} from 'react'

function Food (props){
    // useState general syntax
    // const [state, setState] = useState(initialState)
    const [count, setCount] = useState(0)

    const decrementCount = ()=> {
        setCount(count -1)
    }

    function formatName(str){
        // this is string
        // return `----${str}-----`
        // this is jsx
        return <p>{str}</p>
    }

    return (
     <div className='bordered'>
         <h1>{formatName(props.name)}</h1>
         <p>order count is: {count}</p>
         <button onClick={() =>  setCount(count +1)}>+ add to order</button>
         <button onClick={decrementCount}>- remove from</button>
         <button onClick={()=> props.foo(props.name)}>set favorite</button>
     </div>
    )
 }

 export default Food

