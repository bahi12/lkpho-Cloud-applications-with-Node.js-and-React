module.exports.getDate = function getDate() {
    let aestTime = new Date().toLocaleString("en-US", {timeZone: "Europ/London"});
    return new Date(aestTime);
}
