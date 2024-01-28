const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('Express-api', 'postgres', '123456789', {
    host: 'localhost',
    dialect:'postgres'
  });

  const Customers = sequelize.define('Customer', {
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    date_of_birth: {
        type:DataTypes.STRING,
        allowNull: true
    },
    tel: {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    adresse: {
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    timestamps:true,
    createdAt:"Date"
});
//(async () => {
  //  await sequelize.sync({ force: true });
    // Code here
  //})();
module.exports ={
    Customers
}