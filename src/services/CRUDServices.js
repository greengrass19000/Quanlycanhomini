const bcrypt = require('bcryptjs');
const { sequelize } = require('../models/index');
const db = require('../models/index');
const { QueryTypes } = require('sequelize');
const salt = bcrypt.genSaltSync(10);
<<<<<<< HEAD
const { QueryTypes } = require('sequelize');
=======
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('canhomini', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
  });
>>>>>>> dda72acf02a07639465c5548058b7eebe6cf2efd

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject)=> {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.Account.create({
                accountType: data.accountType == '0' ? "host" : "renter",
                username: data.username,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                birthdate: data.birthdate,
                phone: data.phone,
                email: data.email
            })
            resolve();
        }catch(e) {
            reject(e);
        }
    });
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        }catch(e) {
            reject(e);
        }
    });
}

let getAllRoom = () => {
    return new Promise(async (resolve, reject) => {
        try {
           let rooms = await sequelize.query("SELECT * FROM ROOMS WHERE description IS NOT NULL", {
            type: QueryTypes.SELECT
           })
           resolve(rooms);
        } catch(e) {
            reject(e);
        }
    })
}

let getHostRoom = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let rooms = await sequelize.query(
                'SELECT * from buildings b left join hosts h on b.hostID = h.id left join rooms r on r.buildingID = b.id where hostid = ? and r.id is not null;',
                {
                    replacements: ['10000000'],
                    type: QueryTypes.SELECT
                }
                );
            resolve(rooms);
        } catch(e) {
            reject(e);
        }
    })
}
module.exports = {
    createNewUser: createNewUser,
    getAllRoom: getAllRoom,
    getHostRoom: getHostRoom,
}