import React, {Component } from "react";
import "./style.css";
import {Link} from 'react-router-dom';
import Main from "../Main";

class Page2 extends Component {
    // Main page will enter info and direct to form
    state = {
      gender: "",
      genderConst: 0,
      weight: 0,
      weightCalc: 0,
      gramsOfAlcohol: 0,
      numberDrinks: 0,
      time: 0,
      bac: 0,
      finalCal: 0
    }

    handleInputChangeGender = event => {
     this.setState({gender: event.target.value});
     
      if (this.state.gender === "female"){
        console.log("female")
        this.setState({ genderConst: 0.55 })
  
      }  else if (this.state.gender === "male") {
        console.log("male")
        this.setState({ genderConst: 0.68 })
    } else {
      console.log("other")
      this.setState({ genderConst: 0.62 })
    }
      }
  
      handleInputChangeWeight= event => {
        this.setState({weight: event.target.value});
                 
         }

         handleInputChangeNumberDrinks= event => {
          this.setState({numberDrinks: event.target.value});
                     
           }

           handleInputChangeTime= event => {
            this.setState({time: event.target.value});
                       
             }
   
    

  //  calculateBAC = () => {
  //     let genderConst = this.state.genderConst;
  //     let weightCalc = this.state.weight * 454;
  //     let gramsOfAlcohol = this.state.numberDrinks * 14;
  //     let bac = parseFloat((gramsOfAlcohol / (weightCalc * genderConst))* 100);
  //     let results = bac - (document.getElementById("time_elapsed").value * 0.015)
  //     return results
  //   }



    handleFormSubmit = event => {
      event.preventDefault()
      // alert("form works..!")
      // console.log(this.state.gender)

    //   if (this.state.gender === "female"){
    //     console.log("female")
    //     this.setState({ genderConst: 0.55 })
  
    //   }  else if (this.state.gender === "male") {
    //     console.log("male")
    //     this.setState({ genderConst: 0.68 })
    // } else {
    //   console.log("other")
    //   this.setState({ genderConst: 0.62 })
    // }


    // this.calculateBAC()


    // this.setState({
     
    //   finalCal:this.state.bac

    // })
    
    // this.setState({
    //   weightCalc: this.state.weight * 454,
    //   gramsOfAlcohol: this.state.numberDrinks * 14
    //   // bac: this.state.gramsOfAlcohol / (this.state.weightCalc * this.state.genderConst)

    // })
    
    this.setState({
      weightCalc: this.state.weight * 454,
      gramsOfAlcohol: this.state.numberDrinks * 14,
      bac: parseFloat((this.state.gramsOfAlcohol / (this.state.weightCalc * this.state.genderConst))* 100)

    })
    
    // this.setState({
    //   // weightCalc: this.state.weight * 454,
    //   // gramsOfAlcohol: this.state.numberDrinks * 14
    //   finalCal: this.state.bac - (this.state.time * 0.015)

    // })
    
    // alert(this.state.weightCalc)

    console.log("genderConst ", this.state.bac) 
    console.log("male", this.state.gender)
    console.log("female", this.state.gender)
    console.log("other", this.state.gender)
    console.log("weightCalc", this.state.weight)
    console.log("gramsOfAlcohol", this.state.numberDrinks)
    console.log("bac", this.state.bac)






      // this.setState({
      //   gender: "",
      //   weight: "",
      //   numberDrinks: "",
      //   time: ""
      // })


  }




render () {
    return(
        <div>
    
            <form>
                    Gender: <br></br>
                    <select id="gender" value={this.state.gender} onChange={this.handleInputChangeGender}>
                        <option value="female" name="gender">Female</option>
                        <option value="male" name="gender">Male</option>
                        <option value="other" name="gender">Other</option>
                    </select>
                     
                    <br></br> Weight: <br></br>
                    <input 
                    type="number" 
                    id="weight" 
                    value={this.state.weight}
                    name="weight"
                    placeholder="140"
                    onChange={this.handleInputChangeWeight}
                    /> lbs
                    <br></br>Number of standard drinks:<br></br>
                    <input 
                    type="number" 
                    id="drink_count" 
                    value={this.state.numberDrinks}
                    name="numberDrinks"
                    placeholder="1"
                    onChange={this.handleInputChangeNumberDrinks}
                    />
                    <br></br>Amount of time elapsed:<br></br>
                    <input 
                    type="number" 
                    id="time_elapsed" 
                    value={this.state.time}
                    name="time"
                    placeholder="1"
                    onChange={this.handleInputChangeTime}
                    /> hours
                    
                    <br></br>

                    <input onClick={this.handleFormSubmit} type="button" id="go" value="Submit"/><br></br>
              </form>

              <p>{this.state.bac}</p>
              <br></br>
              <Link to="/pagethree"><button className="btn btn-success loginbtn" type='submit'>
							Let's Go!
						</button></Link>

          </div>


    )
}
}    

export default Page2;