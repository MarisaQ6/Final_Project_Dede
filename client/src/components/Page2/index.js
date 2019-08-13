import React from "react";
import "./style.css";
import {Link} from 'react-router-dom';
import Main from "../Main";

function Page2(){
    // Main page will enter info and direct to form
    return(
        <div>
            <form>
  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Height</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Height"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Weight</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Weight"/>
    </div>
  </div>
  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
          <label className="form-check-label" for="gridRadios1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
          <label className="form-check-label" for="gridRadios2">
            Female
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
          <label className="form-check-label" for="gridRadios3">
            Non-Binary
          </label>
        </div>
      </div>
    </div>
  </fieldset>
   <div className="form-group row">
    {/* <div className="col-sm-2">Checkbox</div> */}
    <div className="col-sm-10">
      <div className="form-check">
        {/* <input className="form-check-input" type="checkbox" id="gridCheck1"/> */}
        {/* <label className="form-check-label" for="gridCheck1">
          Example checkbox
        </label> */}
      </div>
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <Link to="/pagethree"><button type="submit" className="btn btn-primary">Let's Go!</button></Link>
    </div>
  </div>
</form>


    )
}
export default Page2;