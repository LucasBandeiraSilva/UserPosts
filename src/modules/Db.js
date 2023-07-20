import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('userposts','root','lucas123',{
    host:'localhost',
    dialect:'mysql'
})

export {sequelize,DataTypes}
