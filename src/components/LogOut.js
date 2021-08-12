import React from 'react';
import { GoogleLogout } from "react-google-login";

const clientID = "519544500582-2jfk9i7kak8qtni2ku906hbdcrcfh98a.apps.googleusercontent.com"

const LogOut = () => {

  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

    return (
        <div>
      <GoogleLogout
        clientId={clientID}
        buttonText="Sign Out"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
        </div>
    )

};

export default LogOut;