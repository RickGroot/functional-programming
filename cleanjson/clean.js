const data = require('./dataviz.json');     //Import de json file zodat ik er hier dingen mee kan doen

const json = JSON.stringify(data);          //Zet json file om in strings

const coffee = JSON.parse(json).filter(function (entry) {       //functie die alle personen filtert die het liefst koffie drinken
    return entry.theeOfKoffie === 'Koffie';
})

const rijbewijs = JSON.parse(json).filter(function (entry) {
    return entry.rijbewijs.startsWith('N');
})

const schoenen = JSON.parse(json).filter(function (entry) {
    if (entry.hoeveelPaarSchoenen.startsWith('4') && entry.rijbewijs.endsWith('ee')) {
        return entry;
    }})


console.log('er hebben ' + rijbewijs.length + ' mensen geen rijbewijs');

console.log('en ' + schoenen.length + ' van die mensen hebben 4 schoenen');

// console.log("hi")