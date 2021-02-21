# Petful Server

Server for Fifo application. Fifo is an adoption app where you add your name to get in line and wait for an availabl cat or dog you may choose to adopt. 

This is the backend for `Fifo`.  A live version of the app can be found at [https://petful-client-ozharb.vercel.app/]

The front end client can be found at [https://github.com/ozharb/petful-client].

## Introduction
Fifo is an adoption app where you add your name to get in line and wait for an availabl cat or dog you may choose to adopt.
### The process:
- Add your name to get in line
- While you wait, you can view the dogs and cats available for adoption
- Only those ahead of you may adopt a pet.
- Once a pet is adopted, they will be removed from the list of pets you can see while you wait.
- When you get to the top of the list it's your turn to pick a pet!
- Once it's your turn, you may pick either the dog or cat that's been waiting the longest for a home


## How to use Api

 * API_ENDPOINT: `https://petful-server-oz.herokuapp.com/api `,
 
 * For testing use: `http://localhost:8000/api`,

 * No auth required.
   

#### Base URL
The Base URL is the root URL for all of the API, if you ever make a request get back a 404 NOT FOUND response then check the Base URL first.

The Base URL is https://petful-server-oz.herokuapp.com/api 

#### Authentication
Does not require bearer token. 


#### CRUD requests
API supports Get, Post, Delete, and Patch requests.

#### Endpoints
* `/pets ` get all dogs and cats a a queue data structure
* `/pets/:type` type may be dogs or cats to get type-specific data. Supports GET and DELETE requests.
* `/people` get all people in line including registered user name if one exists. Supports GET and DELETE requests.
* `/pets/restock` restocks pets (must be PATCH request)


#### Back End

* Node and Express
* RESTful Api

#### Production

Deployed via Heroku


## Set up

Major dependencies for this repo include Postgres and Node.

To get setup locally, do the following:

1. Clone this repository to your machine, `cd` into the directory and run `npm install`

3. Create a `.env` file in the project root

Inside these files you'll need the following:

````
NODE_ENV=development
PORT=8000

````


## Admin feature
send PATCH request 'https://petful-server-oz.herokuapp.com/api/pets/restock' to restore the data

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's main branch.