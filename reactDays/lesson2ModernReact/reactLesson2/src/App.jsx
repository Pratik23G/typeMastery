import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";
import ClickerEffect from "./components/ClickEffect";
import HelloResponse from "./components/HelloClick";

// import AboutPage from "./components/JsxPageMark";
import { AdminPage } from "./components/AdminPanel";
import { Form } from "./components/LoginForm";
function Welcome() {
  return <h2>This is another message Hehehe</h2>;
}

function Button() {
  return <button>Click Here</button>;
}

const isLoggedIn = false;

const userName = {
  userID: "Pratik23G",
  imageUrl: "/PG.png",
  imageSize: 90,
};

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Pratik React Journey Lets Go!!</h1>
      <Welcome />
      <Button />
      <ClickerEffect />
      <HelloResponse />
      {/* <AboutPage /> */}
      <h2>{userName.userID}</h2>
      <img
        className="avatar"
        src={userName.imageUrl}
        alt={"Photo of " + userName.userID}
        style={{
          width: userName.imageSize,
          height: userName.imageSize,
          borderRadius: userName.imageSize / 2,
        }}
      ></img>
      <div>{isLoggedIn ? <AdminPage /> : <Form />}</div>
    </div>
  );
}

export default App;
