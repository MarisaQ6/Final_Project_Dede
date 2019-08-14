import React, { Component } from "react";
import "./style.css";
import { Link } from 'react-router-dom';
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
        let genderValueTemp = event.target.value
        let genderTemp = 0
        if (genderValueTemp === "female") {
            genderTemp = 0.55
        } else if (genderValueTemp === "male") {
            genderTemp = 0.68
        } else {
            genderTemp = 0.62
        }
        this.setState({ genderConst: genderTemp })
    }
    handleInputChangeWeight = event => {
        this.setState({ weight: event.target.value });
    }
    handleInputChangeNumberDrinks = event => {
        this.setState({ numberDrinks: event.target.value });
    }
    handleInputChangeTime = event => {
        this.setState({ time: event.target.value });
    }
    handleFormSubmit = event => {
        event.preventDefault()
        let genderConst = this.state.genderConst;
        let weightCalc = this.state.weight * 454;
        let gramsOfAlcohol = this.state.numberDrinks * 14;
        let bac = parseFloat((gramsOfAlcohol / (weightCalc * genderConst)) * 100);
        let results = bac - (this.state.time * 0.015)
        this.setState({
            bac: results
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <form>
                            <select id="gender" class="custom-select" onChange={this.handleInputChangeGender}>
                                <option selected>Select Gender</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                                                       <input
                                type="number"
                                id="weight"
                                value={this.state.weight}
                                name="weight"
                                placeholder="140"
                                onChange={this.handleInputChangeWeight}
                            /><label for="weight">Weight</label>
                            <br></br>Number of drinks:<br></br>
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
                            <input onClick={this.handleFormSubmit} type="button" id="go" value="Submit" /><br></br>
                        </form>
                        <p>{this.state.bac}</p>
                        <br></br>
                        <Link to="/pagethree"><button className="btn btn-success loginbtn" type='submit'>
                            DeDe's Driving!
                        </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Page2;
