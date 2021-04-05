import React,{useState,useEffect} from 'react';
import Login from './feedback';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const axios = require('axios');


export default function Weather(){
    const [location,setLocation] = useState();
    const [weather,setWeather] = useState();
    // const [img,setImg] = useState("/cloudyDay.png");
    const bgImg={
        cloudy:"/cloudyDay.png",
        fogg:"/foggyDay.png",
        rainy:"/rainyDay.png",
        sunny:"/sunnyDay.png",
        clear:"/clearDay.png",
        storm:"/stormDay.png",
    }
    useEffect(()=>{
        window.navigator.geolocation.getCurrentPosition((data)=>{
            setLocation({
                latitude:data.coords.latitude,
                longitude:data.coords.longitude
            })
        },(error)=>{
            console.log("Something went wrong!",error);
            setLocation({
                error:error.code
            })
        })
    },[]);
    useEffect(()=>{
        if(location){
            axios.get(`http://localhost:4000?lat=${location.latitude}&lon=${location.longitude}`)
            .then((res)=>{
                console.log("hello")    
                setWeather(res.data);
            })
        }
    },[location])
    const date = new Date();
    const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    if(location?.error || weather?.error?.code){
        return(
        <div>
            Something went wrong we'll try to fix it as soon as possible! :(
        </div>)
    }
    console.log(weather);
  return(
      <div>
          {/* <div style={{position:'relative', backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',backgroundImage:`url(${bgImg.rainy})`}}>
            </div> */}
            {weather?.weather[0]?.main.toLowerCase().includes("sunny")?<div style={{position:'relative', backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',backgroundImage:`url(${bgImg.sunny})`}}>
            </div>:<></>}
            {weather?.weather[0]?.main.toLowerCase().includes("rain")?<div style={{position:'relative', backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',backgroundImage:`url(${bgImg.rainy})`}}>
            </div>:<></>}
            {weather?.weather[0]?.main.toLowerCase().includes("cloud")?<div style={{position:'relative', backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',backgroundImage:`url(${bgImg.cloudy})`}}>
            </div>:<></>}
            {weather?.weather[0]?.main.toLowerCase().includes("clear")?<div style={{position:'relative', backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',backgroundImage:`url(${bgImg.clear})`}}>
            </div>:<></>}
            {weather?.weather[0]?.main.toLowerCase().includes("thunder") || weather?.current?.weather_descriptions[0].toLowerCase().includes("storm")?<div style={{position:'relative', backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',backgroundImage:`url(${bgImg.storm})`}}>
            </div>:<></>}
            {weather?.weather[0]?.main.toLowerCase().includes("haze")?<div style={{position:'relative', backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',backgroundImage:`url(${bgImg.fogg})`}}>
            </div>:<></>}
            {weather?.weather[0]?.main.toLowerCase().includes("smoke")?<div style={{position:'relative', backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',backgroundImage:`url(${bgImg.fogg})`}}>
            </div>:<></>}
            <div>
            <Link style={{color:'black',textDecoration:'none'}} to="/feedback"><div style={{position:'absolute',left:'30px',top:'10px',backgroundColor:'rgb(144,233,144)',opacity:'0.9',borderRadius:'10px',blockSize:'30px',width:'100px'}}>Feedback</div></Link>
            <Link style={{color:'black',textDecoration:'none'}} to="/login"><div style={{position:'absolute',right:'30px',top:'10px',backgroundColor:'rgb(144,233,144)',opacity:'0.9',borderRadius:'10px',blockSize:'30px',width:'100px'}}>Login</div></Link>
            </div>
            <div style={{position:'absolute',left:'39%',top:'20px'}}>
                <h1 className="col-md-12">Weather Report</h1>
            </div>
            <div className="d-flex justify-content-center" style={{left:'36%',top:'20%',position:'absolute',blockSize:'400px',width:'400px',backgroundColor:'rgb(0,0,0,0.4)'}}>
                <h3 className='mt-3' style={{fontFamily:'Roboto, sans-serif',color:'rgb(255,255,255)',position:'absolute'}}>{day[date.getDay()]}</h3>
                <h3 className='mt-3' style={{top:'50px',fontFamily:'Roboto, sans-serif',color:'rgb(255,255,255)',position:'absolute'}}>{date.getDate()}&nbsp;{month[date.getMonth()]}&nbsp;{date.getFullYear()}</h3>
                <h1 className='mt-3' style={{color:'rgb(255, 215, 1, 0.59)',fontFamily: 'Acme, sans-serif',textAlign:'center',left:'150px',fontSize:'100px',top:'100px',position:'absolute'}}><strong>{Math.floor(weather?.main?.temp)}</strong>°</h1>
                <h2 className='mt-3' style={{color:'rgb(255,255,255)',position:'absolute',fontFamily:'Roboto, sans-serif',top:'230px'}}>{weather?.name}</h2>
                <p className='mt-3' style={{color:'rgb(255,255,255)',position:'absolute',top:'310px',fontSize:'30px',fontFamily:'Roboto, sans-serif'}}>{weather?.weather[0]?.main}</p>
            </div>
            <div style={{position:'absolute',bottom:'10px',left:'440px',color:'rgb(0,0,0)'}}>
            © 2021 Weather Report Widget. All Rights Reserved | Design by sne3Zy | <a style={{color:'rgb(0,0,0)',textDecoration:'none'}} href="https://openweathermap.org">Open Weather</a>
            </div>
    </div>
    );
}
