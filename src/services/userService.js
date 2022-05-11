const axios = require('axios').default;

const sendHome = async (id, type) => {
    const request = axios.post('http://localhost:3000/home', 
    {
      id, type
    })
      // .then(function (response) {
      //   response  
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
}


module.exports = {
    sendHome: sendHome
}   