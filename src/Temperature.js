import React , {useState} from "react";
export default function Temperature(props){
    const [unit ,setUnit] = useState("celsius");

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");

    }

    if (unit === "celsius"){
    return <div className="Temperature" >
        <span className="temp">{props.defaultTemperature}</span>
        <span className="units">°C | °<a href="/" onClick={showFahrenheit}>F</a></span>
    </div>}
    else {
        let fahrenheit = Math.round((props.defaultTemperature * 9) / 5 + 32);
        return <div className="Temperature" >
        <span className="temp">{fahrenheit}</span>
        <span className="units">°F | °<a href="/" onClick={showCelsius}>C</a></span>
    </div>
    }

}