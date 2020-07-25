import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Component/Searchbar/Searchbar';
import Button from './Component/Button/Button';
import { Grid } from '@material-ui/core';

function App() {
  const [userInput, setUserInput] = useState<string>("");
  const [apiResult, setApiResult] = useState<string>("");
  const handleOnClick = ()=>{
    //api call basied on userInput
    fetch("https://restcountries.eu/rest/v2/name/"+userInput+"?fullText=true")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setApiResult(result[0].capital);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setApiResult("cannot get capital of "+userInput+": " + error);
        }
      )
    //set state
    
  };
  const handleOnChange= (value:string)=>{setUserInput(value)};
  return (
    <div className="App">
      <Grid container spacing={3}>
      <Grid item xs={6} sm={3}>
      <SearchBar handleOnChange={handleOnChange}/>
      </Grid>
      <Grid item xs={6} sm={3}>
      <Button handleOnClick={handleOnClick} lable="Search"/>
      </Grid>
      <p>{apiResult}</p>
      </Grid>
    </div>
  );
}

export default App;
