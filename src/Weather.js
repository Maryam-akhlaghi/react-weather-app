import React, { useState } from "react";
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.css';
import BeatLoader from "react-spinners/BeatLoader";
import axios from "axios";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

export default function Weather(props){
    const override= {
        display: "inline",
        margin: "0 auto",
        
      };
    const [loaded, setLoaded] = useState(false);
    let [city, setCity] = useState(props.defaultCity);
    let [weatherData, setWeatherData] =useState({});

    function handleSubmit(event){
        event.preventDefault();
       search();
    }

    function updateCity(event){ 
        setCity(event.target.value);
    }

    function search(){
        const apiKey="8bd8249b0de0430coc410dff16ctaab6";
        let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(setResult);
    }
    function setResult(response){
        setWeatherData({city : response.data.city ,
             country : response.data.country ,
              description : response.data.condition.description,
              humidity : Math.round(response.data.temperature.humidity) ,
              wind : Math.round(response.data.wind.speed),
              temp : Math.round(response.data.temperature.current),
              icon : response.data.condition.icon,
              date : new Date(response.data.time * 1000),
             })
       setLoaded(true);
    };
    if (loaded){
    return <div className='Weather'>
        <div className="container">
           
               
              <form onSubmit={handleSubmit}>
                 <div className="row" >

                     <div className="col-9 "><input className="search-input form-control" type="search" placeholder="Enter a city" autoFocus="on" onChange={updateCity}></input> </div>
                     <div className="col-3"><input className="search-button form-control" type="button" value="Search"></input></div>
                  </div>
              </form>
            
            <hr />
            <div className="info-container">
                
              <div>
                 <h1>{weatherData.city}<span className="country d-none">, {weatherData.country}</span></h1>
                 <FormatDate  date={weatherData.date} /> ,<span> {weatherData.description}</span>
                 <p>Humidity :<span className="colored-numbers"> {weatherData.humidity}%</span><span>, Wind : <span className="colored-numbers">{weatherData.wind}km/h</span></span></p>
              </div>
              <div>
                
              <WeatherIcon icon ={weatherData.icon} size={64}/> <Temperature defaultTemperature={weatherData.temp}/> 
              </div>
            </div>
            <Forecast city={city}/>
        </div>
    </div>}
    else{
        
        
       search();
        return <div className="Weather">
           <div className="loading">Loading  😊  {" "}
           <BeatLoader color="#F65282"
            margin={4}
            size={13}
            speedMultiplier={0.8}
            cssOverride={override} />
           <br />Thank you for your patience, < br /> I really appreciate it. 😘</div> 
        </div>
       
    }
}