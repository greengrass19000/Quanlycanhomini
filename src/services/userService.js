const axios = require('axios').default;

const sendHome = async (data) => {
    axios.post('http://localhost:3000/home', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}


module.exports = {
    sendHome: sendHome
}   