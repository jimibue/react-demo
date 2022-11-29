import Dog from "./Dog";
import Person from "./Person";

const person1 = { name: "Timmy", age: 34 };
const person2 = { name: "john", age: 24 };
const person3 = { name: "Jill", age: 54 };

// This a 'component' a functional component
// what this function return is what will be rendered to the dom
function Demo1() {
  return (
    <div className="bordered">
      <h1>array of jsx</h1>
      {[<p>jsx 1</p>, <p>jsx 2</p>]}

      <h1>Made a change</h1>
      <p>1 + 1 = {1 + 1}</p>

      <h1>
        Hello {person1.name} my age is {person1.age}
      </h1>
      <h1>
        Hello {person2.name} my age is {person2.age}
      </h1>

      {Person(person3)}
      <h1>as array of components</h1>
      {[Person(person1), Person(person2), Person(person3)]}
  

      <h1>DOES THIS WORK?</h1>
      <Person name={person1.name} age={person1.age} />
      <Person name={'JIM'} age={12} />
      <Person name={'DANDY'} age={12} eyeColor={'blue'}/>
      <Dog name='lars' age={12}/>
    </div>
  );
}

export default Demo1;