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

console.log("hi");      //test for terminal