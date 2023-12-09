
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
    name: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    author: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    price: {
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