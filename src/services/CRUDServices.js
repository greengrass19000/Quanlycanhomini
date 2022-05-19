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
                        replacements: [data.id],
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
                let rooms = await sequelize.query(
                    'SELECT * from buildings b left join hosts h on b.hostID = h.id left join rooms r on r.buildingID = b.id where hostid = ? and r.state LIKE ?;',
                    {
                        replacements: [data.id, data.state],
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
let addBuilding = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let building = await sequelize.query(
                'SELECT * FROM buildings WHERE hostID = ? LIMIT 1',
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

let afterAddedBuilding = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await sequelize.query(
                'INSERT INTO buildings (buildings.hostID, buildings.district, buildings.ward, buildings.street, buildings.image) VALUES(?, ?, ?, ?, ?)',
                {
                    replacements: [data.hostID, data.district, data.ward, data.street, data.image],
                }
            );
            let building = await sequelize.query(
                'SELECT * FROM buildings WHERE hostID = ?',
                {
                    replacements: [data.hostID],
                    type: QueryTypes.SELECT
                }
            )
            resolve(building);
        } catch(e) {
            reject(e);
        }
    })
}

let getHostRoomAfterAdd = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await sequelize.query(
                'INSERT INTO rooms (rooms.buildingID, rooms.floorNo, rooms.roomNo, rooms.rentalPrice, rooms.description, rooms.image, rooms.limit, rooms.utilities, rooms.state) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)',
                {
                    replacements: [data.buildingID, data.floorNo, data.roomNo, data.rentalPrice, data.description, data.image, data.limit, data.utilities, data.state],
                }
            );
            let rooms = await sequelize.query(
                'SELECT * from buildings b left join hosts h on b.hostID = h.id left join rooms r on r.buildingID = b.id where hostid = ?;',
                {
                    replacements: [data.id],
                    type: QueryTypes.SELECT
                }
                );
            resolve(rooms);
        } catch(e) {
            reject(e);
        }
    })
}
let deleteRoom = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let roomLists = await sequelize.query(
                'SELECT * FROM rooms WHERE buildingID = ?',
                {
                    replacements: [data.id],
                    type: QueryTypes.SELECT
                }
            );
            resolve(roomLists); 
        } catch(e) {
            reject(e);
        }
    })
}

let afterDeleteRoom = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let roomLists = await sequelize.query(
                'SELECT * FROM buildings b WHERE hostID IN (SELECT b.hostID FROM rooms r WHERE r.id = ?)',
                {
                    replacements: [data.id],
                    type: QueryTypes.SELECT
                }
            );
            await sequelize.query(
                'DELETE FROM rooms WHERE id = ?',
                {
                    replacements: [data.id]
                }
            )

            resolve(roomLists); 
        } catch(e) {
            reject(e);
        }
    })

}

let afterDeletedBuilding = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let building = await sequelize.query(
                'SELECT * FROM buildings WHERE hostID IN (SELECT hostID FROM buildings WHERE id = ?) AND id != ?',
                {
                    replacements: [data.id, data.id],
                    type: QueryTypes.SELECT
                }
            )
            await sequelize.query(
                'DELETE FROM rooms WHERE buildingID = ?',
                {
                    replacements: [data.id]
                }
            );
            await sequelize.query(
                'DELETE FROM buildings WHERE id = ?',
                {
                    replacements: [data.id]
                }
            );
            resolve(building);
        } catch(e) {
            reject(e);
        }
    })
}
let getRoomInvoice = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let invoiceList = await sequelize.query(
                'SELECT * FROM invoices WHERE roomID = ?',
                {
                    replacements: [data.id],
                    type: QueryTypes.SELECT
                }
            );
            resolve(invoiceList); 
        } catch(e) {
            reject(e);
        }
    })
}

let findRoom = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let invoiceList = await sequelize.query(
                'SELECT * FROM rooms WHERE id = ?',
                {
                    replacements: [data.id],
                    type: QueryTypes.SELECT
                }
            );
            resolve(invoiceList); 
        } catch(e) {
            reject(e);
        }
    })
}

let afterAddedInvoice = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await sequelize.query(
                'INSERT INTO invoices(invoices.roomID, invoices.type, invoices.price, invoices.time, invoices.description) VALUES(?, ?, ?, ?, ?)',
                {
                    replacements: [data.roomID, data.type, data.price, data.time, data.description],
                }
            )
            let roomData = await sequelize.query(
                'SELECT r.* FROM rooms r WHERE r.buildingID IN (SELECT b.id FROM buildings b WHERE b.hostID IN (SELECT b.hostID FROM buildings b WHERE b.id IN (SELECT r.buildingID FROM rooms r WHERE r.id = ?)))',
                {
                    replacements: [data.roomID],
                    type: QueryTypes.SELECT
                }
            )
            resolve(roomData); 
        } catch(e) {
            reject(e);
        }
    })
}
let afterDeletedInvoice = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let roomData = await sequelize.query(
                'SELECT r.* FROM rooms r WHERE r.buildingID IN (SELECT b.id FROM buildings b WHERE b.hostID IN (SELECT b.hostID FROM buildings b WHERE b.id IN(SELECT r.buildingID FROM rooms r WHERE r.id IN (SELECT i.roomID FROM invoices i WHERE i.id = ?))))',
                {
                    replacements: [data.id],
                    type: QueryTypes.SELECT
                }
            )
            await sequelize.query(
                'DELETE FROM invoices WHERE id = ?',
                {
                    replacements: [data.id]
                }
            )
            resolve(roomData); 
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
    addRoom: addRoom,
    addBuilding: addBuilding,
    getHostRoomAfterAdd: getHostRoomAfterAdd,
    deleteRoom: deleteRoom,
    afterDeleteRoom: afterDeleteRoom,
    afterAddedBuilding: afterAddedBuilding,
    afterDeletedBuilding: afterDeletedBuilding,
    getRoomInvoice: getRoomInvoice,
    afterAddedInvoice: afterAddedInvoice,
    findRoom: findRoom,
    afterDeletedInvoice: afterDeletedInvoice,
}