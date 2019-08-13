import React from "react";
import "./style.css"

function Header() {
  return (
    <div className="jumbotron text-center">
    <h1 className="display-4">DeDe</h1>
    <p className="lead">"DeDe" the Designated Driver app that helps you track your social drinking habits, assists in managing your nights out and hooks you up with a designated driver based on your set needs!
    </p>
    <hr className="my-4"/>
    <p>Let "DeDe" help you have a fun night, responsibly!</p>
    {/* <a className="btn btn-primary btn-lg" href="#" role="button">Let's Go!</a> */}
  </div>
    
  );
}

export default Header;
