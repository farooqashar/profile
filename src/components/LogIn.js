import React from 'react';
import { GoogleLogIn } from "react-google-login";

const clientID = "519544500582-2jfk9i7kak8qtni2ku906hbdcrcfh98a.apps.googleusercontent.com"

const Login = () => {

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
  };

    const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢`
    );
  };

    return (
        <div>
    <GoogleLogIn
        clientId={clientID}
        buttonText="Sign In"
        onSuccess={onSuccess}
        onFailure={onFailure}
        isSignedIn={true}
      />
        </div>
    )

};

export default Login;