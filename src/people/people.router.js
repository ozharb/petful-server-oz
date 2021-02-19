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
  if (newPerson == null) {
    return res.status(400).json({
      error: { message: `Missing '${key}' in request body` }
    });
  }
  PeopleService.enqueue(newPerson)
  
  res
  .status(201)
  .json(newPerson);

})

module.exports = PeopleRouter;