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
import MessageNamaste from "./components/Message";
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
      {/* Now we will see what gets rendered on the screen using state method */}
      {/* 
      Its a little diff than props as props are immutable and are mostly passed
      to the component whereas the state gets passed within the component
      */}
      <MessageNamaste />
    </div>
  );
}

export default App;
