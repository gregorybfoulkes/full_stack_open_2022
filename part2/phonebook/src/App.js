import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [message, setMessage] = useState('');
  const [newFilter, setNewFilter] = useState('');

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
      console.log('button clicked', newName, newNumber)

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