
import { Bookings } from "./Bookings.js"
import { Venues } from "./Venue.js"
import { Bands } from "./Bands.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>
<article class="details">
    <section class="detail--column list details__bookings">
        <h2>Current Bookings</h2>
        ${Bookings()}
    </section>
</article>

<article class="venueandbands">
<section class="Venues">
    <h2>Venues</h2>
    ${Venues()}
    </section>
<section class="Bands">
    <h2>Bands</h2>
    ${Bands()}
    </section> 
</article>
`

mainContainer.innerHTML = applicationHTML

