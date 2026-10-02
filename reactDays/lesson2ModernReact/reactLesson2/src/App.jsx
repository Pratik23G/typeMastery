import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";
import ClickerEffect from "./components/ClickEffect";

function Welcome() {
  return <h2>This is another message Hehehe</h2>;
}

function Button() {
  return <button>Click Here</button>;
}

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Pratik React Journey Lets Go!!</h1>
      <Welcome />
      <Button />
      <ClickerEffect />
    </div>
  );
}

export default App;
