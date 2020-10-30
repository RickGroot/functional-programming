//Source used: Live coding API by Laurens Aarnoudse
const fetch = require('node-fetch'); //requires fetch library for node.js
const endpoint = 'https://opendata.rdw.nl/resource/b3us-f26s.json?$limit=90000'; //specificaties parkeergebied dataset
const endpoint2 = 'https://opendata.rdw.nl/resource/t5pc-eb34.json?$limit=90000'; //GEO Parkeer Garages dataset
const selectedColumn = 'maximumvehicleheight';
const selectedColumn2 = 'usageid';


let data1 = getData(endpoint) //calls function getData with API link
    .then(result => { //only continues when data is fetched
        return result.json()
    })
    .then(RDWData => {
        // console.log('all data: ', RDWData);

        const filteredColumnData = filterData(RDWData, selectedColumn); //calls filterData with API data and column ID
        // console.log('From endpoint1 ', filteredColumnData);

        const filteredDataObjects = filterObjectValue(RDWData, selectedColumn); //callsfilterObject with data and column ID
        // console.log('From endpoint1 ', filteredDataObjects);

        return filteredDataObjects;
    })

let data2 = getData(endpoint2) //calls function getData with API link
    .then(result => { //only continues when data is fetched
        return result.json() //puts result into JSON
    })
    .then(RDWData => {
        console.log('all data: ', RDWData);
        return RDWData;

        // const filteredColumnData2 = filterData(RDWData, selectedColumn2); //calls filterData with API data and column ID
        // console.log('From endpoint2 ', filteredColumnData2);

        // const filteredDataObjects2 = filterObjectName(RDWData, selectedColumn2); //callsfilterObject with data and column ID
        // console.log('From endpoint2 ', filteredDataObjects2);

        // return filteredDataObjects2;
    })

compare(data1, data2); //calls compare function

function getData(url) {
    return fetch(url); //fetches data from API url
}

function filterData(dataArray, key) {
    return dataArray.map(item => item[key]); //filters column data from array
}

function filterObjectValue(dataArray, key) {
    return dataArray.filter(item => item[key] > 0); //returns only objects with a key-value higher than 0
}

function filterObjectName(dataArray, key) {
    return dataArray.filter(item => item[key] === 'GARAGEP'); //returns only objects with a key-value higher than 0
}

async function compare(array1, array2) { //async function that awaits the promised arrays
    const result1 = await array1;
    const result2 = await array2;

    result1.forEach(itemArr1 => {
        console.log(itemArr1.areaid);

        result2.forEach(itemArr2 => {

            if (itemArr1.areaid === itemArr2.areaid) {
                console.log('^^^ this one, ' + itemArr1.areaid + ', is double ^^^')
            }
        })
    })
}