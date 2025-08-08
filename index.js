const currentHours = document.getElementById('hours');
const currentMinutes = document.getElementById('minutes');
const currentSeconds = document.getElementById('seconds');
const AMPM_time = document.getElementById('ampm_time');
const hour_hand = document.querySelector('.hour');
const minutes_hand = document.querySelector('.minutes')
const seconds_hand = document.querySelector('.seconds');


function showCurrenTime()
{
    const currenTime = new Date; 
    let hours = currenTime.getHours();
    let minutes = currenTime.getMinutes();
    let seconds = currenTime.getSeconds();
    hours = hours % 12 || 12;
    let hour_angle = ((hours % 12) * 30) + (minutes / 60) * 30;
    let minutes_angle = (minutes * 6) + (seconds / 60) * 6;
    let seconds_angle = seconds * 6;
    hour_hand.style.transform = `rotate(${hour_angle}deg)`;
    minutes_hand.style.transform = `rotate(${minutes_angle}deg)`;
    seconds_hand.style.transform = `rotate(${seconds_angle}deg)`;
}
showCurrenTime()
setInterval(showCurrenTime,1000);