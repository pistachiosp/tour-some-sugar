import { getBands, getBookings, getVenues } from "./database.js"

//import and envoke function
const bands = getBands()
let bookings = getBookings()
let venues = getVenues()

export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }

    html += "</ul>"

    return html
}

//function needs band info   parameter
const filterBookingByBand = (band) => {
    //empty array to store all assignment objects
    let bandAssignments = []
    //iterate array value of bookings
    for (const bandAssignment of bookings) {
    //check if pk of band === fk on assignment
    if (bandAssignment.bandId === band.id) {
    //if yes push(object to bandarray)
    bandAssignments.push(bandAssignment)
    }}return bandAssignments}
    
    //func that builds a string of venue names
    const assignedVenueNames = (bandAssignments) => {
        //empty string that gets appended with matching venues
        let venueNames =''
        //iterate array of bandassignment obj
        for (const bandAssignment of bandAssignments){
        //for each bandassignment iterate venue to find a match
        for (let venue of venues){
        if (venue.id === bandAssignment.venueId){
        //add name of matching venue to string of venue names
        venueNames += ` ${venue.name} and`
    }}} return venueNames}
// At the bottom of the page, to the right of the venue list, the name of each band should be displayed in a bulleted list.
//make function to display all of the venue at which the band is playing

//add click event for When a band name is clicked, a window alert should be presented to the user that displays all of the venue at which the band is playing
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("band")) {
            const [,bandId] = itemClicked.id.split("--")
            // let matchingVenue = null
            // for (const venue of venues) {
            //     if (matchingVenue.)
            // }
            for (const band of bands) {
                if (band.id === parseInt(bandId)) {
                let bandAssignments = filterBookingByBand(band)
                let venues = assignedVenueNames(bandAssignments)
                    

                    window.alert(` ${band.name} plays at` + venues.slice(0, -4)  )
                }
            }
        }
    }
)
// ${matchingVenue.name}


//function to find band assigned to venue

//bandId needs nested for loop 

//if band.name is clicked iterate throu
//band.id runs through bookings.bandID if match booking.venueId needs to be matched with venue.name
//match venueId 

// //function needs band info   parameter
// const filterBookingByBand = (band) => {
// //empty array to store all assignment objects
// let bandAssignments = []
// //iterate array value of bookings
// for (const bandAssignment of bookings) {
// //check if pk of band === fk on assignment
// if (bandAssignment.bandId === band.id) {
// //if yes push(object to bandarray)
// bandAssignments.push(bandAssignment)
// }}return bandAssignments}

// //func that builds a string of venue names
// const assignedVenueNames = (bandAssignments) => {
//     //empty string that gets appended with matching venues
//     let venueNames =''
//     //iterate array of bandassignment obj
//     for (const bandAssignment of bandAssignments){
//     //for each bandassignment iterate venue to find a match
//     for (let venue of venues){
//     if (venue.id === bandAssignment.venueId){
//     //add name of matching venue to string of venue names
//     venueNames = `${venueNames} and ${venue.name}`
// }}} return venueNames}



// let matchingWalker = null 
//             for (const walker of walkers) {
//                 if (matchingPet.walkerId === walker.id) {
//                     matchingWalker = walker
//                 }
//             }

//Date()
// When called as a function, returns a string representation of the current date and time. All arguments are ignored. The result is the same as executing new Date().toString().

// new Date()