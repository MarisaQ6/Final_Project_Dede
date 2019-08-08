import React from "react";
import "./style.css";
import EntryLogSection from "../EntryLogSection";

function Main() {
  return(
      <div>

    <div className="jumbotron text-center">
    <h1 className="display-4">DeDe</h1>
    <p className="lead">"DeDe" the Designated Driver app that helps you track your social drinking habits, assists in managing your nights out and hooks you up with a designated driver based on your set needs!
    </p>
    <hr className="my-4"/>
    <p>Let "DeDe" help you have a fun night, responsibly!</p>
    {/* <a className="btn btn-primary btn-lg" href="#" role="button">Let's Go!</a> */}
  </div>

    <EntryLogSection/>

  <div className="card text-center">
        <div className="card-header">
          Thank you for using "DeDe"
        </div>
        <div className="card-body">
          <h5 className="card-title">"DeDe" is just for enjoyment and wants to help you have a fun night, responsibly.</h5>
          <p className="card-text">If you feel you have an issue with alcohol addiction we want to help, click the link below for more information and above all, be safe and take care of you first.</p>
          <a href="https://www.aa.org/" target="_blank" className="btn btn-primary">www.aa.org</a>
        </div>
        
      </div>

  
  </div>




  );
}

export default Main;
