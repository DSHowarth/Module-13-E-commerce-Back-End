# E-commerce-Back-End

## Description
This is a proof of concept for a back end that stores information about a store's inventory.
It allows a user to store products and their associated category, price, and stock, 
along with a variable number of tags. <br>
[Video Demonstration using Insomnia](https://drive.google.com/file/d/1x8tKDyZ55KO94XdzpchUbPRItPZOwo0w/view?usp=sharing)

## Installation

- Download the code
- Navigate to root directory
- Run ```npm install```
- Create a .env file with your db, username, and MySql password (example shown at start of demo)
- Using MySql, initiate the database with ```source db/schema.sql```
 
## Usage
- Navigate to root directory
- Run ```npm start```
- Use Insomnia or a similar application to start sending requests

## Technologies Used
- JavaScript
- Node.js
- Express.js
- MySql, Mysql2.js
- Sequelize.js
- dotenv.js

## Lessons Learned
- There is a distinction between associations made within SQL, and associations made within Sequelize.
So we include references in our models along with making our Sequelize statements (e.g. belongsToMany)
- Extra care needs to be taken when your code is full of very similar looking, but quite different functions.
5 Request handlers, for example. Everything can blur together and make it more difficult to spot errors before they
cause problems. 
## Acknowledgements
- Starter code courtesy of https://github.com/coding-boot-camp/fantastic-umbrella