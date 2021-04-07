const Sequelize = require('sequelize'); //Inserting sequelize, so we can create columns on a easier way.
const instanciadb = require('../db'); //Requiring the database data so we can isert the column structureon it.


//Creating the columns.
const columns = {
    nome_cliente: {
        type: Sequelize.STRING, //Defining the type of content that should be recived by this column.
        allowNull: false //Not allowing the information to be null.
    },
    nome_servico: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('agendado', 'cancelado'), //Seting the status to recieve only these two information.
        allowNull: false
    },
    data_agendamento: {
        type: Sequelize.DATE, //Defining this fild as a date.
        allowNull: false
    }
}

const sequelizeOptions = {
    freezeTableName: true, //not allowing sequelize to change the table name.
    tableName: "agendamento", //Defining the table name.
    timestamps: true, //Allowing the 'createdAt' and 'updatedAt' functions to work.
    createdAt: 'data_criacao', //Define that the 'createdAt' will use the already created variable 'data_criacao'.
    updatedAt: 'data_atualizacao' //Define that the 'updatedAt' will use the already created variable 'data_atualizacao'.
}

module.exports = instanciadb.define('agendamento', columns, sequelizeOptions) //Using sequelize to insert the columns into the table.