import { useState } from 'react'

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

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const filterNames = () => {
    persons.filter(person => person.name)
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

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          search names: <input value={newName} onChange={filterNames}/>
        </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
        <div>debug: {newName}</div>
      </form>
      <h2>Numbers</h2>
        <div>{persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}</div>
      <h2>{message}</h2>
    </div>
  )

}

export default App