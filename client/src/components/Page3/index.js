import React from "react";
import "./style.css";
import {Link} from 'react-router-dom';
import Main from "../Main";
import API from "../../utils/API";

class Page3 extends React.Component{
    // Main page will enter info and direct to form
    state = {
        drinks:[]
    }


componentDidMount(){
    API.getDrinks()
    .then(res => {
        this.setState({drinks: res.data })
        console.log(this.state.drinks)
    })
}

loadDrinks = () => {
    API.getDrinks()
    .then(res => {
        this.setState({drinks: res.data })
        console.log(this.state.drinks)
    })

}




    render() {
    return(
        <div>

           {this.state.drinks.map(dataFromDb => (
               <div>
               <p>Drink Type: {dataFromDb.drinks}</p>
               <p>Drink ABV: {dataFromDb.abv}</p>
               <p>Drink Calories: {dataFromDb.calories}</p>
               <br/>
                </div>
                
             ))}







        </div>

    )
    }
}

    export default Page3;


