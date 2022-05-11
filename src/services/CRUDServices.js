const bcrypt = require('bcryptjs');
const db = require('../models/index');
const { QueryTypes } = require('sequelize');
const salt = bcrypt.genSaltSync(10);
const { Sequelize } = require('sequelize');
const { reject } = require('bcrypt/promises');
const sequelize = new Sequelize('canhomini', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
  });

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject)=> {
        try {
            await db.Account.create({
                accountType: data.accountType == '0' ? "host" : "renter",
                username: data.username,
                password: data.password,
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
           let rooms = await sequelize.query("SELECT * FROM ROOMS WHERE state LIKE 'Còn trống' ", {
            type: QueryTypes.SELECT
           })
           resolve(rooms);
        } catch(e) {
            reject(e);
        }
    })
}

let getRoom = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            var search =  "%" + data + "%";
            let rooms = await sequelize.query("SELECT r.* FROM rooms r LEFT JOIN buildings b ON r.buildingID = b.id WHERE  b.district LIKE ? OR b.ward LIKE ? OR b.street LIKE ? ", {
            raw: true,
            replacements: [search, search, search],
            type: QueryTypes.SELECT 
           })
           resolve(rooms);
        } catch(e) {
            reject(e);
        }
    })
}

let getHostRoom = (data) => {
    if(data.state == undefined || data.state == "Tất cả") {
        return new Promise(async (resolve, reject) => {
            try {
                let rooms = await sequelize.query(
                    'SELECT * from buildings b left join hosts h on b.hostID = h.id left join rooms r on r.buildingID = b.id where hostid = ?;',
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
    }else {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(data.state);
                let rooms = await sequelize.query(
                    'SELECT * from buildings b left join hosts h on b.hostID = h.id left join rooms r on r.buildingID = b.id where hostid = ? and r.state LIKE ?;',
                    {
                        replacements: ['10000000', data.state],
                        type: QueryTypes.SELECT
                    }
                    );
                resolve(rooms);
            } catch(e) {
                reject(e);
            }
        })
    }

}

let checkUser = (username, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let acc = await sequelize.query(
                'select id, accounttype from accounts where username = ? and password = ?;',
                {
                    replacements: [username, password],
                    type: QueryTypes.SELECT
                }
            );
            resolve(acc); 
        } catch(e) {
            reject(e);
        }
    })
}

let getHostBuilding =(data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let building = await sequelize.query(
                'SELECT * FROM buildings WHERE hostID = ?',
                {
                    replacements: ['10000000'],
                    type: QueryTypes.SELECT
                }
            );
            resolve(building); 
        } catch(e) {
            reject(e);
        }
    })
}

let addRoom =(data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let building = await sequelize.query(
                'SELECT * FROM buildings WHERE id = ?',
                {
                    replacements: [data.id],
                    type: QueryTypes.SELECT
                }
            );
            resolve(building); 
        } catch(e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    getAllRoom: getAllRoom,
    getHostRoom: getHostRoom,
    getRoom: getRoom,
    checkUser: checkUser,
    getHostBuilding: getHostBuilding,
    addRoom: addRoom
}