import "./App.css";
import Demo1 from "./Demo1";
import FavoriteFoods from "./FavoriteFoods";

// This a 'component' a functional component
// what this function return is what will be rendered to the dom
function App() {
  return (
    <div className="App">
      {/* <Demo1 /> */}
      <FavoriteFoods />
    </div>
  );
}

export default App;
