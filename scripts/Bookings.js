import { getBookings, getBands, getVenues } from "./database.js";
let bands = getBands()
let venues = getVenues()
//Above the venue list and band name list, you should display all of the bookings that Samantha Ducarte has helped the bands make at each venue.
//string should look like this
//Rocket Pumpkins are playing at The Cellar Moss on 12/13/2023
//function to find band of booking
let bookings = getBookings()
const findBands = (bookings, allBands) => {
    let booknBand = null
    for (const band of allBands){
        if (band.id === bookings.bandId) {
            booknBand = band
        }
    }return booknBand
}

const findVenue = (bookings, allVenues) => {
    let booknVenue = null
    for (const venue of allVenues){
        if (venue.id === bookings.venueId) {
            booknVenue = venue
        }
    }return booknVenue
}


export const Bookings = () => {
    let bookingHTML = ""
    bookingHTML += "<ul>"

    for (const booking of bookings){
    const band = findBands(booking, bands)
    const venue = findVenue(booking, venues)
    bookingHTML += `<li id="bookings--${booking.id}">${band.name} is playing at ${venue.name} on ${booking.bookingdate}</li>`
   

    }
    bookingHTML += "</ul>"
    return bookingHTML
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("bookings")) {
            const [,bookingId] = itemClicked.id.split("--")
           
            for (const band of bands) {
                if (band.id === parseInt(bookingId)) {
                
                    

                    window.alert(` band name:${band.name}, band members: ${band.members}, genre:${band.genre}, year introduced:${band.yearFormed} ` )
                }
            }
        }
    }
)
//When a booking is clicked, a window alert should be presented to the user that displays all of the band information (name, genre, year formed, number of members).
//Rocket Pumpkins
// EDM
// Formed in 2005
// 3 band members