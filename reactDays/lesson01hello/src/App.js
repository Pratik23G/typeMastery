import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import AlertMessage from "./components/ConfirmAlert";
function App() {
  return (
    <div className="App">
      <Greet />
      <AlertMessage />
    </div>
  );
}

export default App;
