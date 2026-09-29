import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import AlertMessage from "./components/ConfirmAlert";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div className="App">
      <Greet />
      <AlertMessage />
      <Welcome />
    </div>
  );
}

export default App;
