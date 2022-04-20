const bcrypt = require('bcryptjs');
const db = require('../models/index');
const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject)=> {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            console.log(data);
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
            let rooms = await db.Room.findAll({
                raw : true,
            });
            resolve(rooms);
        } catch(e) {
            reject(e);
        }
    })
}
module.exports = {
    createNewUser: createNewUser,
    getAllRoom: getAllRoom,
}