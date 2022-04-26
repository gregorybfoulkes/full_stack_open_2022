import './App.css';
import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react'
import Country from './components/Country'
import Filter from './components/Filter'

function App() {

  const [countries,setCountries] = useState([])
  const [allCountries,setAllCountries] = useState([])
  const [newFilter,setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setAllCountries(response.data)
      })
  }, [])

  const filterCountries = (event) => {
    setNewFilter(event.target.value)
    if(newFilter){
    const regex = new RegExp(newFilter, 'i')
    const filteredCountries =  allCountries.filter(country => country.name.common.match(regex))
      setCountries(filteredCountries)
    }

  }
  
  return (

    <div>
      <Filter newFilter={newFilter} filterCountries={filterCountries}/>
      <Country countries={countries} setCountries={setCountries}/>
    </div>
    
  );
}

export default App;
