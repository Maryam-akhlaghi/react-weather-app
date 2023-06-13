import React from "react";
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.css';
export default function Weather(){
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
                 <h1>Los Angeles</h1>
                 <p>Sunday 12:25 ,<span> Broken Clouds</span></p>
                 <p>Humidity :<span className="colored-numbers"> 88%</span><span>, Wind : <span className="colored-numbers">4.63km/h</span></span></p>
              </div>
              <div>
                 <img src="./img.png" alt="description"></img> <span className="temperature">12</span><span className="unit">°C</span>

              </div>
            </div>
        </div>
    </div>
}