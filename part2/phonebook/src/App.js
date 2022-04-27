import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/personservice'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [message, setMessage] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    personService.allPersons()
    .then(allEntries => setPersons(allEntries))
  }, [])

  const handleNameChange = (event) => {
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
      personService.addPerson(newPerson)
      .then(setPersons(persons.concat(newPerson)))
      setNewName('')
      setNewNumber('')
      setMessage('')
    }
   
  }

  const filterNames = (event) => {
    setNewFilter(event.target.value)
    let filteredPerson = persons.filter(person => person.name.match(newFilter))
    setPersons(filteredPerson)
  }

  const deleteEntry = (id) => {
    
    let filteredPerson = persons.filter(person => person.id === id)
    
    if(window.confirm(`Delete ${filteredPerson[0].name} ?`)){
      personService.deletePerson(filteredPerson[0].id)
      .then(setPersons(persons.filter(persons => persons.id !== id )))
    }
   
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={filterNames}/> 
      <h2>Add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons} deleteEntry={deleteEntry} />
      <h2>{message}</h2>
    </div>
  )

}

export default App