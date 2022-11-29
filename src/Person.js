// with a react function it always going to have this one paramater
// this paramater always going to be an object in a react functional component

// useState is function that returns a piece of state and a function
// to set that state (return as an array)
import { useState } from 'react'

function Person(props) {

    // at top level of function
    // array destructing es6
    const [x, y] = useState('tony')

   
  return (
    <div style={{border:'1px solid', margin:'20px' }}>
      <h1>Name here:{props.name}</h1>
      <p>age here: {props.age}</p>
      <p>eye color: {props.eyeColor ? props.eyeColor :'unknown' }</p>
      <p>friends: {x}</p>
      <p onClick={()=> y('yoyoyo')}>click</p>
    </div>
  );
}

export default Person


