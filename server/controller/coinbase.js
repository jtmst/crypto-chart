const axios = require("axios");

// https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-11-01&end=2020-11-03
// https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate.toISOString()}&end=${endDate.toISOString()}

// let endDate = ''
// let startDate = ''

// let getCoinbase = (startDate, endDate) => {
//     // axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json`, response => {
//     //     return Object.keys(response.bpi).map(date => ({ date, value: response.bpi[date] }))
//     // })
//     // axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
// }

let getChartData = (req, res) => {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
        .then((response) => {
            res.send(response.data.bpi)
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = {
    getChartData
}