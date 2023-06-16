import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastInfo(props){
    function maxTemp(){
        return Math.round(props.info.temperature.maximum);
    }
    function minTemp (){
        return Math.round(props.info.temperature.minimum);
    }
    function day() {
        let date = new Date(props.info.time * 1000);
        let days = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            ];
        let day = days[date.getDay()];
        return day;
    }
    return <div className="ForecastInfo">
        <div className="row">
            <div className="col">
                <div className="Forecast-day">
                    {day()}
                </div>
                <WeatherIcon icon={props.info.condition.icon} size={54}/>
                <div className="Forecast-temps">
                    <span className="Forecast-max">{maxTemp()}°</span> <span className="Forecast-min">{minTemp()}°</span>
                </div>
            </div>
        </div>
    </div>
}