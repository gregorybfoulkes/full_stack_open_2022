import axios from 'axios';

const baseUrl = '/api/persons'

const addPerson = (newObject) => {
const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const allPersons = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
  }

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
  }
  

const exportObject = {addPerson,allPersons,deletePerson,update}

export default exportObject