const Queue = require('../queue/Queue')
const { cats, dogs, people } = require('../store')
const store = require('../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

const PetsService = {

  get() {
    // Return the pets next in line to be adopted.
    return pets
  },
  getCats() {
    // return all cats
    return pets.cats.all()
  },
  getDogs(){
   //return all dogs
    return pets.dogs.all();
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if(type === 'cat'){
      type = 'cats'
    } else if (type==='dog'){
      type = 'dogs'
    }
   pets[type].dequeue()
    return pets
  },
  getByType(type){
    if(type === 'cat'){
      type = 'cats'
    } else if (type==='dog'){
      type = 'dogs'
    }
    return pets[type].first.value
  },
  
getPetsBack(){
store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))
    return pets
  }
}
module.exports = PetsService;