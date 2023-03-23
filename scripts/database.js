const database = {
    venues: [{
        id: 1,
        name: "Sky Tower",
        address: "123 All the way up",
        sqft: 1000,
        maxOccupancy: 500

    }, {
        id: 2,
        name: "Flower Tower",
        address: "321 All the way down",
        sqft: 1100,
        maxOccupancy: 600

    }, {
        id: 3,
        name: "Sky Dog",
        address: "222 All the Ruff",
        sqft: 1200,
        maxOccupancy: 700

    }, {
        id: 4,
        name: "Sky Coffee Tower",
        address: "777 All the way up",
        sqft: 1300,
        maxOccupancy: 800

    }],
    bands: [{
        id: 1,
        name: "Debugger",
        members: 4,
        genre: "tecno",
        yearFormed: 2020 
    },{
        id: 2,
        name: "Squashing Bugs",
        members: 1,
        genre: "crunch rock",
        yearFormed: 2020 
    },{
        id: 3,
        name: "Coffee ERD",
        members: 4,
        genre: "speed",
        yearFormed: 2020 
    },{
        id: 4,
        name: "Top Salesperson",
        members: 4,
        genre: "jazz",
        yearFormed: 2020 
    }],
    bookings:[{
        id: 1,
        bandId: 1,
        venueId: 4,
        bookingdate: '04/11/2023'

    },{
        id: 2,
        bandId: 2,
        venueId: 3,
        bookingdate: '04/12/2023'

    },{
        id: 3,
        bandId: 3, 
        venueId: 2,
        bookingdate: '04/13/2023'

    },{
        id: 4,
        bandId: 4, 
        venueId: 1,
        bookingdate: '04/14/2023'
},{
        id:5,
        bandId: 4,
        venueId: 2,
        bookingdate: '04/15/2023'
}],

    // bandBookings:[{
    //     id:1,

    // }]
    }

//create functions to export objects 
export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}
export const getBands = () => {
    return database.bands.map(band => ({...band}))
}
export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}