
//Current Date and Timer functions//
var currentDate = dayjs().format("MMM D, YYYY");


$("#current-date").text(currentDate);

function setCurrentTime() {
    var setTime = dayjs().format("h:mm:ss");
    $("#current-time").text(setTime);
}
setInterval(setCurrentTime, 1000);

