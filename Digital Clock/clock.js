function digitalclock(){

let date = new Date();
let hours =date.getHours();
let min =date.getMinutes();
let sec =date.getSeconds();

let timeformat = "AM"

if(hours === 0){
  hours = 12
}
if(hours>12){
    hours = hours -12
    timeformat = "PM"
}

hours = hours<10 ? '0'+hours : hours
min = min<10 ? '0'+min : min
sec = sec<10 ? '0'+sec : sec

finaltime = `${hours}: ${min} : ${sec}`

document.getElementById('time').innerText = finaltime
document.querySelector('small').innerText = timeformat
}

setInterval(digitalclock,1000);