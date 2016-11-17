// query HTML elements
var startTimeEl = document.getElementById('start');
var   endTimeEl = document.getElementById('end');
var  intervalEl = document.getElementById('interval');
var    outputEl = document.getElementById('output'); 

// when user clicks generate button
function generate(){
    // get times as strings
    var startTimeString = startTimeEl.value;
    var   endTimeString = endTimeEl.value;
    var  intervalString = intervalEl.value;

    // if we have valid strings
    if(startTimeString && endTimeString && intervalString){
        
        // initialize Date objects
        var   startTime = initializeDate(startTimeString);
        var     endTime = initializeDate(endTimeString);
        var    interval = initializeDate(intervalString);
        var currentTime = initializeDate(startTimeString);
        var outputArray = [];

        // then run loop
        while(currentTime <= endTime){
            outputArray.push(time(currentTime));
            incrementMinutes(currentTime, interval);
        }

        // finally, output array
        var outputString = outputArray.join(', ');
        outputEl.value = outputString;
    }
}

// given a string "hh:mm", initialize a date object with current date and such time
function initializeDate(timeString){
    // get current date
    var myDate = new Date();
    // parse string
    var   hours = parseInt( timeString.substr(0,2) );
    var minutes = parseInt( timeString.substr(3,2) );
    // set time
    myDate.setUTCHours(hours);
    myDate.setUTCMinutes(minutes);
    myDate.setUTCSeconds(0);
    myDate.setUTCMilliseconds(0);
    // then return
    return myDate;
}

// return "hh:mm"
function time(dateObj){
    return dateObj.toISOString().substr(11,5);
}

// add minutes from second date to the first date
function incrementMinutes(dateObj, intervalDateObj){
    var currentMinutes = dateObj.getUTCMinutes();
    var intervalMinutes = intervalDateObj.getUTCMinutes();
    dateObj.setUTCMinutes( currentMinutes + intervalMinutes );
    return dateObj;
}