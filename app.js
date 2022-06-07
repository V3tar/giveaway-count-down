let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let week_days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let future_date = new Date(2023,05,06,18,30);
//select the DOM
let deadline = document.querySelector('.giveaway-deadline h2');
let time_sections = document.querySelectorAll('.count h1');
let time_sections_parent = document.querySelector('.countdown'); 
//extract Month, day of the week ,date ,hours ,minutes and year from future date.
let month = future_date.getMonth();
let week_day = future_date.getDay();
let date = future_date.getDate();
let hours = future_date.getHours();
let minutes = future_date.getMinutes();
let year = future_date.getFullYear();


deadline.textContent = `The deadline To place Bets is on ${week_days[week_day]} ${date} of ${months[month]} ${year} at ${hours}:${minutes}`;

let future_time = future_date.getTime();

let Remaining_time = () => {
    let today = new Date().getTime();
    let time_interval = future_time - today;
    //1day = 24h
    //1hour = 60minutes
    //1minute = 60s
    //60s = 1000ms
    let one_day = 24*60*60*1000;
    let one_hour = 60*60*1000;
    let one_min = 60*1000;
    //calculate the values
    let days = Math.floor(time_interval/one_day);
    let hours = Math.floor(time_interval%one_day/one_hour);
    let minutes = Math.floor(time_interval%one_hour/one_min);
    let seconds = Math.floor(time_interval%one_min/1000);
    //store the values in an array
    let time_values =[days,hours,minutes,seconds];
    let start_zero = (section) => {
        if (section<10) {
            return section =`0${section}`;
        }
        return section;
    }
    time_sections.forEach((section,index) => {
        section.innerHTML = start_zero(time_values[index]);
    })
    if (time_interval < 0) {
        time_sections_parent.innerHTML =`<h4>Sorry This Offer Has Expired</h4>`
    }
}
setInterval(Remaining_time,1000);
Remaining_time();

