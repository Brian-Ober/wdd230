let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').textContent = year;

let updated = document.lastModified;
document.querySelector('.lastupdated').textContent = updated;