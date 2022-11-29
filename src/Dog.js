// with a react function it always going to have this one paramater
// this paramater always going to be an object in a react functional component
function Dog(props) {
    return (
      <div style={{border:'1px solid', margin:'20px' }}>
        <h1>DOG Name here:{props.name}</h1>
        <p>age here: {props.age}</p>
      </div>
    );
  }
  
  export default Dog
  