const date_now = new Date();
console.log(date_now)
const full_date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full'}).format(date_now)
console.log(full_date)
document.querySelector('.dateformat').textContent = full_date;

function togglemenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').textContent = year;

let updated = document.lastModified;
document.querySelector('.lastupdated').textContent = updated;