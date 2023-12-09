var express = require('express');
var app = express();
const { Sequelize } = require('sequelize');
const { Books } = require('./Models/Books');
const PORT = 1000

const sequelize = new Sequelize('Express-api', 'postgres', '123456789', {
    host: 'localhost',
    dialect:'postgres'
  });
  try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.get("/",(req,res)=> {
    res.send("Hello Express");
})

app.get('/api/books',(req,res)=>{
    Books.findAll()
    .then(books => {
        const message = "List of Books"
        res.json({message, data:books})
    }).catch(error => {
        res.json({message:error.message})
    })
})

app.listen(PORT,()=>{
    console.log(`Open your browser on http://localhost:${PORT}.......`)
})