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

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

//The above examples were simple what if have multiple states? lEts see an example with
//Left arrow and Right Arrow

function App() {
  // const [count, setCount] = useState(0);

  const [click, setClick] = useState(0);
  const [countVal, setVal] = useState(0);
  console.log("Rendering value before");

  const setToValue = (newValue) => {
    setVal(newValue);
  };

  // const increaseOne = () => {
  //   console.log("Before increase");
  //   setVal(countVal + 1);
  // };
  // const setZero = () => {
  //   console.log("Before setting Zero");
  //   setVal(0);
  // };
  // const decreaseOne = () => {
  //   console.log("After decrease");
  //   setVal(countVal - 1);
  // };

  function userClick() {
    setClick((prev) => prev + 1);
  }

  //left arrow and right arrow since both have useState initialized to 0
  // we can do something like this
  // here we use our previous knowledge of destructuring technique here
  // for left and right definition to set Values as 0
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const setLeft = (value) => setClicks({ ...clicks, left: value });
  const setRight = (value) => setClicks({ ...clicks, right: value });

  //lets add a table empty array to remember the keyStrokes

  const [allClicks, setAll] = useState([]);

  //lets us keep track of the state and how many times the button is pressed
  // using total

  //
  const total = clicks.left + clicks.right;

  //this code right here can be written much elegently
  // using object spreads in react 2018 introduction
  const leftClick = () => {
    setAll(allClicks.concat("L"));
    console.log("left before: ", clicks.left);
    setLeft(clicks.left + 1);
    console.log("left after clicks", clicks.left);
    // setTotal(clicks.left + clicks.right);
  };

  //same for rightClick too
  const rightClick = () => {
    setAll(allClicks.concat("R"));
    console.log("right before: ", clicks.right);
    setRight(clicks.right + 1);
    console.log("right after clicks", clicks.right);
    // setTotal(updateRight + clicks.right);
  };

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

      <Button2 onClick={() => setToValue(countVal + 1)} text={"Plus"} />
      <Button2 onClick={() => setToValue(0)} text={"Zero"} />
      <Button2 onClick={() => setToValue(countVal - 1)} text={"Minus"} />
      <div>
        {clicks.left}
        <button onClick={leftClick}>left</button>
        <button onClick={rightClick}> right </button>
        {clicks.right}
        <p>{allClicks.join(" ")}</p>
        <p>total {total} </p>
      </div>

      <History allClicks={allClicks} />
    </div>
  );
}

function Clickbutton({ click, onClick }) {
  return <button onClick={onClick}>Clicked Now {click} times</button>;
}

export default App;
