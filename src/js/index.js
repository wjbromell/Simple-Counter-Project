//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import 'bootstrap';

import './icon.js';

// include your styles into the webpack bundle
import "../styles/index.css";


function SimpleCounter(props){
    return (<div className="bigCounter">
        <div className="calendar">
        <i className="fa-solid fa-clock"></i>
        </div>
        <div className="four">{props.digitFour %10}</div>
        <div className="three">{props.digitThree %10}</div>
        <div className="two">{props.digitTwo %10}</div>
        <div className="one">{props.digitOne %10}</div>
    </div>);
} 
SimpleCounter.proptypes = {
    digitFour: PropTypes.number,
    digitthree: PropTypes.number,
    digittwo: PropTypes.number,
    digitone: PropTypes.number
};

let counter = 0;
setInterval(function(){
    const four = Math.floor(counter/10000);
    const three = Math.floor(counter/1000);
    const two = Math.floor(counter/100);
    const one = Math.floor(counter/10);
    console.log(four, three, two, one);
    //render your react application
    counter++;
    ReactDOM.render(
    <SimpleCounter digitOne={one} digitTwo={two} digitthree={three} digitfour={four} />,
    document.querySelector("#app")
    );
},1000);