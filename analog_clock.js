//getting all required documernts
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const seconds = document.querySelector(".second");


function time() {
const now = new Date();
const secDeg = now.getSeconds() / 60 * 360 - 90;
seconds.style.transform  = `rotate(${secDeg}deg)`

const minDeg = now.getMinutes() / 60 * 360 - 90
minute.style.transform =    `rotate(${minDeg}deg)`
const  hourDeg = now.getHours() /12 * 360 - 90
hour.style.transform = `rotate(${hourDeg}deg)`
}
setInterval(time,1000)
