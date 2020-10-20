const data = require('./dataviz.json');     //Imports json file

const json = JSON.stringify(data);          //Sets everything in json file to strings

const coffee = JSON.parse(json).filter(function (entry) {       //function that filters everyone who drinks coffee
    return entry.theeOfKoffie === 'Koffie';
})

const rijbewijs = JSON.parse(json).filter(function (entry) {    //filters everyone without drivers licence
    return entry.rijbewijs.startsWith('N');
})

const schoenen = JSON.parse(json).filter(function (entry) {     //filters people with 4 pairs of shoes and no drivers licence
    if (entry.hoeveelPaarSchoenen.startsWith('4') && entry.rijbewijs.endsWith('ee')) {
        return entry;
    }})


console.log('er hebben ' + rijbewijs.length + ' mensen geen rijbewijs');    //puts results in the console

console.log('en ' + schoenen.length + ' van die mensen hebben 4 schoenen'); //puts results in the console