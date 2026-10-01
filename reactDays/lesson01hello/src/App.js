import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import AlertMessage from "./components/ConfirmAlert";
import Welcome from "./components/Welcome";
import {
  Hello,
  CallUser,
  CheckStatus,
  HasCheckedStatus,
} from "./components/Hello";
function App() {
  return (
    <div className="App">
      <Greet name="Pratik Gurung!!" heroName="IronMan">
        <p>This is Children Props</p>
      </Greet>
      <Greet name="Clark" heroName="SuperMan">
        <button>Actions</button>
      </Greet>
      <Greet name="Dianna" heroName="WonderWoman" />
      <AlertMessage />
      <Welcome name="Pamu Gurung" heroName="SleepingMonk" />
      <Welcome name="Khem Gurung" heroName="Hulk" />
      <Welcome name="Robin Van Persie" heroName="Footballer" />
      <Hello />
      <CallUser />
      <CheckStatus />
      <HasCheckedStatus />
    </div>
  );
}

export default App;
