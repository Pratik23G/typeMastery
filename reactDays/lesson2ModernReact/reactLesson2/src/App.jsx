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
import { MyButton } from "./components/TwoEeventsClick";
import { CounterButton } from "./components/CounterWork";
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

const products = [
  { title: "Apple", id: 1, isTop3: true },
  { title: "Asus", id: 4, isTop3: false },
  { title: "Dell", id: 10, isTop3: false },
  { title: "Nvidia", id: 2, isTop3: true },
];

//use of destructuring to refactor the Display instead of passing props

const Display = ({ countVal }) => <div>{countVal}</div>;
function ShoppingList() {
  const listItemsLog = products.map((product) => (
    <li key={product.id} style={{ color: product.isTop3 ? "green" : "orange" }}>
      {product.title}
    </li>
  ));

  return <ul>{listItemsLog}</ul>;
}

//same concept for refactoring using destructure method can be applied here too
const Button2 = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

function App() {
  // const [count, setCount] = useState(0);

  const [click, setClick] = useState(0);
  const [countVal, setVal] = useState(0);
  console.log("Rendering value before");

  const increaseOne = () => {
    console.log("Before increase");
    setVal(countVal + 1);
  };
  const setZero = () => {
    console.log("Before setting Zero");
    setVal(0);
  };
  const decreaseOne = () => {
    console.log("After decrease");
    setVal(countVal - 1);
  };

  function userClick() {
    setClick((prev) => prev + 1);
  }
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
      <ShoppingList />
      <MyButton />
      <CounterButton />
      <h1>Clicking buttons updating together</h1>
      <Clickbutton click={click} onClick={userClick} />
      <Clickbutton click={click} onClick={userClick} />
      <Display countVal={countVal} />

      <Button2 onClick={increaseOne} text="plus" />
      <Button2 onClick={setZero} text="zero" />
      <Button2 onClick={decreaseOne} text="minus" />
    </div>
  );
}

function Clickbutton({ click, onClick }) {
  return <button onClick={onClick}>Clicked Now {click} times</button>;
}

export default App;
