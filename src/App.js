import './App.css';
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";

function App() {

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

  return (
    <div className="App">
    <LogIn />
    <LogOut />
    </div>
  );
}

export default App;
