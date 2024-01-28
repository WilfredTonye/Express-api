var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const { Books } = require('./Models/Books');
const { Customers } = require('./Models/Customers');
const { Categories } = require('./Models/Categories');
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
        res.status(404).json({message:error.message})
    })
});
//Ajout d'un nouvel livre
app.post('/api/books',(req,res)=>{
    let nom_livre = req.body.nom_livre
    let auteur = req.body.auteur
    let description = req.body.description
    let maison_edition = req.body.maison_edition
    let prix = req.body.prix
    Books.create({
        nom_livre:nom_livre,
        auteur:auteur,
        description:description,
        maison_edition:maison_edition,
        prix:prix
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
});

app.get('/books/customers',(req,res)=> {
    Customers.findAll()
    .then(students => {
        const message = "List of Customers"
        res.json({message, data:students})
    }).catch(error => {
        res.status(404).json({message:error.message})
    })
});

app.post('/books/customers',(req,res)=>{
    let nom = req.body.nom
    let email = req.body.email
    let date_of_birth = req.body.date_of_birth
    let adresse = req.body.adresse
    let tel = req.body.tel
    Customers.create({
        nom:nom,
        email:email,
        date_of_birth:date_of_birth,
        adresse:adresse,
        tel:tel
    }).then(customer => {
        const message = "Customers added successfully"
        res.json({message, data:customer.toJSON()})
    }).catch(error => {
        res.json({message:error.message})
    })
});

app.get('/books/customers/:id',(req,res)=> {
    const id = req.params.id
    Customers.findByPk(id)
    .then(customer => {
        const message = `The customer ${id} has been found successfully`
        res.json({message, data:customer})
    }).catch(error =>{
        res.json({message:error.message})
    })
});
//Modification des informations d'un Etudiant via son identifiant
app.put('/books/customers/:id',(req,res)=> {
    const id = req.params.id
    Customers.update(req.body,{
        where:{id:id}
    }).then(customer => {
        const message = `The customer ${id} has been update`
        res.json({message,data:customer})
    }).catch(error => {
        res.json({message:error.message})
    })
});
//Suppression d'un Etudiant via son identifiant
app.delete('/books/customers/:id',(req,res)=> {
    const id = req.params.id
    Customers.destroy({
        where:{id:id}
    }).then(customer => {
        const message = `The customer ${id} has been deleted`
        res.json({message,data:customer})
    }).catch(error => {
        res.json({message:error.message})
    })
});


app.get('/books/categories',(req,res)=> {
    Categories.findAll()
    .then(categories =>{
        const message = "List of Categories"
        res.json({message, data:categories})
    }).catch(error => {
        res.json({message:error.message})
    })
})

app.listen(PORT,()=>{
    console.log(`Open your browser on http://localhost:${PORT}.......`)
})