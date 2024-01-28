const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('Express-api', 'postgres', '123456789', {
    host: 'localhost',
    dialect:'postgres'
  });

  const Categories = sequelize.define('Categorie', {
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_categorie: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type:DataTypes.STRING,
        allowNull:false,
    },
},{
    timestamps:true,
    createdAt:"Date"
});
//(async () => {
  //  await sequelize.sync({ force: true });
    // Code here
  //})();
module.exports ={
    Categories
}