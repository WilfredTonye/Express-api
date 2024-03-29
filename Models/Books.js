
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('Express-api', 'postgres', '123456789', {
    host: 'localhost',
    dialect:'postgres'
  });

  const Books = sequelize.define('Book', {
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nom_livre: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    auteur: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    description: {
      type:DataTypes.STRING,
      allowNull: true
    },
    maison_edition: {
      type:DataTypes.STRING,
      allowNull: true
    },
    prix: {
        type:DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: true,
    createdAt:"Date"
});
//(async () => {
  //  await sequelize.sync({ force: true });
    // Code here
  //})();
  module.exports = {
    Books
  }