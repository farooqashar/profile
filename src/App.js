import './App.css';
import Login from "./components/LogIn.js";
import LogOut from "./components/LogOut.js";

function App() {

  return (
    <div className="App">
    <h1>Sign In To Your Google Account!</h1>
    <Login />
    <LogOut />
    </div>
  );
}

export default App;
