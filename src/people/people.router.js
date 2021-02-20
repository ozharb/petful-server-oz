const express = require('express')
const PeopleService = require('./people.service')

const jsonParser = express.json();

const PeopleRouter = express.Router()
PeopleRouter
.route('/')
  .get((req, res, next) => {
    //return all people in queue
  
    res.send(PeopleService.get() )
     
  })

.post( jsonParser, (req, res) => {
  // Add a new person to the queue.
  const { person_name } = req.body;
  const newPerson = { person_name };
  for (const [key, value] of Object.entries(newPerson)) {
    if (value == null) {
      return res.status(400).json({
        error: { message: `Missing '${key}' in request body` }
      });
    }
  }
  PeopleService.enqueue(newPerson.person_name)
  
  res
  .status(201)
  .json(newPerson);

})
.delete((req, res) => {
  // Remove a person from the line.
  PeopleService.dequeue()
  
  res.status(204).end()
})

module.exports = PeopleRouter;
