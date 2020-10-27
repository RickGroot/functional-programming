/* -------------------------------------------------------------------------------------------FROM DOCUMENTATION API
$(document).ready(function () {                 //Getting data from database API

    $.ajax({
        url: "https://opendata.rdw.nl/resource/t5pc-eb34.json",
        type: "GET",
        data: {
            "$limit": 5000,
            "$$app_token": "5Ok2Uo4rAMwdcCmuYZlcK9Zgp"      //my own app token
        }
    }).done(function (data) {
        alert("Retrieved " + data.length + " records from the dataset!");       //creates popup
        console.log(data);          //logs data
    });

});

console.log("hi");      //tests filt through terminal
--------------------------------------------------------------------------------------------------------------------*/

//Source used: Live coding API by Laurens Aarnoudse
const fetch = require('node-fetch');
const endpoint = 'https://opendata.rdw.nl/resource/t5pc-eb34.json';
const selectedColumn = 'areaid';

getData(endpoint)
.then(result => {
    return result.json()
})
    .then(RDWData => {
        console.log('all data: ', RDWData);
        // console.log('one datum: ', RDWData[0]);
        const areaIdArray = filterData(RDWData, selectedColumn);
        console.log(areaIdArray);
    })

function getData(url) {
    return fetch(url);
}

function filterData(dataArray, key) {
    return dataArray.map(item => item[key])
}

function compareArray(array1, array2) {
    return valuesBothPresent;
}