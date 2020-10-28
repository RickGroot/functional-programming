# Functional Programming
A repository for Functional Programming, subject of the Information Design semester of CMD.

# Student information
```javascript
const name = "Rick Groot";
const student_nmbr = "N/A";
const school_mail = "rick.groot2@hva.nl";
let age = 19;

let ID_info = {
        year: 2020,
        semester: 1,
        course: "Tech"
};
```

# Research topic
Where can or cannot be parked with a van in different parking garages in the Netherlands?

## Sub-topics
In which area's are more low parking garages?  
Are there many parking garages outside cities?  


## Required variables
* ID of parking space
* Location of parking garages
* Capacity and other garage information, for better visualisation
* Maximumheight of parking garage
* Data of car types, like height and/or type  
All this data is from RDW datasets. For location of parking garages I use [GEO Parkeer Garages](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34), and for capacity and maximumvehicleheight I use [Open Data Parkeren: SPECIFICATIES PARKEERGEBIED](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s). The datasets I am going to use for the car data are still unknown.

## Expectations
I think that lots of parking garages are perfectly compatible with most cars. If you have a van there could be a problem in some parking garages, because the garages are often too low for big vehicles to enter.
### Sub-topic expectations
I think there are more low parking garages in the older cities, because back then they would not have thought of really high vehicles. I also think there won't be many parking garages outside cities, because there is no need for them, and there is more space for regular parking lots.

# Concept
A map with all parking garages, with information about capacity and maximum vehicle heights. You can also filter the garages by filtering on your car height or car type.