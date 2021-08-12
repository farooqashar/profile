import React from "react";
import LogOut from "./LogOut.js";

const Profile = ({ name }) => {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <p class="card-text">
            Hello {name}! You are currently logged in to your Google Account!
          </p>
          <LogOut />
        </div>
      </div>
    </div>
  );
};

export default Profile;
