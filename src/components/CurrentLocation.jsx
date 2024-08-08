/**
 * Returns a link to {@link https://www.google.com/maps|Google Maps}
 * 
 * @param {number} longitude - User's longitude  
 * @param {number} longitude - User's latitude
 * 
 * @returns {HTMLAnchorElement} Link where user could see him/her location
 */
const CurrentLocation = ({ longitude, latitude }) => {
    console.log("Current loc.!")
    return <a href={`https://www.google.com/maps/place/${latitude},${longitude}`} target="_blank">See your location 🔺</a>
}

export { CurrentLocation };