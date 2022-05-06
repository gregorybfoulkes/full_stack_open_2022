const express = require('express')
var morgan = require('morgan')
const cors = require('cors')

const app = express()

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


app.use(express.static('build'))
app.use(cors())
app.use(express.json())


app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
}))

app.get('/api/persons', (request, response) => {
    console.log(request.body)
    response.json(persons)
  })

app.get('/api/info', (request,response) => {

    let personslength = persons.length
    let date = new Date()
    response.send(`<p>Phonebook has info for ${personslength} people<p> <p>${date}<p>`)


})

app.get('/api/info/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(note => note.id === id)
  if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }
  if(persons.some(person => person.name === body.name)){
    return response.status(400).json({ 
      error: 'name must be unique' 
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)
  response.json(persons)
})

app.delete('/api/info/:id', (request, response) => {
  
  const id = Number(request.params.id)
  persons = persons.filter(note => note.id !== id)
  console.log(persons)
  response.json(persons)
  response.status(204).end()
})

  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })