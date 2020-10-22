
const data = require('./dataviz.json');     //Imports json file


// filtering data
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

console.log(coffee.length + ' mensen drinken alleen koffie')                //puts filtered results in the console

console.log('er hebben ' + rijbewijs.length + ' mensen geen rijbewijs');    //puts filtered results in the console

console.log('en ' + schoenen.length + ' van die mensen hebben 4 schoenen'); //puts filtered results in the console



//get all answers of specific question/json column

let column = "hobbies";        //put in column name from json file


/* ----------------------------------------------------------simple exersize to get data of one question
const specific = data.map(element => element[column]);      //creates array with all values of specified column
console.log(specific);      //logs specific array
--------------------------------------------------------------*/

let allAnswers = getAnswers(data, column); //calls function with datasheet and column variable

function getAnswers(answer, question) { //function that returns an array of answers of requested question
    return data.map(answer => answer[question]);     //returns array via map
};


let allHobbies = getHobbies(allAnswers);    //calls function that puts all hobbies into one array

function getHobbies(answers) {
    let arr = [];                       //creates an array witch wil hold all items

    answers.forEach(element => {        //loops over the big array of answers
        element                         //selects array that got passed through
        .toLowerCase()                  //puts everything to lowercase
        .replace(/\./gi, ',')           //replaces all dots with commas
        .split(',')                     //splits values in arrays where there is a comma
        .forEach(childElement =>        //runs through every hobby in an answer
            arr.push(childElement)      //pushes each individual hobby to array arr
        );
    });

    for (i = 0; i < arr.length; i++) {      //for loop that goes through hobby array

        if (arr[i].startsWith(' ')) {       //if the string starts with a space
            arr[i] = arr[i].substring(1);   //replaces the string from 2nd character, so without the space
        };

        if (arr[i].startsWith('  ')) {      //if the string starts with 2 spaces
            arr[i] = arr[i].substring(2);   //replaces the string from 3nd character, so without spaces
        }; 

        if (arr[i].length < 1) {            //if the string is shorter then 1 character
            arr[i] = arr.pop(arr[i])        //pops the item out of the array
        };
    };

    return arr.sort();      //sorts data alphabetically
};

console.log(allHobbies);    //logs clean data