const data = require('./dataviz.json');     //Imports json file

const filterData = JSON.stringify(data);          //Sets everything in json file to strings

const coffee = JSON.parse(filterData).filter(function (entry) {       //function that filters everyone who drinks coffee
    return entry.theeOfKoffie === 'Koffie';
})

const rijbewijs = JSON.parse(filterData).filter(function (entry) {    //filters everyone without drivers licence
    return entry.rijbewijs.startsWith('N');
})

const schoenen = JSON.parse(filterData).filter(function (entry) {     //filters people with 4 pairs of shoes and no drivers licence
    if (entry.hoeveelPaarSchoenen.startsWith('4') && entry.rijbewijs.endsWith('ee')) {
        return entry;
    }
})

console.log('er hebben ' + rijbewijs.length + ' mensen geen rijbewijs');    //puts filtered results in the console

console.log('en ' + schoenen.length + ' van die mensen hebben 4 schoenen'); //puts filtered results in the console



//get all answers of specific question/json column

let column = "hobbies";        //put in column name from json file

const specific = data.map(element => element[column]);      //creates array with all values of specified column

//console.log(specific);      //logs specific array


//same as previous code, but in a function

let allAnswers = getAnswers(data, column); //calls function with datasheet and column variable

function getAnswers(answer, question) { //function that returns an array of answers of requested question
    return data.map(answer => answer[question])     //returns array via map
}

console.log(allAnswers);      //logs answer

// let hobbieArray = [];
let allHobbies = getHobbies(allAnswers);    //calls function that puts all hobbies into one array

function getHobbies(answers) {
    return answers.forEach(element => {
        let arr = element.toLowerCase().replace(/\./gi, ',').split(',');
        
        console.log(arr)
    })
}

console.log(allHobbies)