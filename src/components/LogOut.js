import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";

const clientID =
  "519544500582-2jfk9i7kak8qtni2ku906hbdcrcfh98a.apps.googleusercontent.com";

const LogOut = () => {
  const [status, setStatus] = useState("Logged In");

  const onSuccess = (res) => {
    setStatus("Logged Out");
  };

  return (
    <div>
      <h3 className="text-info">{status}</h3>
      <GoogleLogout
        clientId={clientID}
        buttonText="Sign Out"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
};

export default LogOut;
