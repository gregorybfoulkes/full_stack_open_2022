import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{name:'Arto Hellas'}]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name:newName
    }
    setPersons(persons.concat(newPerson))
    if(persons.includes(persons)){
      console.log('contains name')
    }
    setNewName('')
    console.log('button clicked', newName)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input   value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
        <div>debug: {newName}</div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )

}

export default App