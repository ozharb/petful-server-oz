const express = require('express')
const json = require('body-parser').json()

const PetsService = require('./pets.service')


const PetsRouter = express.Router()

PetsRouter.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  res.json(PetsService.get())
})
PetsRouter.get('/dogs', (req, res) => {
  // Return all pets currently up for adoption.
  res.json(PetsService.getDogs())
})
PetsRouter.get('/cats', (req, res) => {
  // Return all pets currently up for adoption.
  res.json(PetsService.getCats())
})
PetsRouter.delete('/:pet_type', (req, res) => {
  // Remove a pet from adoption.
  PetsService.dequeue(req.params.pet_type)
  
  res.status(204).end()
})

PetsRouter.get('/:pet_type', (req, res) => {
  // Return cat or dog currently up for adoption.
  res.json(PetsService.getByType(req.params.pet_type))
})

PetsRouter.patch('/restock', (req, res) => {
  // Return cat or dog currently up for adoption.
  PetsService.getPetsBack()
  res.status(204).end()
})

module.exports = PetsRouter
