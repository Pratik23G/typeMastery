import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";

function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

// passing the data using the props method so
// it renders value for each square from parent component to its child

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

/* 
because we need to make sure that the square components to remember that once it 
got clicked it needs to be marked with X, so remember of store information of 
clicking event we use useState

*/
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Board />
    </>
  );
}

export default App;
