setInterval(showTime,1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    var am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm ="PM";
    }
    if (hour == 0){
        hr = 12;
        am_pm = "AM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
    document.getElementById("current-time").innerHTML = currentTime;
    var gm="Good Morning";
    var ga="Good Afternoon";
    var ge="Good Evening";
    var gn="Good Night";
    if(am_pm==="AM"){
        document.getElementById("greeting").innerHTML = gm;
    }
    else if(am_pm==="PM" && hour>=1 && hour<=4){
        document.getElementById("greeting").innerHTML = ga;
    }
    else if(am_pm==="PM" && hour>=4 && hour<=9){
        document.getElementById("greeting").innerHTML = ge;
    }
    else{
        document.getElementById("greeting").innerHTML = gn;
    }
}
showTime()

function showDate()
{
    let date = new Date();
    let day = date.getDay();
    day = day < 10 ? "0" + day : day;
    let month = date.getMonth();
    let year = date.getFullYear();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    var monthName = months[date.getMonth()];
    let currentDate = day + " " + monthName + " " + year;
    document.getElementById("today-date").innerHTML = currentDate;
}
showDate();