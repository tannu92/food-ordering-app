// import Profile from "./Profile";
// import ProfileClass from "./ProfileClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
            Logged In User
            <UserContext.Consumer>
                {({loggedInUser})=><h1>{loggedInUser}</h1>}
            </UserContext.Consumer>
        </div>
        {/* <Profile name={"Tannu"} />
        <ProfileClass /> */}
      </div>
    );
  }
}
export default About;
