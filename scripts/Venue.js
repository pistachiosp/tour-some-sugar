// At the bottom of the page, the name of each venue should be displayed in a bulleted list.

// When a venue name is clicked, a window alert should be presented to the user that displays all of the bands that have booked the venue.

import { getVenues, getBands, getBookings } from "./database.js";
let bands = getBands()
let venues = getVenues()
let bookings = getBookings()
export let Venues = () => {
    let VenueHTML = "<ul>"
    for (const venue of venues) {
        VenueHTML += `<li id="venues--${venue.id}">${venue.name} address: ${venue.address} Square feet: ${venue.sqft} MaxOccupancy: ${venue.maxOccupancy}</li>`
    }
    VenueHTML += "</ul>"
    return VenueHTML
}

const filterBookingByVenue = (venue) => {
let venueAssignments = []
for (const venueAssignment of bookings) {
if (venueAssignment.venueId === venue.id) {
venueAssignments.push(venueAssignment)
}}return venueAssignments}

const assignedBandNames = (venueAssignments) => {
    let bandNames = ""
    for (const venueAssignment of venueAssignments) {
        for (let band of bands) {
            if (band.id === venueAssignment.bandId){
                bandNames += band.name }}} return bandNames}

document.addEventListener(
    "click", // This is the type of event
    (clickEvent) => {
 /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */       
        const itemClicked = clickEvent.target
        //Only run the rest of the logic if a venues <li> was clicked
        if (itemClicked.id.startsWith("venues")) {
            const [,venueId] = itemClicked.id.split("--")

            for (const venue of venues) {
                if (venue.id === parseInt(venueId)) {
                    let venueAssignments = filterBookingByVenue(venue)
                    let band = assignedBandNames(venueAssignments)

                    window.alert(band.slice(0, 20) +` plays here rockon! `)
                }
            }
        }
    }
)