import React from 'react';
import { useState,useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/personservice'
import './index.css'

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
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const person = persons.filter(person => person.name === newName)
    
    const updatedPerson = {...person[0],number:newNumber}
    
    const newPerson = {
      name:newName,
      number:newNumber,
      //id:persons.length +1
    }

    let checkName = persons.some(person =>  person.name === newPerson.name)
    
    if(checkName){
      if(window.confirm(`${newName} is already added to phonebook, replace old number with new on ?`)){
        
        personService.update(updatedPerson.id, updatedPerson)
        .then( returnPerson => {
          setPersons(persons.map(allPersons => allPersons.id !== updatedPerson.id ? allPersons: returnPerson))
          setMessage(`${newName} was updated`)
          setTimeout(() => {
            setMessage('')
          }, 5000)
        }).catch(error => {
          console.log(error)
          setPersons(persons.filter(person => person.id !== updatedPerson.id))
            setNewName('')
            setNewNumber('')
            setMessage(
              `[ERROR] ${updatedPerson.name} was already deleted from server`
            )
            setTimeout(() => {
              setMessage('')
            }, 5000)
        })
      }
      
    }else{
      personService.addPerson(newPerson)
      .then( returnPerson => {
        setPersons(persons.concat(returnPerson))
        setMessage(`${newPerson.name} was added`)
        setNewName('')
        setNewNumber('')
        setTimeout(() => {
          setMessage('')
        }, 5000)
      })
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
      <Notification  message={message}/>
    </div>
  )

}

export default App