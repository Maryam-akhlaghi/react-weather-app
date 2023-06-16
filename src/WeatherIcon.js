import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){
    const iconMapping = {
        "clear-sky-day" : "CLEAR_DAY" ,
        "clear-sky-night" : "CLEAR_NIGHT",
        "few-clouds-day" : "PARTLY_CLOUDY_DAY",
        "few-clouds-night" : "PARTLY_CLOUDY_NIGHT",
        "scattered-clouds-day" : "CLOUDY" ,
        "scattered-clouds-night" :"CLOUDY" ,
        "broken-clouds-day" : "PARTLY_CLOUDY_DAY",
        "broken-clouds-night" : "PARTLY_CLOUDY_NIGHT" ,
        "shower-rain-day" : "SLEET",
        "shower-rain-night" : "SLEET",
        "rain-day" : "RAIN",
        "rain-night" : "RAIN",
        "thunderstorm-day" : "CLOUDY" ,
        "thunderstorm-night" : "CLOUDY",
        "snow-day" : "SNOW",
        "snow-night" : "SNOW",
        "mist-day" : "FOG" ,
        "mist-night" : "FOG",
    }
    const colorMapping = {
        "clear-sky-day" : "goldenrod" ,
        "clear-sky-night" : "midnightblue",
        "few-clouds-day" : "goldenrod",
        "few-clouds-night" : "midnightblue",
        "scattered-clouds-day" : "goldenrod" ,
        "scattered-clouds-night" :"midnightblue" ,
        "broken-clouds-day" : "goldenrod",
        "broken-clouds-night" : "midnightblue" ,
        "shower-rain-day" : "goldenrod",
        "shower-rain-night" : "midnightblue",
        "rain-day" : "goldenrod",
        "rain-night" : "midnightblue",
        "thunderstorm-day" : "goldenrod" ,
        "thunderstorm-night" : "midnightblue",
        "snow-day" : "goldenrod",
        "snow-night" : "midnightblue",
        "mist-day" : "goldenrod" ,
        "mist-night" : "midnightblue",
    }
    return <div className="WeatherIcon" >
        <ReactAnimatedWeather
    icon={iconMapping[props.icon]}
    color={colorMapping[props.icon]}
    size={props.size}
    animate={true}
  />
    </div>
}