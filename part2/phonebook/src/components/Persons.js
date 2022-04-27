import React from 'react';

const Persons = ({persons, deleteEntry}) => {
    return (

        <div>{persons.map(person => <p key={person.name}>{person.name} {person.number}<button onClick={() => deleteEntry(person.id)}>delete</button></p>)}</div>

    )
}

export default Persons