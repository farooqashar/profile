import React, { useState } from "react";
import { GoogleLogIn } from "react-google-login";
import Profile from "./Profile.js";

const clientID =
  "519544500582-2jfk9i7kak8qtni2ku906hbdcrcfh98a.apps.googleusercontent.com";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("Pending Results");

  const onSuccess = (res) => {
    setMessage("Success...");
    setUserName(res.profileObj.name);
  };

  const onFailure = (res) => {
    setMessage("Failed...");
  };

  return (
    <div>
      <h3 className="text-info">{message}</h3>
      {userName ? (
        <Profile name={userName}/>
      ) : (
        <GoogleLogIn
          clientId={clientID}
          buttonText="Sign In"
          onSuccess={onSuccess}
          onFailure={onFailure}
          isSignedIn={true}
        />
      )}
    </div>
  );
};

export default Login;
