import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([]); 
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

  const addPerson = (event) => {
    
    event.preventDefault()
    
    const newPerson = {
      name:newName,
      number:newNumber
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
      <form onSubmit={addPerson}>
        <div>
          name: <input   valuename={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input valuenumber={newNumber} onChange={handleNumberChange} />
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