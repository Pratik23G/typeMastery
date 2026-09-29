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
      <Greet />
      <AlertMessage />
      <Welcome />
      <Hello />
      <CallUser />
      <CheckStatus />
      <HasCheckedStatus />
    </div>
  );
}

export default App;
