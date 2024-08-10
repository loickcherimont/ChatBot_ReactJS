/**
 * Returns time in 12h format
 * 
 * @returns {string} Hour in English format
 */
export const getEnglishTime = () => {

    let date = new Date();
    let hours = date.getHours(), 
    minutes = date.getMinutes();

    let moment = (hours < 12) ? "AM":"PM";

    return `${hours % 12}:${minutes < 10 ? "0"+minutes : minutes} ${moment}`;
}