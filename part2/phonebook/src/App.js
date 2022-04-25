import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [message, setMessage] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    
    event.preventDefault()
    
    const newPerson = {
      name:newName,
      number:newNumber,
      id:persons.length +1
    }

    let checkName = persons.some(person =>  person.name === newPerson.name)
    
    if(checkName){
      
      setMessage(`${newName} is already added to phonebook`)

    }else{
      
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
      setMessage('')
    }
   
  }

  const filterNames = (event) => {
    setNewFilter(event.target.value)
    console.log(newFilter)
    let filteredPerson = persons.filter(person => person.name.match(newFilter))
    console.log(filteredPerson)
    setPersons(filteredPerson)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={filterNames}/> 
      <h2>Add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons} />
      <h2>{message}</h2>
    </div>
  )

}

export default App