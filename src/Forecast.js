import React , {useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastInfo from "./ForecastInfo";

export default function Forecast(props){

    let [loaded ,setLoaded] = useState(false);
    let [forecast , setForecast] = useState(null);

    function handleResponse(response){
        setForecast(response.data.daily)
        setLoaded(true);
    }
   
    if(loaded){
        return <div className="Forecast">
        <div className="row">
           {forecast.map (function(daily , index){
            if(index <5)
                return (
                    <div className="col" key={index}>
                        <ForecastInfo info={daily} />
                    </div>
                );
            
           
           })}
          
        </div>
    </div>
    }
    else {
        const apiKey="8bd8249b0de0430coc410dff16ctaab6";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return null;
    }
    
}