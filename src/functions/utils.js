// Transform time in 24h format to 12h format
export const getEnglishTime = () => {

    let date = new Date();
    let hours = date.getHours(), 
    minutes = date.getMinutes();

    let moment = (hours < 12) ? "AM":"PM";

    return `${hours % 12}:${minutes < 10 ? "0"+minutes : minutes} ${moment}`;
}