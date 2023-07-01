// SEQUENCE

let date = new Date();
let year = date.getFullYear();

console.log(date);
console.log(year);

document.querySelector('h1').textContent= year;

let currentdate = document.lastModified;
console.log(currentdate)
document.querySelector('div').textContent = currentdate;