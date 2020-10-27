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
const fetch = require('node-fetch'); //requires fetch library for node.js
const endpoint = 'https://opendata.rdw.nl/resource/b3us-f26s.json'; //specificaties parkeergebied dataset
const endpoint2 = 'https://opendata.rdw.nl/resource/t5pc-eb34.json'; //GEO Parkeer Garages dataset
const selectedColumn = 'maximumvehicleheight';
const selectedColumn2 = 'areamanagerid'

getData(endpoint) //calls function getData with API link
    .then(result => { //only continues when data is fetched
        return result.json()
    })
    .then(RDWData => {
        // console.log('all data: ', RDWData);

        const filteredColumnData = filterData(RDWData, selectedColumn); //calls filterData with API data and column ID
        // console.log(filteredColumnData);

        const filteredDataObjects = filterObject(RDWData, selectedColumn); //callsfilterObject with data and column ID
        // console.log(filteredDataObjects);
    })

getData(endpoint2) //calls function getData with API link
    .then(result => { //only continues when data is fetched
        return result.json()
    })
    .then(RDWData => {
        console.log('all data: ', RDWData);

        const filteredColumnData2 = filterData(RDWData, selectedColumn2); //calls filterData with API data and column ID
        // console.log(filteredColumnData2);

        const filteredDataObjects2 = filterObject(RDWData, selectedColumn2); //callsfilterObject with data and column ID
        // console.log(filteredDataObjects2);
    })

function getData(url) {
    return fetch(url); //fetches data from API url
}

function filterData(dataArray, key) {
    return dataArray.map(item => item[key]); //filters column data from array
}

// function filterObject(dataArray, key) {
//     return filteredObjects = dataArray.filter(function (entry) {  //returns filtered data array  
//         return entry[key] > 0;              //returns only objects with a key-value higher than 0
//     })
// }        
//code below is simplified version of function above

function filterObject(dataArray, key) {
    return dataArray.filter(item => item[key] > 0); //returns only objects with a key-value higher than 0
}