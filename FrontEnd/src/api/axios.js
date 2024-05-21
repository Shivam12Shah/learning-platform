const axios = require("axios")

const instace = axios.create({
    baseURL: "http://localhost:3000"
})

module.exports = instace;