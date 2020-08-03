 
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

const Filter = (props) =>{
  return(
    <div> Filter shown with: <input value={props.value} onChange={props.eventHandler}/></div>
  )
}
const Weather = (props) =>{
  let request='http://api.weatherstack.com/current?access_key='+props.apikey+'&query='+props.country.capital
  const [weather, setWeather] = useState([])
  useEffect(() => {
    console.log('effect')
    axios
      .get(request)
      .then(response => {
        console.log('promise fulfilled')
        setWeather(response.data)
        console.log(response.data.current.feelslike)
        //console.log(weather)
      })
  }, []);
 // console.log(weather)
  //console.log(weather['current']['feelslike'])
  console.log(weather['location'])
  if(weather['current']!==undefined){
    return(
      <>
  <h3>Weather in {weather.request.type}</h3>
    <div>Temperature: {weather.current.temperature} Celsius</div>
    <img src={weather.current.weather_icons[0]} alt="weather pic" />
  <div>Wind: {weather.current.wind_speed} mph direction {weather.current.wind_dir}</div>

    </>)
  }
return(<div></div>)

}
const Country = (props) =>{
  return(
    <>
<h2>{props.country.name}</h2>
  <p>Capital: {props.country.capital}</p>
<p>Population: {props.country.population}</p>
<div>
  Languages:
  <ul>
  {props.country.languages.map(kikkare =>
      <li key={kikkare.iso639_1}>{kikkare.name}</li>
        )}
  </ul>
</div>
<p><img src={props.country.flag} width="300" height="200" alt="kuva" /></p>
<Weather apikey={props.apikey} country={props.country}/>
     </>
  )
}
const Display = (props) =>{
  const buttonFunction = (country) =>{
    props.button(country)
  }
  if(props.filter===''){
    return(<div>Give a filter please</div>)
  }
  else if(props.countries.length>=10){
    return(<div>Too many results, give another filter</div>)
  }
  else if(props.countries.length>1){
    return(
      
      <div>      {props.countries.map(kikkare =>
        <div key={kikkare.name}>{kikkare.name}     <button onClick={() => buttonFunction(kikkare.name)}>Choose</button> </div>
        )}</div>
    )
  }
  else if(props.countries.length===1){
    return (
      <Country country={props.countries[0]} apikey={props.apikey} />
    )
  }
  else{
    return(
      <div>
        
        Filtered too much</div>
    )
  }
}

function App() {
  const [countries, setCountries] = useState([])
  const [visibleCountries, setVisibleCountries] = useState([])
  const [filter, setFilter] = useState('')
  const api_key = 'a343b716fbc8e31a5703685da2bb1644'
  const handleButton = (name) =>{
    setFilter(name)
  }
  
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, []);
  useEffect(()=>{setVisibleCountries(countries)},[countries]);
  useEffect(() => { 
    let copy=[]
    for (var value of countries){
      if (value.name.includes(filter)){
        console.log("found", value.name)
        console.log("with filter", filter)
        copy.push(value)
        console.log(copy)
      }
    }
    setVisibleCountries(copy)

   },[filter]);
  return (
    <div>
      <Filter value={filter} eventHandler={handleFilterChange} />
      <Display countries={visibleCountries} filter={filter} button={handleButton} apikey={api_key}/>

      
      
    </div>
  );
}

export default App;
