const axios = require("axios");
const fs = require('fs');
const {urlApi} = require("./config"); // klo ubah tinggal ubah 1 file

const getLoginToken = (data) => {
    return axios.post(`${urlApi}/login`, data).then(
        response => {return response.data.data.token},
        error => {return null}
    );
};



module.exports = {
    getLoginToken
};