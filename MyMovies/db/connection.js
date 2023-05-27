/**
 * Usaremos o sqlite para guardar dados
 * Mas lembre-se o sqlite não é um banco de dados GRANDE
 */

const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/index.db' //(Database File) é um arquivo usado para armazenar dados em um formato 
})                           //estruturado que pode ser acessado e manipulado por um sistema de gerenciamento de banco de dados (SGBD)

//Ao executar a variável sequelize, um banco de dados com o nome index.db será criado

module.exports = sequelize //Não esqueça de exportar