
module.exports.getDate = getDate;

function getDate() {
    var date = new Date();
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var dayy = date.toLocaleString("en-US", options);
    
    return dayy;    
}

module.exports.getDay = getDay;

function getDay() {
    var date = new Date();
    var options = { weekday: 'long' };
    var dayy = date.toLocaleString("en-US", options);

    return dayy;   
}
