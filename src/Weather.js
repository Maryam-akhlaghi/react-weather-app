import React, { useState } from "react";
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.css';
import BeatLoader from "react-spinners/BeatLoader";
import axios from "axios";

export default function Weather(){
    const override= {
        display: "inline",
        margin: "0 auto",
        
      };
    let [loaded, setLoaded] = useState(false);
    let [weatherData, setWeatherData] =useState(null);
    function setResult(response){
        setWeatherData({city : response.data.city ,
             country : response.data.country ,
              description : response.data.condition.description,
              humidity : Math.round(response.data.temperature.humidity) ,
              wind : Math.round(response.data.wind.speed),
              temp : Math.round(response.data.temperature.current),
              icon : response.data.condition.icon,
              
             })
       setLoaded(true);
    };
    if (loaded){
    return <div className='Weather'>
        <div className="container">
           
               
              <form>
                 <div className="row" >

                     <div className="col-9 "><input className="search-input form-control" type="search" placeholder="Enter a city" autoFocus="on" ></input> </div>
                     <div className="col-3"><input className="search-button form-control" type="button" value="Search"></input></div>
                  </div>
              </form>
            
            <hr />
            <div className="info-container">
                
              <div>
                 <h1>{weatherData.city}, {weatherData.country}</h1>
                 <p>Sunday 12:25 ,<span> {weatherData.description}</span></p>
                 <p>Humidity :<span className="colored-numbers"> {weatherData.humidity}%</span><span>, Wind : <span className="colored-numbers">{weatherData.wind}km/h</span></span></p>
              </div>
              <div>
              <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/{weatherData.icon}.png" alt={weatherData.description} /> <span className="temperature">{weatherData.temp}</span><span className="unit">°C</span>

              </div>
            </div>
        </div>
    </div>}
    else{
        let city ="Sydney"
        const apiKey="8bd8249b0de0430coc410dff16ctaab6";
        let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(setResult);
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