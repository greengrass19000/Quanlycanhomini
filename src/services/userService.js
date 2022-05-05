const axios = require('axios');

const sendHome = async (data) => {
    try{
        return await axios.post('http://localhost:3000/home', data);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    sendHome: sendHome
}   