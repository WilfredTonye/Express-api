var express = require('express');
var app = express();
var bodyParser = require('body-parser');
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
});

app.use(bodyParser.json())
//afficher la liste complete des livres
app.get('/api/books',(req,res)=>{
    Books.findAll()
    .then(books => {
        const message = "List of Books"
        res.json({message, data:books})
    }).catch(error => {
        res.json({message:error.message})
    })
});
//Ajout d'un nouvel livre
app.post('/api/books',(req,res)=>{
    let name = req.body.name
    let author = req.body.author
    let price = req.body.price
    Books.create({
        name:name,
        author:author,
        price:price
    }).then(book => {
        const message = "The book has been created successfully"
        res.json({message, data:book.toJSON()})
    })
});
//affichage d'un livre unique via son identifiant
app.get('/api/books/:id',(req,res)=> {
    const id = req.params.id
    Books.findByPk(id)
    .then(book => {
        const message = `The book ${id} has been found successfully`
        res.json({message, data:book})
    }).catch(error =>{
        res.json({message:error.message})
    })
});
//Modification des informations d'un livre via son identifiant
app.put('/api/books/:id',(req,res)=> {
    const id = req.params.id
    Books.update(req.body,{
        where:{id:id}
    }).then(book => {
        const message = `The book ${id} has been update`
        res.json({message,data:book})
    }).catch(error => {
        res.json({message:error.message})
    })
});
//Suppression d'un livre via son identifiant
app.delete('/api/books/:id',(req,res)=> {
    const id = req.params.id
    Books.destroy({
        where:{id:id}
    }).then(book => {
        const message = `The book ${id} has been deleted`
        res.json({message,data:book})
    }).catch(error => {
        res.json({message:error.message})
    })
})

app.listen(PORT,()=>{
    console.log(`Open your browser on http://localhost:${PORT}.......`)
})